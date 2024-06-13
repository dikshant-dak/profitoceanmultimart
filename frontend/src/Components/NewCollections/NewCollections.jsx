import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = (props) => {
  const [products, setProducts] = useState([]);

  // Fetch products data from backend when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/allproducts`);
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []); 
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {props.data.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>

      <div className='new-collections'>
        <h1>Our Products</h1>
        <div className="collections">
        {products.map((item, i) => (
          <Item 
            id={item.id} 
            key={i} 
            name={item.name} 
            image={item.image}  
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

NewCollections.propTypes = {
  data: PropTypes.array.isRequired
}

export default NewCollections
