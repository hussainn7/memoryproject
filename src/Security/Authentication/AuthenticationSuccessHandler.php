<?php
namespace App\Security\Authentication;

use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;

class AuthenticationSuccessHandler implements AuthenticationSuccessHandlerInterface
{

    public function __construct(
        private readonly UrlGeneratorInterface $urlGenerator,
        private readonly Security $security
    )
    {
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token): Response
    {
        // If AJAX request, return JSON success
        if ($request->isXmlHttpRequest()) {
            return new JsonResponse([
                'success' => true,
                'redirect' => $this->urlGenerator->generate('admin_dashboard')
            ]);
        }
        
        return new RedirectResponse($this->urlGenerator->generate('admin_dashboard'));
    }
}