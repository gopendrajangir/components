import React from 'react'

interface ProductProps {
  showFilter: boolean
}

const Product: React.FC<ProductProps> = ({ showFilter }) => {
  const imgClassName = !showFilter
    ? "h-full sm:w-[100%] sm:h-auto 1/2lg:w-[80%] lg:h-auto lg:w-full"
    : "h-full sm:w-[100%] sm:h-auto 1/2lg:w-auto 1/2lg:object-contain 1/2lg:h-full lg:h-auto lg:w-full"
  return (
    <div className="h-[26rem] overflow-hidden flex justify-center items-center">
      <img className={imgClassName} src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="thumbnail" />
    </div>
  )
}

export default Product