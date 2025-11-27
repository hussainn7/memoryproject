<?php
//exit();

// CRITICAL: Serve static assets BEFORE loading Symfony (Beget nginx workaround)
$requestUri = $_SERVER['REQUEST_URI'] ?? '';
$path = parse_url($requestUri, PHP_URL_PATH);
if (preg_match('#^/(img|option-bg|images|assets|build|bundles|js)/(.+)$#', $path, $matches)) {
    $dir = $matches[1];
    $file = $matches[2];
    // Don't use basename - preserve full nested path
    $fullPath = __DIR__ . '/' . $dir . '/' . $file;
    
    // Security: prevent directory traversal
    $realBase = realpath(__DIR__);
    $realPath = realpath($fullPath);
    
    if ($realPath && $realBase && strpos($realPath, $realBase) === 0 && is_file($realPath)) {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $realPath);
        finfo_close($finfo);
        
        header('Content-Type: ' . $mimeType);
        header('Content-Length: ' . filesize($realPath));
        header('Cache-Control: public, max-age=31536000');
        readfile($realPath);
        exit;
    }
}

use App\Kernel;
use Symfony\Component\ErrorHandler\Debug;
use Symfony\Component\HttpFoundation\Request;

require dirname(__DIR__).'/config/bootstrap.php';

if ($_SERVER['APP_DEBUG']) {
    umask(0000);
    Debug::enable();
} else {
    \Symfony\Component\VarDumper\VarDumper::setHandler(function($var) {});
}

if ($trustedProxies = $_SERVER['TRUSTED_PROXIES'] ?? $_ENV['TRUSTED_PROXIES'] ?? false) {
    Request::setTrustedProxies(explode(',', $trustedProxies), Request::HEADER_X_FORWARDED_ALL ^ Request::HEADER_X_FORWARDED_HOST);
}

if ($trustedHosts = $_SERVER['TRUSTED_HOSTS'] ?? $_ENV['TRUSTED_HOSTS'] ?? false) {
    Request::setTrustedHosts([$trustedHosts]);
}

$kernel = new Kernel($_SERVER['APP_ENV'], (bool) $_SERVER['APP_DEBUG']);

date_default_timezone_set( 'Europe/Berlin' );

$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
