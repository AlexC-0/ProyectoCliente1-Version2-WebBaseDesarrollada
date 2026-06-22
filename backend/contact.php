<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('X-Frame-Options: DENY');
header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'");
header('Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()');
header('Cross-Origin-Resource-Policy: same-origin');
header('X-Permitted-Cross-Domain-Policies: none');
header('Cache-Control: no-store');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Metodo no permitido.']);
}

if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 10240) {
    respond(413, ['ok' => false, 'message' => 'Solicitud demasiado grande.']);
}

$allowedFields = ['website', 'name', 'company', 'email', 'country', 'application', 'product', 'stage', 'volume', 'message', 'privacy'];
$allowedApplication = ['bus', 'sea', 'agr', 'vcl', 'charge', 'rail', 'unknown'];
$allowedProduct = ['nmc', 'lfp', 'bms', 'system', 'compare'];
$allowedStage = ['quote', 'design', 'validation', 'purchase'];
$allowedVolume = ['', 'prototype', 'short', 'medium', 'open'];

foreach (array_keys($_POST) as $field) {
    if (!in_array($field, $allowedFields, true) || is_array($_POST[$field])) {
        respond(422, ['ok' => false, 'message' => 'El formulario contiene valores no contemplados.']);
    }
}

if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(200, ['ok' => true, 'message' => 'Solicitud recibida.']);
}

function field(string $key): string
{
    if (!isset($_POST[$key]) || is_array($_POST[$key])) {
        return '';
    }

    return trim((string)$_POST[$key]);
}

function valid_text(string $value, int $min, int $max, string $pattern): bool
{
    $length = strlen($value);
    return $length >= $min && $length <= $max && preg_match($pattern, $value) === 1;
}

$errors = [];
$name = field('name');
$company = field('company');
$email = strtolower(field('email'));
$country = field('country');
$application = field('application');
$product = field('product');
$stage = field('stage');
$volume = field('volume');
$message = field('message');
$privacy = field('privacy');

if (!valid_text($name, 2, 80, "/^[\\p{L}\\p{M} .'-]+$/u")) {
    $errors[] = 'name';
}

if (!valid_text($company, 2, 120, "/^[\\p{L}\\p{M}0-9 .,&()\\/-]+$/u")) {
    $errors[] = 'company';
}

if (strlen($email) > 160 || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $errors[] = 'email';
}

if (!valid_text($country, 0, 80, "/^[\\p{L}\\p{M} .'-]*$/u")) {
    $errors[] = 'country';
}

if (!in_array($application, $allowedApplication, true)) {
    $errors[] = 'application';
}

if (!in_array($product, $allowedProduct, true)) {
    $errors[] = 'product';
}

if (!in_array($stage, $allowedStage, true)) {
    $errors[] = 'stage';
}

if (!in_array($volume, $allowedVolume, true)) {
    $errors[] = 'volume';
}

if (strlen($message) < 12 || strlen($message) > 1400 || preg_match('/[<>{}\\[\\]`]/', $message) === 1) {
    $errors[] = 'message';
}

if ($privacy !== 'accepted') {
    $errors[] = 'privacy';
}

if ($errors !== []) {
    respond(422, ['ok' => false, 'message' => 'Revisa los campos marcados.', 'fields' => $errors]);
}

respond(200, ['ok' => true, 'message' => 'Consulta validada correctamente.']);
