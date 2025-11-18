<?php

namespace App\Controller\Admin;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/admin/settings')]
#[Security("is_granted('ROLE_ADMIN')")]
class SettingsController extends AbstractController
{
    public function __construct(
        private readonly ParameterBagInterface $params
    ) {
    }

    #[Route(path: '/', name: 'admin_settings_index', methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $configFile = $this->params->get('kernel.project_dir') . '/config/services.yaml';
        $currentPrice = (float) $this->params->get('photo_extension_price', 500);

        if ($request->isMethod('POST')) {
            $newPrice = (float) $request->request->get('photo_extension_price', 500);
            if ($newPrice < 0) {
                $this->addFlash('danger', 'Цена не может быть отрицательной');
            } else {
                // Update config file
                $content = file_get_contents($configFile);
                $content = preg_replace(
                    '/photo_extension_price:\s*\d+/',
                    'photo_extension_price: ' . $newPrice,
                    $content
                );
                file_put_contents($configFile, $content);

                $this->addFlash('success', sprintf('Цена расширения фото установлена: %d ₽. Обновите страницу, чтобы изменения вступили в силу.', $newPrice));
                return $this->redirectToRoute('admin_settings_index');
            }
        }

        return $this->render('admin/settings/index.html.twig', [
            'photo_extension_price' => $currentPrice,
        ]);
    }
}

