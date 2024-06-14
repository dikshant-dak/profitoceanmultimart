import React from 'react'
import PropTypes from 'prop-types'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} 
    </div>
  )
}

Breadcrums.propTypes = {
  product: PropTypes.object.isRequired
}

export default Breadcrums
