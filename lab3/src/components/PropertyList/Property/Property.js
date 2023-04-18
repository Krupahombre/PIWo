import React from 'react';
import pic from "./house4.jpg";
import './Property.css';
import {BiMoneyWithdraw} from "react-icons/bi";
import {BsGeoAltFill, BsHousesFill} from "react-icons/bs";
import {MdOutlineDescription} from "react-icons/md";

function Property({ price, bedrooms, description, address, city }) {
  return (
    <div className="listing-container">
      <img src={pic} alt="property" className="property-image" />
      <div className="listing-details">
          <p>
              <BsGeoAltFill/> {address + ","} {city}
          </p>
          <p>
              <BsHousesFill /> {bedrooms}
          </p>
          <p>
              <BiMoneyWithdraw /> {price} zł
          </p>
          <span> <MdOutlineDescription/> {description}</span>
      </div>
    </div>
  );
}

export default Property;
