import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
const LazyLogin = lazy(() => import("./Pages/Auth/Login"));
const LazyRegister = lazy(() => import("./Pages/Auth/Register"));
const LazyForgotPassword = lazy(() => import("./Pages/Auth/Forgotpassword"));
const LazyHome = lazy(() => import("./Pages/Home"));
const LazyCertificate = lazy(() => import("./Pages/Certificate"));
const Lazyuserprofile = lazy(() => import("./Pages/userprofile"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LazyLogin /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div>Loading...</div>}><LazyRegister /></Suspense>} />
        <Route path="/forgotpassword" element={<Suspense fallback={<div>Loading...</div>}><LazyForgotPassword /></Suspense>} />
        <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><LazyHome /></Suspense>} />
        <Route path="/certificate" element={<Suspense fallback={<div>Loading...</div>}><LazyCertificate /></Suspense>} />
        <Route path="/uprofile" element={<Suspense fallback={<div>Loading...</div>}><Lazyuserprofile /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
