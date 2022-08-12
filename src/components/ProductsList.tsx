import React from 'react'
import Product from './Product'

interface ProductsListProps {
  showFilter: boolean;
}

const ProductsList: React.FC<ProductsListProps> = ({ showFilter }) => {

  const className = !showFilter
    ? "grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6 xl:gap-y-10"
    : "grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-6 sm:grid-cols-1 1/2lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-10"

  return (
    <div className={className}>
      <Product showFilter={showFilter} />
      <Product showFilter={showFilter} />
      <Product showFilter={showFilter} />
      <Product showFilter={showFilter} />
      <Product showFilter={showFilter} />
      <Product showFilter={showFilter} />
    </div>
  )
}

export default ProductsList