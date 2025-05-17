import React from 'react';

function Filters({ filters, setFilters, setSortKey }) {
  return (
    <div className="filters">
      <select onChange={(e) => setFilters({ ...filters, brand: e.target.value })} value={filters.brand}>
        <option value="">All Brands</option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
      </select>

      <select onChange={(e) => setFilters({ ...filters, type: e.target.value })} value={filters.type}>
        <option value="">All Types</option>
        <option value="Sedan">Sedan</option>
        <option value="Hatchback">Hatchback</option>
        <option value="SUV">SUV</option>
      </select>

      <label>
        Max Price: ${filters.priceRange[1]}
        <input
          type="range"
          min="0"
          max="50000"
          value={filters.priceRange[1]}
          onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value, 10)] })}
        />
      </label>

      <select onChange={(e) => setSortKey(e.target.value)} defaultValue="">
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default Filters;
