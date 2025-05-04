<?php
header('Content-Type: application/json');
$mysqli = new mysqli("localhost", "admin_anovoroot", "Dr@nda252", "admin_anovo");
$mysqli->set_charset("utf8mb4");

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

$data = [
    "hero" => [],
    "features" => [],
    "services" => []
];

// HERO
$res = $mysqli->query("SELECT field, value FROM content WHERE section = 'hero'");
while ($row = $res->fetch_assoc()) {
    if ($row["field"] === "tags") {
        $data["hero"]["tags"] = json_decode($row["value"], true);
    } else {
        $data["hero"][$row["field"]] = $row["value"];
    }
}

// FEATURES
$res = $mysqli->query("SELECT field, value FROM content WHERE section = 'features'");
$features = [];
foreach ($res as $row) {
    if (preg_match("/^(\d+)_(title|text)$/", $row["field"], $m)) {
        $idx = (int)$m[1];
        $type = $m[2];
        if (!isset($features[$idx])) $features[$idx] = [];
        $features[$idx][$type] = $row["value"];
    }
}
$data["features"] = array_values($features);

// SERVICES
$res = $mysqli->query("SELECT field, value FROM content WHERE section = 'services'");
$services = [];
foreach ($res as $row) {
    if (preg_match("/^(\d+)_(title|price)$/", $row["field"], $m)) {
        $idx = (int)$m[1];
        $type = $m[2];
        if (!isset($services[$idx])) $services[$idx] = [];
        $services[$idx][$type] = $row["value"];
    }
}
$data["services"] = array_values($services);

echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT); 