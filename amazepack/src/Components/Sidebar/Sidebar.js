import React, { useState, useEffect, useRef } from "react";
import './Sidebar.css'
import { useProductAvailable } from "../../Context/product-context"
//import { useGenre } from "../../Context/orders-context";

function Sidebar() {
  const {
    productsAvailableList,
    dispatchSortedProductsList,
    productFilterOptions,
    dispatchProductFilterOptions
  } = useProductAvailable()

  const {
    fictionCategoryCheckbox,
    setFictionCategoryCheckbox,
    thrillerCategoryCheckbox,
    setThrillerCategoryCheckbox,
    techCategoryCheckbox,
    setTechCategoryCheckbox,
    philosophyCategoryCheckbox,
    setPhilosophyCategoryCheckbox,
    romanceCategoryCheckbox,
    setRomanceCategoryCheckbox,
    mangaCategoryCheckbox,
    setMangaCategoryCheckbox,
  } = useGenre()

  const ratingRadioBtnRef = useRef(null)

  const [sortPriceLowToHigh, setSortPriceLowToHigh] = useState(false)
  const [sortPriceHighToLow, setSortPriceHighToLow] = useState(false)

  const [includeOutOfStockCheckbox, setIncludeOutOfStockCheckbox] = useState(true);
  const [fastDeliveryOnlyCheckbox, setFastDeliveryOnlyCheckbox] = useState(false);

  const [minPriceRange, setMinPriceRange] = useState(0);
  const [maxPriceRange, setMaxPriceRange] = useState(1200);


  useEffect(() => {
    dispatchSortedProductsList({ type: "UPDATE_LIST_AS_PER_FILTERS", payload: productFilterOptions })
    if (sortPriceLowToHigh) { setSortPriceLowToHigh(true); setSortPriceHighToLow(false); dispatchSortedProductsList({ type: "PRICE_LOW_TO_HIGH" }) }
    if (sortPriceHighToLow) { setSortPriceLowToHigh(false); setSortPriceHighToLow(true); dispatchSortedProductsList({ type: "PRICE_HIGH_TO_LOW" }) }
  }, [productFilterOptions, dispatchSortedProductsList])

  function clearFilters() {
    setMinPriceRange(0)
    setMaxPriceRange(1200)
    setFictionCategoryCheckbox(true)
    setThrillerCategoryCheckbox(true)
    setTechCategoryCheckbox(true)
    setPhilosophyCategoryCheckbox(true)
    setRomanceCategoryCheckbox(true)
    setMangaCategoryCheckbox(true)
    ratingRadioBtnRef.current.click()
    setSortPriceLowToHigh(false)
    setSortPriceHighToLow(false)
    setIncludeOutOfStockCheckbox(true)
    setFastDeliveryOnlyCheckbox(false)
    dispatchProductFilterOptions({ type: "RESET_DEFAULT_FILTERS" })
  }

  return (
    <aside className="product-page-sidebar">
      <div className="filter-clear-options">
        <p className="sidebar-filter-option">Filters</p>
        <p onClick={clearFilters} className="sidebar-clear-option text-underline">Clear</p>
      </div>


      <div className="product-page-sortby-radio">
        <p>Sort By</p>

        <div className="sortby-items">
          <input
            onChange={() => { setSortPriceLowToHigh(true); setSortPriceHighToLow(false); dispatchSortedProductsList({ type: "PRICE_LOW_TO_HIGH" }) }}
            type="radio"
            id="price-low-to-high"
            name="sort-by"
            value="price-low-to-high"
            checked={sortPriceLowToHigh}
          />
          <label htmlFor="price-low-to-high">Price - Low to High</label>
        </div>

        <div className="sortby-items">
          <input
            onChange={() => { setSortPriceLowToHigh(false); setSortPriceHighToLow(true); dispatchSortedProductsList({ type: "PRICE_HIGH_TO_LOW" }) }}
            type="radio"
            id="price-high-to-low"
            name="sort-by"
            value="price-high-to-low"
            checked={sortPriceHighToLow}
          />
          <label htmlFor="price-high-to-low">Price - High to Low</label>
        </div>
      </div>

      
    </aside>
  );
}

export { Sidebar };
