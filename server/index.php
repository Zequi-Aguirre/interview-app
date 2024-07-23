<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow all origins, you can specify your frontend URL instead of *

// For preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Allow certain HTTP methods and headers
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit(0);
}

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
