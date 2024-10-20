import React from 'react';
import "./style.css";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/cartSlice';

function Product({ product, index }) {

    const dispatch = useDispatch();

    function addProductToCart() {
        dispatch(addProduct(product));
    }

    return (
        <div className='product'>
            <div className='product__image'>
                <img className='product__image__img' src={product.images[index]} alt='img' />
            </div>
            <div className='product__description'>
                <p className='product__description__title'>{product.title}</p>
                <div className='product__description__info'>
                    <p>{product.category}</p>
                    <p>{product.brand}</p>
                    <p>{product.description}</p>
                    <p>dimensions:</p>
                    <p>width: {product.dimensions.width}</p>
                    <p>height: {product.dimensions.height}</p>
                    <p>depth: {product.dimensions.depth}</p>
                </div>
                <p className='product__description__price'>{product.price} $</p>
            </div>
            <div className='product__addToCart'>
                <button onClick={addProductToCart} className='product__addToCart__button'>
                    <div className='product__addToCart__button__block'>
                        <svg className='product__addToCart__button__block__svg' width="26.005859" height="23.974609" viewBox="0 0 26.0059 23.9746" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector" d="M21.33 21.97C21.37 21.96 21.39 21.94 21.41 21.91C21.42 21.91 21.43 21.9 21.44 21.89C21.47 21.85 21.48 21.76 21.47 21.71C21.46 21.61 21.37 21.53 21.29 21.53C21.29 21.53 21.29 21.53 21.28 21.53C21.21 21.54 21.12 21.64 21.12 21.76C21.13 21.88 21.22 21.97 21.29 21.97L21.33 21.97ZM7.67 21.96C7.77 21.96 7.85 21.87 7.85 21.75C7.85 21.64 7.77 21.54 7.67 21.54C7.57 21.54 7.49 21.64 7.49 21.75C7.49 21.87 7.57 21.96 7.67 21.96ZM21.45 23.97C21.4 23.97 21.34 23.97 21.29 23.97C20.15 23.97 19.21 23.06 19.13 21.9C19.05 20.69 19.95 19.62 21.15 19.54C21.2 19.54 21.25 19.53 21.29 19.53C22.43 19.53 23.39 20.43 23.47 21.59C23.5 22.19 23.33 22.76 22.94 23.2C22.56 23.66 22.03 23.92 21.45 23.97ZM7.67 23.96C6.47 23.96 5.49 22.97 5.49 21.75C5.49 20.53 6.47 19.54 7.67 19.54C8.88 19.54 9.85 20.53 9.85 21.75C9.85 22.97 8.88 23.96 7.67 23.96ZM20.65 17.1L8.58 17.1C8.15 17.1 7.77 16.8 7.66 16.38L3.73 1.95L0.97 1.95C0.45 1.95 0.01 1.51 0.01 0.97C0.01 0.43 0.45 0 0.97 0L4.45 0C4.88 0 5.27 0.29 5.38 0.71L9.31 15.14L20.01 15.14L23.57 6.83L11.71 6.83C11.18 6.83 10.75 6.4 10.75 5.86C10.75 5.32 11.18 4.88 11.71 4.88L25.04 4.88C25.36 4.88 25.67 5.04 25.84 5.32C26.02 5.6 26.05 5.94 25.92 6.25L21.53 16.51C21.37 16.87 21.03 17.1 20.65 17.1Z" fill-opacity="1.000000" fill-rule="nonzero" />
                        </svg>
                        <p>Add to Cart</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Product