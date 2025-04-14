import React, {useState, useEffect} from 'react';
import SummaryApi from '../common';
import { useLocation } from 'react-router-dom';
import VerticalFilters from '../components/VerticalFilters/VerticalFilters';
import FilterProduct from '../components/FilterProduct/FilterProduct';
import { ProductListingStyled } from './ProductListing/ProductListingStyled';

const SearchProduct = () => {
  const query = useLocation()
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [allProduct, setAllProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const fetchProduct = async()=>{
    setLoading(true)
    const response = await fetch(SummaryApi.searchProduct.url+query.search)
    const dataResponse = await response.json()
    setLoading(false)

    setAllProduct(dataResponse?.data || []);
    setFilteredProduct(dataResponse?.data || []);
    setData(dataResponse?.data || []);  
}

useEffect(()=>{
    fetchProduct()
},[query]);

  const updateProductList = (sortedData) => {
    setFilteredProduct(sortedData);
  };

  return (
    <ProductListingStyled>
      <div className="productListingWrapper">
        <div className="verticalWrapper">
          <VerticalFilters
            data={allProduct}
            updateProductList={updateProductList}
            clearData={data}
          />
        </div>
        <div className="filterWrapper">
          <FilterProduct allProduct={filteredProduct} />
        </div>
      </div>
    </ProductListingStyled>
  );
}

export default SearchProduct