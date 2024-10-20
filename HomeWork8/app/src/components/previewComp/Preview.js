import React from 'react';
import "./style.css";
import { useSelector } from 'react-redux';

function Preview() {
    const { products, indexImg } = useSelector((state) => state.allProducts);
    return (
        <div className='preview'>
            <div className='preview__image'>
                <img className='preview__image__img' src={products.length ? products[Math.floor(Math.random() * products.length)].images[indexImg] : null} alt='img'/>
            </div>
            <div className='preview__block'>
                <div className='preview__block__head'>
                    <div className='preview__block__head__image'>

                    </div>
                    <div className='preview__block__head__text'>
                        <p className='preview__block__head__text__p1'>THE BRAND
                        </p>
                        <p className='preview__block__head__text__p2'>OF LUXERIOUS <span className='preview__block__head__text__p2__style'>FASHION</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview