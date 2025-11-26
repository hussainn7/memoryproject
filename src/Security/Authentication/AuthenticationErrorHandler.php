<?php

namespace App\Security\Authentication;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\HttpFoundation\Response;

class AuthenticationErrorHandler implements AuthenticationFailureHandlerInterface
{
    public function __construct(
        private readonly UrlGeneratorInterface $urlGenerator,
    )
    {
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): Response
    {
        if ($exception->getMessageKey() === 'Invalid or expired login link.') {
            return new RedirectResponse($this->urlGenerator->generate('security_invalid_link'));
        }

        // If AJAX request, return JSON error instead of redirecting
        if ($request->isXmlHttpRequest()) {
            $errorMessage = 'Неверный логин или пароль';
            $messageKey = $exception->getMessageKey();
            
            // Map common error keys to user-friendly messages
            if (in_array($messageKey, ['Invalid credentials.', 'Bad credentials.', 'Username could not be found.'])) {
                $errorMessage = 'Неверный логин или пароль';
            } else {
                // For debugging, include the actual message key
                $errorMessage = 'Ошибка входа: ' . $messageKey;
            }
            
            return new JsonResponse([
                'success' => false,
                'error' => $errorMessage,
                'debug' => [
                    'messageKey' => $messageKey,
                    'message' => $exception->getMessage()
                ]
            ], 401);
        }

        return new RedirectResponse($this->urlGenerator->generate('security_login'));
    }

}