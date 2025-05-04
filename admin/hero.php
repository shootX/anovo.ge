<?php
session_start();
if (!isset($_SESSION['admin_user'])) {
    header('Location: login.php');
    exit;
}

// ბაზასთან კავშირი
$mysqli = new mysqli("localhost", "admin_anovoroot", "Dr@nda252", "admin_anovo");
$mysqli->set_charset("utf8mb4");

// შენახვა
$success = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $mysqli->real_escape_string($_POST['title'] ?? '');
    $tags = array_map('trim', explode(',', $_POST['tags'] ?? ''));
    // title განახლება ან ჩასმა
    $mysqli->query("DELETE FROM content WHERE section='hero' AND field='title'");
    $mysqli->query("INSERT INTO content (section, field, value) VALUES ('hero', 'title', '$title')");
    // tags განახლება ან ჩასმა
    $mysqli->query("DELETE FROM content WHERE section='hero' AND field='tags'");
    $tags_json = $mysqli->real_escape_string(json_encode($tags, JSON_UNESCAPED_UNICODE));
    $mysqli->query("INSERT INTO content (section, field, value) VALUES ('hero', 'tags', '$tags_json')");
    $success = true;
}

// წაკითხვა
$title = '';
$tags = [];
$res = $mysqli->query("SELECT field, value FROM content WHERE section='hero'");
while ($row = $res->fetch_assoc()) {
    if ($row['field'] === 'title') $title = $row['value'];
    if ($row['field'] === 'tags') $tags = json_decode($row['value'], true) ?: [];
}
?>
<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hero მართვა – Admin</title>
  <link href="bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: #0f172a; color: #fff; font-family: Inter, sans-serif; }
    .card { background: rgba(255,255,255,0.04); border-radius: 1.5rem; }
    label { color: #fff; }
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
    <div class="card p-4 mb-5 mx-auto" style="max-width:500px;">
      <h1 class="text-2xl fw-bold mb-4 text-danger">Hero მართვა</h1>
      <?php if($success): ?><div class="alert alert-success">მონაცემები შენახულია</div><?php endif; ?>
      <form method="post" autocomplete="off">
        <div class="mb-3">
          <label for="hero-title" class="form-label">სათაური</label>
          <input type="text" class="form-control form-control-lg" id="hero-title" name="title" value="<?php echo htmlspecialchars($title); ?>" required>
        </div>
        <div class="mb-3">
          <label for="hero-tags" class="form-label">ტეგები (გამოყავი მძიმით)</label>
          <input type="text" class="form-control form-control-lg" id="hero-tags" name="tags" value="<?php echo htmlspecialchars(implode(', ', $tags)); ?>" required>
        </div>
        <button type="submit" class="btn btn-danger w-100">შენახვა</button>
      </form>
    </div>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> 