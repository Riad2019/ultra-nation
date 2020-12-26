import React from 'react';

const Country = (props) => {
   
    const{name ,population , region,flag } =props.country;
    const flagStyle = {height : '50px'}
    const countryStyle ={border :'1px solid gray' ,margin : '10px' , padding : '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>Country Name: {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p> Region : {region}</p>
            <button onClick={()=> handleAddCountry(props.country)}> Add Country </button>
        </div>
    );
};

export default Country;