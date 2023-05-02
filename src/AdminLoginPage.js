import React from 'react';

function AdminLoginPage() {
  return (
    <div>
      <h1>Admin Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button>Login</button>
      </form>
      <p>Don't have an account? <a href="/admin/register">Register</a></p>
    </div>
  );
}

export default AdminLoginPage;
