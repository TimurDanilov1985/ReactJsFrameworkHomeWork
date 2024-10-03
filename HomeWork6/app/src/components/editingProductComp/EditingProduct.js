import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import './style.css';
import Modal from 'react-modal';
import { updateProduct } from '../../redux/slices/productSlice';

function EditingProduct({ open, id, eName, eDescription, ePrice, eAvailable, setOpen = () => { } }) {

  const dispatch = useDispatch();
  const [name, setName] = useState(eName);
  const [description, setDescription] = useState(eDescription);
  const [price, setPrice] = useState(ePrice);
  const [available, setAvailable] = useState(eAvailable);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateProduct({id, name, description, price, available}));
  }

  return (
    <Modal className='dialog' ariaHideApp={false} isOpen={open}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} required />
          <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} required />
          <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} required />
          <label>
            Available:
            <input type='checkbox' checked={available} onChange={(e) => setAvailable(e.target.checked)} />
          </label>
          <button type='submit'>Edit Product</button>
        </form>
        <button onClick={setOpen}>Продолжить</button>
      </div>
    </Modal>
  )
}

export default EditingProduct;