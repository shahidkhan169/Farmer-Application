import React, { useState } from 'react';

function ProductInventory() {
  const [products, setProducts] = useState([
    [{ name: '', type: '', quantity: '', price: '', cultivationDate: '', expiryDate: '' }]
  ]);

  const addProduct = (categoryIndex) => {
    const newProducts = [...products];
    newProducts[categoryIndex].push({
      name: '',
      type: '',
      quantity: '',
      price: '',
      cultivationDate: '',
      expiryDate: ''
    });
    setProducts(newProducts);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r">
      <div className="pt-32 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 min-h-50 w-full max-w-4xl">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-extrabold text-gray-800">Product Inventory</h1>
          </div>  
          {products.map((productCategory, categoryIndex) => (
            <div key={categoryIndex} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {productCategory.map((_, productIndex) => (
                  <React.Fragment key={productIndex}>
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-semibold mb-1">Product Name</label>
                      <input
                        type="text"
                        placeholder="Product Name"
                        className="p-2 border rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-semibold mb-1">Type</label>
                      <input
                        type="text"
                        placeholder="Type"
                        className="p-2 border rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-semibold mb-1">Quantity</label>
                      <input
                        type="text"
                        placeholder="Quantity"
                        className="p-2 border rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-semibold mb-1">Price</label>
                      <input
                        type="text"
                        placeholder="Price"
                        className="p-2 border rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-semibold mb-1">Cultivation Date</label>
                      <input
                        type="date"
                        placeholder="Cultivation Date"
                        className="p-2 border rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-700 font-semibold mb-1">Expiry Date</label>
                      <input
                        type="date"
                        placeholder="Expiry Date"
                        className="p-2 border rounded-md"
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className='flex flex-col md:flex-row justify-between mt-4'>
                <button 
                  className="text-blue-500 hover:text-blue-600 mb-2 md:mb-0"
                  onClick={() => addProduct(categoryIndex)}
                >
                  + Add Product
                </button>
                <button
                  type='submit'
                  className="bg-blue-500 text-white px-7 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductInventory;
