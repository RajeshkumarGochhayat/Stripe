import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 bg-success bg-opacity-10"
    >
      <div className="text-center bg-white shadow-lg rounded-5 p-5 animate__animated animate__fadeIn" style={{ maxWidth: '500px', width: '100%' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          alt="Success Icon"
          style={{ width: '90px', marginBottom: '1rem' }}
        />
        <h2 className="text-success fw-bold mb-3">Payment Successful!</h2>
        <p className="text-muted mb-4 fs-5">Thank you for your purchase. Your order has been confirmed.</p>

        <button
          onClick={() => navigate('/')}
          className="btn btn-outline-success btn-lg w-100 rounded-pill"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
