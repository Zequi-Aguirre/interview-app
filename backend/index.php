<?php
header('Content-Type: application/json');

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($path) {
    case '/api/screen1':
        echo json_encode(['message' => 'This is screen 1']);
        break;
    case '/api/screen2':
        echo json_encode(['message' => 'This is screen 2']);
        break;
    case '/api/screen3':
        echo json_encode(['message' => 'This is screen 3']);
        break;
    default:
        echo json_encode(['message' => 'Welcome to the API']);
}
?>
