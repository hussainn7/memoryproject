<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Controller for Homepage.
 */
#[Route(path: '/')]
class HomeController extends AbstractController
{

    public function __construct(
        private readonly Security $security
    )
    {

    }

    #[Route(path: '/', name: 'homepage', methods: ['GET'])]
    public function index(): Response
    {
        // Create registration form to get CSRF token for modal
        $form = $this->createForm(\App\Form\Admin\User\UserCreateType::class);
        
        // Show homepage for all users, they can login/register from there
        return $this->render('home/index.html.twig', [
            'registerForm' => $form->createView(),
        ]);
    }

    #[Route(path: '/about', name: 'about', methods: ['GET'])]
    public function about(): Response
    {
        return $this->render('home/about.html.twig');
    }

    #[Route(path: '/features', name: 'features', methods: ['GET'])]
    public function features(): Response
    {
        return $this->render('home/features.html.twig');
    }

    #[Route(path: '/change-language/{locale}', name: 'change_language', methods: ['GET'])]
    public function changeLanguage(Request $request, string $locale): Response
    {
        // Validate that the locale is supported
        $supportedLocales = ['en', 'ru'];
        if (!in_array($locale, $supportedLocales)) {
            $locale = 'ru'; // Default to Russian
        }

        // Set the locale in session
        $request->getSession()->set('_locale', $locale);

        // Force set the locale on the request for immediate effect
        $request->setLocale($locale);

        // Redirect back to the referring page or homepage
        $referer = $request->headers->get('referer');
        if ($referer && strpos($referer, '/change-language/') === false) {
            return $this->redirect($referer);
        }

        return $this->redirectToRoute('homepage');
    }
}
