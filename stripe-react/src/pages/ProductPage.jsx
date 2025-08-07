import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const products = [
  {
        id: 1,
        name: 'Kids Jacket',
        description: 'Warm and cozy jacket for kids',
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/z/2/d/6-7-years-no-kdjacketnewkd1-trendy-world-original-imagkgznsvpkchfj.jpeg?q=90&crop=false',
        amount: 50000, // ₹500 in paisa
    },
    {
        id: 2,
        name: 'T-Shirt',
        description: 'Cotton T-Shirt for boys',
        image: 'https://thehouseofrare.com/cdn/shop/files/mano-mens-t-shirt-white27624_12378c0a-13fe-4ae7-898c-97937bbc2aae.jpg?v=1719483708',
        amount: 30000, // ₹300
    },
    {
        id: 3,
        name: 'Western Rayon',
        description: 'Trendy Fab Women Western',
        image: 'https://assets.ajio.com/medias/sys_master/root/20241025/MRCM/671bc85ff9b8ef490be2e35c/-473Wx593H-700607110-turquoise-MODEL5.jpg',
        amount: 200000, // ₹500 in paisa
    },
];

function ProductPage() {
  const handleBuy = async (product) => {
    const stripe = await stripePromise;

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/stripe/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
        <div className="container py-5">
            <h2 className="text-center mb-4 text-dark fw-bold display-5">Our Products</h2>
            <div className="row justify-content-center">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 col-sm-6 mb-4 d-flex align-items-stretch justify-content-center">
                        <div className="card shadow-sm h-100 border-0 rounded-4">
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                                <img
                                    src={product.image}
                                    className="rounded-top-4"
                                    alt={product.name}
                                    style={{
                                        maxHeight: '100%',
                                        maxWidth: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title fw-bold">{product.name}</h5>
                                <p className="card-text text-muted">{product.description}</p>
                                <div className="mt-auto">
                                    <button
                                        onClick={() => handleBuy(product)}
                                        className="btn btn-success w-100 rounded-pill"
                                    >
                                        Buy for ₹{product.amount / 100}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    );
}

export default ProductPage;
