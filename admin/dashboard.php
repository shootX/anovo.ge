<?php
session_start();
if (!isset($_SESSION['admin_user'])) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>მთავარი პანელი – Admin</title>
  <link href="bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: #0f172a; color: #fff; font-family: Inter, sans-serif; }
    .card { background: rgba(255,255,255,0.04); border-radius: 1.5rem; }
    .table thead { background: #1e293b; color: #fff; }
    .table tbody tr { background: rgba(255,255,255,0.02); color: #fff; }
    .admin-menu { margin-bottom: 2rem; }
    .admin-menu a { margin-right: 1rem; }
  </style>
</head>
<body>
  <header class="bg-black text-white py-4 px-6 md:px-12 d-flex justify-content-between align-items-center">
    <div class="flex items-center">
      <span class="text-xl font-bold"><span class="text-danger">kogan.</span>design Admin</span>
    </div>
    <div>
      <a href="logout.php" class="btn btn-outline-light btn-sm">Logout</a>
    </div>
  </header>
  <main class="container my-5">
    <nav class="admin-menu">
      <a href="hero.php" class="btn btn-danger btn-sm">Hero მართვა</a>
      <a href="features.php" class="btn btn-danger btn-sm">Features მართვა</a>
      <a href="services.php" class="btn btn-danger btn-sm">Services მართვა</a>
      <a href="why.php" class="btn btn-danger btn-sm">Why choose us მართვა</a>
    </nav>
    <div class="card p-4 mb-5">
      <h1 class="text-3xl fw-bold mb-4 text-danger">მონაცემთა ბაზა (დემო)</h1>
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>მომხმარებელი</th>
              <th>ელ-ფოსტა</th>
              <th>როლი</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>შოთა ჩხიკვირია</td>
              <td>sh.chkhvirkia@gmail.com</td>
              <td>ადმინი</td>
            </tr>
            <tr>
              <td>2</td>
              <td>დემო მომხმარებელი</td>
              <td>demo@example.com</td>
              <td>მომხმარებელი</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> 