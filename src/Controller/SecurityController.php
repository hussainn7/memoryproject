<?php

namespace App\Controller;

use App\Entity\User;
use App\Event\SecurityPasswordResetEvent;
use App\Form\Security\PasswordResetEmailType;
use App\Form\Security\PasswordResetType;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * Controller used to manage the application security.
 * See https://symfony.com/doc/current/cookbook/security/form_login_setup.html.
 */
class SecurityController extends AbstractController
{

    /**
     * SecurityController constructor.
     */
    public function __construct(
        private readonly UserRepository              $userRepository,
        private readonly RoleRepository              $roleRepository,
        private readonly TranslatorInterface         $translator,
        private readonly UserPasswordHasherInterface $hasher,
        private readonly EntityManagerInterface      $manager,
        private readonly EventDispatcherInterface    $eventDispatcher,
        private readonly Security                    $security
    )
    {

    }

    #[Route(path: '/login', name: 'security_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $helper, Request $request): Response
    {
        $error = $helper->getLastAuthenticationError();
        
        // If AJAX request and there's an error, return JSON
        if ($request->isXmlHttpRequest() && $error) {
            return $this->json([
                'success' => false,
                'error' => $error->getMessageKey() === 'Invalid credentials.' 
                    ? 'Неверный логин или пароль' 
                    : $error->getMessageKey(),
                'debug' => [
                    'messageKey' => $error->getMessageKey(),
                    'message' => $error->getMessage()
                ]
            ], 401);
        }
        
        // If AJAX POST request (form submission), let Symfony handle it
        // The form_login authenticator will process it
        if ($request->isXmlHttpRequest() && $request->isMethod('POST')) {
            // If we reach here, authentication might have succeeded
            // Check if user is authenticated
            if ($this->security->getUser()) {
                return $this->json([
                    'success' => true,
                    'redirect' => $this->generateUrl('admin_dashboard')
                ]);
            }
            // If not authenticated and no error, something went wrong
            if (!$error) {
                return $this->json([
                    'success' => false,
                    'error' => 'Ошибка аутентификации'
                ], 401);
            }
        }
        
        //dump($helper);
        return $this->render('security/login.html.twig', [
            // last username entered by the user (if any)
            'last_username' => $helper->getLastUsername(),
            // last authentication error (if any)
            'error' => $error,
        ]);
    }

    #[Route(path: '/register/company', name: 'company_register', methods: ['GET', 'POST'])]
    public function registerCompany(Request $request, UserPasswordHasherInterface $hasher): Response
    {
        $form = $this->createForm(\App\Form\Admin\User\UserCreateType::class);

        $form->handleRequest($request);

        // If AJAX request and form has errors, return JSON
        if ($request->isXmlHttpRequest() && $form->isSubmitted() && !$form->isValid()) {
            $errors = [];
            foreach ($form->getErrors(true) as $error) {
                $errors[] = $error->getMessage();
            }
            return $this->json([
                'success' => false,
                'errors' => $errors
            ], 400);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $password = $form->get('newPassword')->getData();

            // Generate unique email if it ends with @company.local
            $currentEmail = $user->getEmail();
            if (str_ends_with($currentEmail, '@company.local')) {
                // Extract base part (could be "user" or phone number)
                $emailParts = explode('@', $currentEmail);
                $basePart = $emailParts[0];
                
                // If it's already in format "user123", extract the number
                if (preg_match('/^user(\d+)$/', $basePart, $matches)) {
                    $counter = (int)$matches[1] + 1;
                } else {
                    // Start from 1 for new users
                    $counter = 1;
                }
                
                $uniqueEmail = 'user' . $counter . '@company.local';
                
                // Find a unique email by incrementing counter
                while ($this->userRepository->findOneBy(['email' => $uniqueEmail])) {
                    $counter++;
                    $uniqueEmail = 'user' . $counter . '@company.local';
                }
                
                $user->setEmail($uniqueEmail);
            }

            // Set company role - try ROLE_MANAGER first, then ROLE_MEMBER as fallback
            $role = $this->roleRepository->findOneBy(['name' => 'ROLE_MANAGER']);
            if (!$role) {
                // Fallback to ROLE_MEMBER if ROLE_MANAGER doesn't exist
                $role = $this->roleRepository->findOneBy(['name' => 'ROLE_MEMBER']);
            }
            if (!$role) {
                // If no roles exist, throw an error
                if ($request->isXmlHttpRequest()) {
                    return $this->json([
                        'success' => false,
                        'errors' => ['Ошибка: роль не найдена в системе. Обратитесь к администратору.']
                    ], 500);
                }
                $this->addFlash('error', 'Ошибка: роль не найдена в системе. Обратитесь к администратору.');
                return $this->render('security/company_register.html.twig', [
                    'form' => $form->createView(),
                ]);
            }
            $user->setRole($role);

            // Set UUID if not set
            if (!$user->getUuid()) {
                $user->setUuid(\Ramsey\Uuid\Uuid::uuid4()->toString());
            }

            // Hash password
            $hashedPassword = $hasher->hashPassword($user, $password);
            $user->setPassword($hashedPassword);

            $this->manager->persist($user);
            $this->manager->flush();

            $this->addFlash('success', 'Компания успешно зарегистрирована! Теперь вы можете войти в систему.');

            // If AJAX request, return JSON success
            if ($request->isXmlHttpRequest()) {
                return $this->json([
                    'success' => true,
                    'message' => 'Компания успешно зарегистрирована! Теперь вы можете войти в систему.'
                ]);
            }

            return $this->redirectToRoute('security_login');
        }

        // If AJAX request on GET, return form HTML
        if ($request->isXmlHttpRequest()) {
            return $this->json([
                'html' => $this->renderView('security/company_register.html.twig', [
                    'form' => $form->createView(),
                ])
            ]);
        }

        return $this->render('security/company_register.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/login-redirect', name: 'security_login_redirect')]
    public function loginRedirect(): Response
    {
        if (!$this->security->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('security_login');
        }
        if ($this->security->isGranted('ROLE_MANAGER')) {
            return $this->redirectToRoute('admin_dashboard');
        } elseif ($this->security->isGranted('ROLE_MEMBER')) {
            return $this->redirectToRoute('admin_dashboard');
        } else {
            return $this->redirectToRoute('admin_dashboard');
        }
    }

