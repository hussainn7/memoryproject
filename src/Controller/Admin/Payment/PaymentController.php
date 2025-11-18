<?php

namespace App\Controller\Admin\Payment;

use App\Entity\User;
use App\Form\Admin\Payment\PaymentTopUpType;
use App\Repository\PaymentTransactionRepository;
use App\Repository\UserRepository;
use App\Service\Payment\PaymentService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

#[Route(path: '/admin/payments')]
#[Security("is_granted('ROLE_MANAGER') or is_granted('ROLE_ADMIN')")]
class PaymentController extends AbstractController
{
    public function __construct(
        private readonly PaymentService $paymentService,
        private readonly PaymentTransactionRepository $transactionRepository,
        private readonly UserRepository $userRepository,
        private readonly CsrfTokenManagerInterface $csrfTokenManager
    ) {
    }

    #[Route(path: '/', name: 'admin_payments_index', methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $form = $this->createForm(PaymentTopUpType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $amount = (float) $form->get('amount')->getData();
                $result = $this->paymentService->simulateRobokassaDeposit($user, $amount);

                $this->addFlash($result->isSuccess() ? 'success' : 'danger', $result->getMessage());

                return $this->redirectToRoute('admin_payments_index');
            }

            $this->addFlash('danger', 'Проверьте корректность введённых данных.');
        }

        $isAdminView = $this->isGranted('ROLE_ADMIN');

        $selectedUser = null;
        if ($isAdminView) {
            $selectedUserId = (int) $request->query->get('userId', 0);
            if ($selectedUserId > 0) {
                $selectedUser = $this->userRepository->find($selectedUserId);
            }
        }

        if ($isAdminView && $selectedUser instanceof User) {
            $transactions = $this->transactionRepository->findLatestForUser($selectedUser, 100);
        } elseif ($isAdminView) {
            $transactions = $this->transactionRepository->findLatest(100);
        } else {
            $transactions = $this->transactionRepository->findLatestForUser($user, 50);
        }

        return $this->render('admin/payment/index.html.twig', [
            'form' => $form->createView(),
            'user' => $selectedUser instanceof User ? $selectedUser : $user,
            'transactions' => $transactions,
            'testTopUpToken' => $this->csrfTokenManager->getToken('admin_payments_test')->getValue(),
            'isAdminView' => $isAdminView,
            'users' => $isAdminView ? $this->userRepository->findBy([], ['email' => 'ASC']) : [],
            'selectedUserId' => $selectedUser instanceof User ? $selectedUser->getId() : 0,
        ]);
    }

    #[Route(path: '/test-top-up', name: 'admin_payments_test_top_up', methods: ['POST'])]
    public function testTopUp(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $token = (string) $request->request->get('_token');
        if (!$this->isCsrfTokenValid('admin_payments_test', $token)) {
            return $this->json([
                'success' => false,
                'message' => 'Неверный токен безопасности.',
            ], Response::HTTP_FORBIDDEN);
        }

        $amount = (float) $request->request->get('amount', 500);
        $result = $this->paymentService->simulateRobokassaDeposit($user, $amount);

        $statusCode = $result->isSuccess() ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST;
        $payload = [
            'success' => $result->isSuccess(),
            'message' => $result->getMessage(),
            'balance' => $user->getBalance(),
        ];

        if ($request->isXmlHttpRequest()) {
            return $this->json($payload, $statusCode);
        }

        $this->addFlash($result->isSuccess() ? 'success' : 'danger', $result->getMessage());

        return $this->redirectToRoute('admin_payments_index');
    }

}

