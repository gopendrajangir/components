import React, { useState } from 'react'
import FilterBox from './FilterBox'
import ProductsList from './ProductsList'

function Products() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="p-5">
      <button className="border rounded p-1 px-3 mb-2" onClick={() => setShowFilter(!showFilter)}>Filter</button>
      <div className="flex flex-col sm:flex-row">
        {
          showFilter &&
          <FilterBox />
        }
        <ProductsList showFilter={showFilter} />
      </div>
    </div>
  )
}

export default Products