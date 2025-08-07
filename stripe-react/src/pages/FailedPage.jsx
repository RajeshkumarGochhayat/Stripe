import React from 'react';
import { useNavigate } from 'react-router-dom';

const FailedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-danger bg-opacity-10">
      <div
        className="text-center bg-white shadow-lg rounded-5 p-5 animate__animated animate__shakeX"
        style={{ maxWidth: '500px', width: '100%' }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
          alt="Failed Icon"
          style={{ width: '90px', marginBottom: '1rem' }}
        />
        <h2 className="text-danger fw-bold mb-3">Payment Failed</h2>
        <p className="text-muted mb-4 fs-5">Unfortunately, your payment was not successful. Please try again or contact support.</p>

        <button
          onClick={() => navigate('/')}
          className="btn btn-outline-danger btn-lg w-100 rounded-pill"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default FailedPage;
