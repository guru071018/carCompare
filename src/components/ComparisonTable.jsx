import React from 'react';

function ComparisonTable({ selectedCars }) {
  return (
    <div className="comparison-table">
      <h2>Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            {selectedCars.map(car => (
              <th key={car.id}>{car.brand} {car.model}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            {selectedCars.map(car => (
              <td key={car.id}>${car.price}</td>
            ))}
          </tr>
          <tr>
            <td>Weight</td>
            {selectedCars.map(car => (
              <td key={car.id}>{car.weight}</td>
            ))}
          </tr>
          <tr>
            <td>Rating</td>
            {selectedCars.map(car => (
              <td key={car.id}>{car.rating}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
