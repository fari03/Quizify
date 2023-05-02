import React from 'react';

function StudentLoginPage() {
  return (
    <div>
      <h1>Student Login</h1>
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
      <p>Don't have an account? <a href="/register/student">Register here</a></p>
    </div>
  );
}

export default StudentLoginPage;
