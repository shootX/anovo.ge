<?php
session_start();
$err = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mysqli = new mysqli("localhost", "admin_anovoroot", "Dr@nda252", "admin_anovo");
    $mysqli->set_charset("utf8mb4");
    $email = $mysqli->real_escape_string($_POST['email'] ?? '');
    $pass = $_POST['password'] ?? '';
    $res = $mysqli->query("SELECT * FROM admin_users WHERE email='$email' LIMIT 1");
    if ($row = $res->fetch_assoc()) {
        if (password_verify($pass, $row['password'])) {
            $_SESSION['admin_user'] = $row['email'];
            header('Location: dashboard.php');
            exit;
        } else {
            $err = 'პაროლი არასწორია';
        }
    } else {
        $err = 'მომხმარებელი არ მოიძებნა';
    }
}
?>
<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ავტორიზაცია – Admin</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: #0f172a; }
    .login-bg {
      background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') center center/cover no-repeat;
      min-height: 100vh;
    }
    .login-form {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(15,23,42,0.97);
    }
    .form-box {
      background: rgba(255,255,255,0.04);
      border-radius: 1.5rem;
      box-shadow: 0 8px 32px 0 rgba(31,38,135,0.17);
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 400px;
    }
    .logo-demo {
      font-size: 2rem;
      font-weight: bold;
      color: #ef4444;
      letter-spacing: 1px;
    }
    .form-control:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 0.2rem rgba(239,68,68,.15);
    }
  </style>
</head>
<body>
  <div class="container-fluid">
    <div class="row g-0">
      <div class="col-lg-7 d-none d-lg-block login-bg"></div>
      <div class="col-12 col-lg-5 login-form">
        <div class="form-box mx-auto">
          <div class="text-center mb-4">
            <span class="logo-demo">kogan.design Admin</span>
          </div>
          <h2 class="mb-3 fw-bold text-center text-danger">ავტორიზაცია</h2>
          <?php if($err): ?>
            <div class="alert alert-danger text-center py-2"><?php echo $err; ?></div>
          <?php endif; ?>
          <form method="post" autocomplete="off">
            <div class="mb-3">
              <label for="email" class="form-label">ელ-ფოსტა</label>
              <input type="email" name="email" id="email" class="form-control form-control-lg" placeholder="you@email.com" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">პაროლი</label>
              <input type="password" name="password" id="password" class="form-control form-control-lg" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn btn-danger w-100 py-2 fw-bold">შესვლა</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> 