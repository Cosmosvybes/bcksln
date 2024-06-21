import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const AuthController = () => {
  let authStatus = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();
  useEffect(() => {
    if (!authStatus) {
      navigate("/");
    }
  }, []);
};
