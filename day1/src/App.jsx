import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
const LazyLogin = lazy(() => import("./Pages/Auth/Login"));
const LazyRegister = lazy(() => import("./Pages/Auth/Register"));
const LazyForgotPassword = lazy(() => import("./Pages/Auth/Forgotpassword"));



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LazyLogin /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div>Loading...</div>}><LazyRegister /></Suspense>} />
        <Route path="/forgotpassword" element={<Suspense fallback={<div>Loading...</div>}><LazyForgotPassword /></Suspense>} />
      
      </Routes>
    </div>
  );
}

export default App;
