import React from 'react';

function CarCard({ car, selectedCars, handleSelectCar }) {
  const isSelected = selectedCars.includes(car);

  return (
    <div className="car-card">
      <img loading="lazy" src={car.image} alt={`${car.brand} ${car.model}`} />
      <h3>{car.brand} {car.model}</h3>
      <p>Price: ${car.price}</p>
      <p>Weight: {car.weight}</p>
      <p>Rating: {car.rating}</p>
      <button className='add-btn' onClick={() => handleSelectCar(car)}>
        {isSelected ? 'Remove from Comparison' : 'Add to Compare'}
      </button>
      <style>{`
        .add-btn{
          padding: 5px;
          background-color: #c3d0eced;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default CarCard;