    /**
     * This is the route the user can use to logout.
     *
     * But, this will never be executed. Symfony will intercept this first
     * and handle the logout automatically. See logout in config/packages/security.yaml
     */
    #[Route(path: '/logout', name: 'security_logout')]
    public function logout(): void
    {
        throw new \Exception('This should never be reached!');
    }

    /**
     * @throws \Exception
     */
    #[Route(path: '/reset-credential', methods: ['GET', 'POST'], name: 'security_reset_password')]
    public function resetPassword(Request $request): Response
    {
        // $user = $this->getUser();

        $form = $this->createForm(PasswordResetEmailType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            if (empty($data['username'])) {
                $this->addFlash('danger', $this->translator->trans('security.username_empty'));

                return $this->redirectToRoute('security_reset_password');
            }

            $user = $this->userRepository->findOneBy([
                'username' => $data['username'],
            ]);

            if (null !== $user) {
                $dateInterval = new \DateInterval('PT2H');
                $user->generateResetToken($dateInterval);
                $this->manager->flush();

                // UserCreatedEvent is called
                $event = new SecurityPasswordResetEvent($user);

                // See https://symfony.com/doc/current/components/event_dispatcher.html
                $this->eventDispatcher->dispatch($event);

                $this->addFlash('success', $this->translator->trans('security.password_reset_email_send'));
            }

            return $this->redirectToRoute('security_reset_password');
        }

        return $this->render('security/password_reset.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/reset-credential/{token}', methods: ['GET', 'POST'], name: 'security_reset_password_token')]
    public function resetPasswordToken(Request $request): Response
    {
        $token = $request->get('token');

        if (null !== $token) {
            // Check if Token is available
            /** @var User $user */
            $user = $this->userRepository->findOneBy([
                'resetToken' => $request->get('token'),
            ]);

            if (null !== $user && false != $user->isResetTokenValid($token)) {
                $form = $this->createForm(PasswordResetType::class);
                $form->handleRequest($request);

                if ($form->isSubmitted() && $form->isValid()) {
                    $user->setPassword($this->hasher->hashPassword($user, $form->get('newPassword')->getData()));
                    $user->clearResetToken();

                    $this->manager->flush();

                    $this->addFlash('success', $this->translator->trans('security.password_changed'));

                    return $this->redirectToRoute('security_login');
                }

                return $this->render('security/password_reset.html.twig', [
                    'form' => $form->createView(),
                ]);
            }
        }

        return $this->redirectToRoute('security_login');
    }


    #[Route('/login_check', name: 'login_check')]
    public function check(Request $request): never
    {
        $expires = $request->query->get('expires');
        $username = $request->query->get('user');
        $hash = $request->query->get('hash');
//        dump($expires);
//        dump($username);
//        dump($hash);

        //throw new \LogicException('This code should never be reached');
    }


    #[Route('/invalid-link', name: 'security_invalid_link')]
    public function invalidLink(Request $request): Response
    {
        return $this->render('frontend/error/login_invalid_link.html.twig' );
    }
}
