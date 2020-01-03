import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({item, addItem}) => {
  const {name, imageUrl, price} = item;
  return (    
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="collection-item-image" />
      <div className="collection-item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
    </div>      
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
