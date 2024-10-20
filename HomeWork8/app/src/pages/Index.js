import React from 'react';
import Preview from '../components/previewComp/Preview';
import FeturedItems from '../components/feturedItemsComp/FeturedItems';
import GetAllProducts from '../components/getAllProductsComp/GetAllProducts';

function Index() {
  return (
    <div>
        <Preview />
        <FeturedItems />
        <GetAllProducts />
    </div>
  )
}

export default Index;