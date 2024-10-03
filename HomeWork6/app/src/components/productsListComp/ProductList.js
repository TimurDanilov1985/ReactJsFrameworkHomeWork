import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from '../../redux/slices/productSlice';
import EditingProduct from '../editingProductComp/EditingProduct';

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrise] = useState('');
  const [available, setAvailable] = useState(true);

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (<p>No products available.</p>) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Available: {product.available ? "Yes" : "No"}</p>
              <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
              <button onClick={() => dispatch(toggleAvailability(product.id))}>Toggle Availability</button>
              <button onClick={() => {
                setOpen(true);
                setId(product.id);
                setName(product.name);
                setDescription(product.description);
                setPrise(product.price);
                setAvailable(product.available);
              }}>Editing</button>
            </li>
          ))}
        </ul>
      )}
      <EditingProduct open={open} id={id} eName={name} eDescription={description} ePrice={price} eAvailable={available} setOpen={() => setOpen(false)} />
    </div>
  )
}

export default ProductList;