import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import LazySuspense from './Components/LazySuspense.jsx'

const LazyLogin = lazy(() => import("./Pages/Auth/Login.jsx"));
const LazyRegister = lazy(() => import("./Pages/Auth/Register.jsx"));
const LazyForgotPassword = lazy(() => import("./Pages/Auth/Forgotpassword.jsx"));
const LazyHome = lazy(() => import("./Pages/Home.jsx"));
const LazyCertificate = lazy(() => import("./Pages/User/Certificate.jsx"));
const LazyEnquiry = lazy(() => import("./Pages/User/Enquiry.jsx"));
const LazyLC = lazy(() => import("./Pages/User/LC.jsx"));
const LazyIELTS = lazy(() => import("./Pages/User/IELTS"));
const LazyITOEFL = lazy(() => import("./Pages/User/TOEFL"));
const Lazypte = lazy(() => import("./Pages/User/pte"));
const LazyBec = lazy(() => import("./Pages/User/Bec"));
const LazyTrinity = lazy(() => import("./Pages/User/Trinity"));
const LazyUdash = lazy(() => import("./Pages/User/dashboard"));
const Lazyctable = lazy(() => import("./Pages/User/Courset"));
const Lazyetable = lazy(() => import("./Pages/User/Enquiryt"));
const Lazyadash = lazy(() => import("./Pages/Admin/Dash"));
const Lazyaddc = lazy(() => import("./Pages/Admin/addc"));
const Lazypayt = lazy(() => import("./Pages/Admin/payt.jsx"));
const Lazyadvc = lazy(() => import("./Pages/Admin/advc"));
const Lazypay=lazy(() => import("./Pages/User/Payment .jsx"));
const LazyFaq=lazy(() => import("./Pages/User/Faq.jsx"));
function App() {
  const role = localStorage.getItem('role');

  return (
    <Routes>
      <Route path="/" element={<Navigate to={role === 'role1' ? "/login" : "/login"} />} />
      <Route path="/login" element={<LazySuspense component={LazyLogin} />} />
      <Route path="/register" element={<LazySuspense component={LazyRegister} />} />
      <Route path="/forgotpassword" element={<LazySuspense component={LazyForgotPassword} />} />

   
      {role === 'role1' && (
        <>
          <Route path="/home" element={<LazySuspense component={LazyHome} />} />
          <Route path="/certificate" element={<LazySuspense component={LazyCertificate} />} />
          <Route path="/Enquiry" element={<LazySuspense component={LazyEnquiry} />} />
          <Route path="/lc" element={<LazySuspense component={LazyLC} />} />
          <Route path="/ielts" element={<LazySuspense component={LazyIELTS} />} />
          <Route path="/TOEFL" element={<LazySuspense component={LazyITOEFL} />} />
          <Route path="/pte" element={<LazySuspense component={Lazypte} />} />
          <Route path="/bec" element={<LazySuspense component={LazyBec} />} />
          <Route path="/trinity" element={<LazySuspense component={LazyTrinity} />} />
          <Route path="/udash" element={<LazySuspense component={LazyUdash} />} />
          <Route path="/ctable" element={<LazySuspense component={Lazyctable} />} />
          <Route path="/etable" element={<LazySuspense component={Lazyetable} />} />
          <Route path="/pay" element={<LazySuspense component={Lazypay} />} />
          <Route path="/Faq" element={<LazySuspense component={LazyFaq} />} />
        </>
      )}

  
      {role === 'role2' && (
        <>
          <Route path="/adash" element={<LazySuspense component={Lazyadash} />} />
          <Route path="/addc" element={<LazySuspense component={Lazyaddc} />} />
          <Route path="/payt" element={<LazySuspense component={Lazypayt} />} />
          <Route path="/advc" element={<LazySuspense component={Lazyadvc} />} />
          <Route path="/etable" element={<LazySuspense component={Lazyetable} />} />
        </>
      )}
    </Routes>
  );
}

export default App;
