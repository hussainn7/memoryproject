<?php

namespace App\Controller\Front;

use App\Entity\User;
use App\Form\Admin\Payment\PaymentTopUpType;
use App\Repository\PaymentTransactionRepository;
use App\Service\Payment\PaymentService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

#[Route(path: '/account/payments')]
#[Security("is_granted('ROLE_MEMBER') or is_granted('ROLE_MANAGER') or is_granted('ROLE_ADMIN')")]
class PaymentController extends AbstractController
{
    public function __construct(
        private readonly PaymentService $paymentService,
        private readonly PaymentTransactionRepository $transactionRepository,
        private readonly CsrfTokenManagerInterface $csrfTokenManager
    ) {
    }

    #[Route(path: '', name: 'front_payments_index', methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(PaymentTopUpType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $amount = (float) $form->get('amount')->getData();
                $result = $this->paymentService->simulateRobokassaDeposit($user, $amount);

                $this->addFlash($result->isSuccess() ? 'success' : 'danger', $result->getMessage());

                return $this->redirectToRoute('front_payments_index');
            }

            $this->addFlash('danger', 'Проверьте корректность введённых данных.');
        }

        $transactions = $this->transactionRepository->findLatestForUser($user, 50);

        return $this->render('frontend/payment/index.html.twig', [
            'form' => $form->createView(),
            'user' => $user,
            'transactions' => $transactions,
            'testTopUpToken' => $this->csrfTokenManager->getToken('front_payments_test')->getValue(),
        ]);
    }

    #[Route(path: '/test-top-up', name: 'front_payments_test_top_up', methods: ['POST'])]
    public function testTopUp(Request $request): Response
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->json([
                'success' => false,
                'message' => 'Требуется аутентификация.',
            ], Response::HTTP_FORBIDDEN);
        }

        $token = (string) $request->request->get('_token');
        if (!$this->isCsrfTokenValid('front_payments_test', $token)) {
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

        return $this->redirectToRoute('front_payments_index');
    }
}


