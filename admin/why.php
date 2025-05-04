<?php
session_start();
if (!isset($_SESSION['admin_user'])) {
    header('Location: login.php');
    exit;
}

$mysqli = new mysqli("localhost", "admin_anovoroot", "Dr@nda252", "admin_anovo");
$mysqli->set_charset("utf8mb4");

// შენახვა
$success = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mysqli->query("DELETE FROM content WHERE section='why'");
    $title = $mysqli->real_escape_string($_POST['title'] ?? '');
    $mysqli->query("INSERT INTO content (section, field, value) VALUES ('why', 'title', '$title')");
    $numbers = $_POST['number'] ?? [];
    $texts = $_POST['text'] ?? [];
    $colors = $_POST['color'] ?? [];
    $icons = $_POST['icon'] ?? [];
    foreach ($numbers as $i => $number) {
        $number = $mysqli->real_escape_string($number);
        $text = $mysqli->real_escape_string($texts[$i] ?? '');
        $color = $mysqli->real_escape_string($colors[$i] ?? '');
        $icon = $mysqli->real_escape_string($icons[$i] ?? '');
        $mysqli->query("INSERT INTO content (section, field, value) VALUES ('why', '{$i}_number', '$number')");
        $mysqli->query("INSERT INTO content (section, field, value) VALUES ('why', '{$i}_text', '$text')");
        $mysqli->query("INSERT INTO content (section, field, value) VALUES ('why', '{$i}_color', '$color')");
        $mysqli->query("INSERT INTO content (section, field, value) VALUES ('why', '{$i}_icon', '$icon')");
    }
    $success = true;
}

// წაკითხვა
$why_title = '';
$why = [];
$res = $mysqli->query("SELECT field, value FROM content WHERE section='why'");
foreach ($res as $row) {
    if ($row['field'] === 'title') $why_title = $row['value'];
    if (preg_match('/^(\d+)_(number|text|color|icon)$/', $row['field'], $m)) {
        $idx = (int)$m[1];
        $type = $m[2];
        if (!isset($why[$idx])) $why[$idx] = ['number'=>'','text'=>'','color'=>'','icon'=>''];
        $why[$idx][$type] = $row['value'];
    }
}
ksort($why);
?>
<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Why choose us მართვა – Admin</title>
  <link href="bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: #0f172a; color: #fff; font-family: Inter, sans-serif; }
    .card { background: rgba(255,255,255,0.04); border-radius: 1.5rem; }
    label { color: #fff; }
    .remove-btn { cursor:pointer; color:#ef4444; font-size:1.2em; }
  </style>
</head>
<body>
  <header class="bg-black text-white py-4 px-6 md:px-12 d-flex justify-content-between align-items-center">
    <div class="flex items-center">
      <span class="text-xl font-bold"><span class="text-danger">kogan.</span>design Admin</span>
    </div>
    <div>
      <a href="dashboard.php" class="btn btn-outline-light btn-sm me-2">დასაბრუნებლად</a>
      <a href="logout.php" class="btn btn-outline-light btn-sm">Logout</a>
    </div>
  </header>
  <main class="container my-5">
    <div class="card p-4 mb-5 mx-auto" style="max-width:700px;">
      <h1 class="text-2xl fw-bold mb-4 text-danger">Why choose us მართვა</h1>
      <?php if($success): ?><div class="alert alert-success">მონაცემები შენახულია</div><?php endif; ?>
      <form method="post" autocomplete="off" id="why-form">
        <div class="mb-3">
          <label class="form-label">სათაური</label>
          <input type="text" name="title" class="form-control form-control-lg" value="<?php echo htmlspecialchars($why_title); ?>" required>
        </div>
        <div id="why-list">
          <?php foreach($why as $i => $w): ?>
          <div class="row mb-3 why-row align-items-end">
            <div class="col-md-2">
              <label class="form-label">რიცხვი</label>
              <input type="text" name="number[]" class="form-control form-control-lg" value="<?php echo htmlspecialchars($w['number']); ?>" required>
            </div>
            <div class="col-md-4">
              <label class="form-label">ტექსტი</label>
              <input type="text" name="text[]" class="form-control form-control-lg" value="<?php echo htmlspecialchars($w['text']); ?>" required>
            </div>
            <div class="col-md-3">
              <label class="form-label">ფერი (Tailwind კლასი)</label>
              <input type="text" name="color[]" class="form-control form-control-lg" value="<?php echo htmlspecialchars($w['color']); ?>">
            </div>
            <div class="col-md-2">
              <label class="form-label">აიქონი</label>
              <input type="text" name="icon[]" class="form-control form-control-lg" value="<?php echo htmlspecialchars($w['icon']); ?>">
            </div>
            <div class="col-md-1 text-end">
              <span class="remove-btn" onclick="removeWhy(this)">&times;</span>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
        <button type="button" class="btn btn-secondary mb-3" onclick="addWhy()">+ დამატება</button>
        <button type="submit" class="btn btn-danger w-100">შენახვა</button>
      </form>
    </div>
  </main>
  <script src="bootstrap.min.css"></script>
  <script>
    function addWhy() {
      const html = `<div class=\"row mb-3 why-row align-items-end\">\n  <div class=\"col-md-2\">\n    <label class=\"form-label\">რიცხვი<\/label>\n    <input type=\"text\" name=\"number[]\" class=\"form-control form-control-lg\" required>\n  <\/div>\n  <div class=\"col-md-4\">\n    <label class=\"form-label\">ტექსტი<\/label>\n    <input type=\"text\" name=\"text[]\" class=\"form-control form-control-lg\" required>\n  <\/div>\n  <div class=\"col-md-3\">\n    <label class=\"form-label\">ფერი (Tailwind კლასი)<\/label>\n    <input type=\"text\" name=\"color[]\" class=\"form-control form-control-lg\">\n  <\/div>\n  <div class=\"col-md-2\">\n    <label class=\"form-label\">აიქონი<\/label>\n    <input type=\"text\" name=\"icon[]\" class=\"form-control form-control-lg\">\n  <\/div>\n  <div class=\"col-md-1 text-end\">\n    <span class=\"remove-btn\" onclick=\"removeWhy(this)\">&times;<\/span>\n  <\/div>\n<\/div>`;
      document.getElementById('why-list').insertAdjacentHTML('beforeend', html);
    }
    function removeWhy(el) {
      el.closest('.why-row').remove();
    }
  </script>
</body>
</html> 