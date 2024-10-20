import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMensShirts } from "../../redux/slices/mensShirtsSlice";
import { fetchMensShoes } from '../../redux/slices/mensShoesSlice';
import { fetchMensWatches } from '../../redux/slices/mensWatchesSlice';
import { fetchWoomensShoes } from '../../redux/slices/womensShoesSlice';
import { fetchWoomensDresses } from '../../redux/slices/womensDressesSlice';
import Product from '../productComp/Product';
import "./style.css";
import { useEffect } from 'react';

function GetAllProducts() {
    const dispatch = useDispatch();

    const { products, indexImg } = useSelector((state) => state.allProducts);

    function getProducts() {
        dispatch(fetchMensShirts());
        dispatch(fetchMensShoes());
        dispatch(fetchMensWatches());
        dispatch(fetchWoomensShoes());
        dispatch(fetchWoomensDresses());
    }

    useEffect(() => {
      getProducts();
    }, [dispatch])

    return (
        <div className='centre'>
            <div className="products">
                {products.map((product) => (
                    <Product product={product} index={indexImg} key={product.id}/>
                ))}
            </div>
        </div>
    )
}

export default GetAllProducts;