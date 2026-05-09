import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
          <App />
      </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
    <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  </StrictMode>,
);
