import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props);
    const {area , region, population, name} = props.country;
    return (
        <div className='country'>
            <h2>Country Name : {name.common}</h2>
            <p>Population : {population}</p>
            <p>area : {area}</p>
            <p>Region : {region}</p>
            
        </div>
    );
};

export default Country;