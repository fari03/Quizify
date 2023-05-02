import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AdminLoginPage from './AdminLoginPage';
import Home from './HomePage';
import StudentLoginPage from './StudentLoginPage';
import AdminDashboard from './AdminDashboard';
import Performance from './Performance';
import PlayQuiz from './PlayQuiz';
import ViewResults from './ViewResults';
import ConductQuiz from './ConductQuiz';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/conduct-quiz" element={<ConductQuiz />} />
        <Route path="/view-results" element={<ViewResults />} />
        <Route path="/play-quiz" element={<PlayQuiz />} />
        <Route path="/performance" element={<Performance />} />
      </Routes>
    </Router>
  );
}

export default App;
