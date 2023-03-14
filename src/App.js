import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainPage from "./MainPage";
import DownloadPage from "./DownloadPage";
import { GlobalContext } from "./components/GlobalContext";
import "react-toastify/dist/ReactToastify.css";
import SuccessReg from "./SuccessReg";
import FailedReg from "./FailedReg";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ChangePasswordPage from "./ChangePasswordPage";

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <div>
      <GlobalContext.Provider value={{ logged, setLogged }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/download-page" element={<DownloadPage />} />
          <Route path="/success-registration" element={<SuccessReg />} />
          <Route path="/failed-registration" element={<FailedReg />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/change-password-form"
            element={<ChangePasswordPage />}
          />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
