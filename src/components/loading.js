import React, { useEffect } from "react";
import "../styles/loading.css";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <div className="spinner-container">
        <div class="spinner">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
