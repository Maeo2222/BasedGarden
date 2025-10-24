import React from 'react';
import Plant1 from '../images/Plant 1.jpg';
import Plant2 from '../images/Plant 2.jpg';

function ProductsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div>
          <img src={Plant1} alt="Plant 1" width={150} />
          <p>Plant 1 - $10</p>
        </div>
        <div>
          <img src={Plant2} alt="Plant 2" width={150} />
          <p>Plant 2 - $15</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
