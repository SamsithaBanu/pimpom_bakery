import React, {useState, useEffect} from 'react';
import SummaryApi from '../../common';
import { ProductListingStyled } from '../ProductListing/ProductListingStyled';
import VerticalFilters from '../../components/VerticalFilters/VerticalFilters';
import FilterProduct from '../../components/FilterProduct/FilterProduct';
import fetchCategoryWiseProduct from '../../helpers/fetchCategoryWiseProducts';

const ProductCategories = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [data, setData] = useState([]);
  const searchParams = new URLSearchParams(window.location.search);

  // Example: Get specific query parameters
  const category = searchParams.get("category");

  const fetchData = async () => {
      const CategoryWiseProduct = await fetchCategoryWiseProduct(category);
      setAllProduct(CategoryWiseProduct?.data || []);
    setFilteredProduct(CategoryWiseProduct?.data || []);
    setData(CategoryWiseProduct?.data || []);    
  };

  useEffect(() => {
    fetchData();
  }, []);

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

export default ProductCategories