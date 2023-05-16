import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import axios from 'axios';
import './App.css';
import { UserProvider } from './components/Login/UserContext';

import PropertyList from './components/PropertyList/PropertyList';
import PropertyForm from './components/PropertyForm/PropertyForm';
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

function App() {
    const [sortBy, setSortBy] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [roomsFilter, setRoomsFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('/data/properties.json')
          .then(response => {
            setProperties(response.data);
          })
          .catch(error => {
            console.error('Error fetching properties:', error);
          });
    }, []);

    const handleNewPropertySubmit = (newProperty) => {
        setProperties([...properties, newProperty]);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handlePriceFilterChange = (event) => {
        setPriceFilter(event.target.value);
    };

    const handleRoomsFilterChange = (event) => {
        setRoomsFilter(event.target.value);
    };

    const handleCityFilterChange = (event) => {
        setCityFilter(event.target.value);
    };

    const filteredProperties = properties.filter((property) => {
        if (priceFilter && property.price !== parseInt(priceFilter)) {
            return false;
        }

        if (roomsFilter && property.bedrooms !== parseInt(roomsFilter)) {
            return false;
        }

        return !(cityFilter && !property.city.toLowerCase().includes(cityFilter.toLowerCase()));

    }).sort((a, b) => {
        switch (sortBy) {
            case 'asc':
                return a.price - b.price;
            case 'desc':
                return b.price - a.price;
            default:
                return 0;
        }
    });


    return (
        <UserProvider>
        <div className="App">
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Navbar/>
                        <Filter
                            sortBy={sortBy}
                            handleSortChange={handleSortChange}
                            priceFilter={priceFilter}
                            handlePriceFilterChange={handlePriceFilterChange}
                            roomsFilter={roomsFilter}
                            handleRoomsFilterChange={handleRoomsFilterChange}
                            cityFilter={cityFilter}
                            handleCityFilterChange={handleCityFilterChange}
                        />
                        <PropertyList properties={filteredProperties}/>
                        <Footer/>
                    </>
                }/>

                <Route path="/login" element={<Login />} />

                <Route path="/add" element={
                    <PropertyForm handler={handleNewPropertySubmit}/>
                }/>
            </Routes>
        </div>
        </UserProvider>
    );
}

export default App;
