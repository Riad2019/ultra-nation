import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
      
   const [countries , setCountries ]=useState([])
   const [cart , setCart] = useState([])

   useEffect (()=> {
 
    fetch('https://restcountries.eu/rest/v2/all')
    .then (res=>res.json())
    .then (data =>setCountries(data))
    .catch (error =>console.log(error))

   },[])
   
   const handleAddCountry  = (country)=> {
     const newCart=[...cart, country]
     setCart(newCart);
   }
  return (
    <div className="App">
     
        
        <h4>Country Loaded : {countries.length}</h4>
        <h5>Country Added : {cart.length}</h5>
        <Cart cart ={cart}></Cart>
        <ul>
            {
               countries.map (country => <Country country ={country}
                 handleAddCountry={handleAddCountry} 
                 key={country.alpha3Code}></Country> )
            }
          

        </ul>
      
    </div>
  );
}

export default App;
