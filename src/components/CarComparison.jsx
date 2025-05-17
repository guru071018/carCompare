import React, {useEffect, useState } from 'react';
import Filters from './Filters';
import CarCard from './CarCard';
import ComparisonTable from './ComparisonTable';
import { carData, MESSAGES } from '../constants/data-constant';



function CarComparison() {
  const [cars] = useState(carData);
  const [selectedCars, setSelectedCars] = useState([]);
  const [filters, setFilters] = useState({ brand: '', type: '', priceRange: [0, 50000] });
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    setSelectedCars([]);
    setFilters({ brand: '', type: '', priceRange: [0, 50000] });
    setSortKey('');
      // Reset state when route changes
    return () => {
      setFilters({ brand: '', type: '', priceRange: [0, 50000] });
      setSelectedCars([]);
      setSortKey('');
    };
  }, []);

  const handleSelectCar = (car) => {
    if (selectedCars.includes(car)) {
      setSelectedCars(selectedCars.filter((c) => c !== car));
    } else {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const filteredCars = cars.filter((car) => {
    const { brand, type, priceRange } = filters;
    return (
      (!brand || car.brand === brand) &&
      (!type || car.type === type) &&
      car.price >= priceRange[0] &&
      car.price <= priceRange[1]
    );
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
   
    if (!sortKey) {
        return 0;
    }else{
         console.log(a[sortKey]);
    }
  
    const valA = a[sortKey];
    const valB = b[sortKey];
  
    // Ensure numeric comparison for numeric fields like price and rating
    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    }
  
    // Fallback for string comparison (e.g., model, brand)
    if (typeof valA === 'string' && typeof valB === 'string') {
      return valA.localeCompare(valB);
    }
  
    return 0;
  });

  return (
    <div className="container">
     <header>
        <h1>{MESSAGES.HEADER}</h1>
      </header>
      <article>
          <h2>{MESSAGES.HEADING_TXT}</h2>
          <p>{MESSAGES.HEADING_MSG}</p>
      </article>

     <hr></hr>
      <Filters filters={filters} setFilters={setFilters} setSortKey={setSortKey} />
      <hr></hr>

      <div className="car-list">
        {sortedCars.map((car) => (
          <CarCard style={{
            backgroundImage: `url("/assets/img/bg.jpg")`}} key={car.id} car={car} selectedCars={selectedCars} handleSelectCar={handleSelectCar} />
        ))}
      </div>

      {filteredCars.length == 0 ? <h3 className='text-algin'>{MESSAGES.NO_MATCH}</h3> : null}

      {selectedCars.length > 0 && <ComparisonTable selectedCars={selectedCars} />}

      <footer className='footer-msg'>
            <p >{MESSAGES.FOOTER_MSG}</p>
      </footer>


      <style>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        header h1 {
          text-align: center;
        }
        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .car-list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }
        .car-card {
          background-image: url('/assets/img/bg.jpg');
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;       
          max-width:300px;
          width:250px;
        }
        .car-card img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 4px;
        }
        .comparison-table {
          margin-top: 30px;
        }
        .comparison-table table {
          width: 100%;
          border-collapse: collapse;
        }
        .comparison-table th, .comparison-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }

        .footer-msg{
         
          bottom: 10px;
        }
        .text-algin{
          text-align: center;
        }
      `}</style>
    </div>
    
  );
}

export default CarComparison;
