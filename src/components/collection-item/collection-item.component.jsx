import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({id, name, imageUrl, price}) => {
  return (    
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="collection-item-image" />
      <div className="collection-item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">${price}</span>
      </div>
      <CustomButton inverted> Add to cart </CustomButton>
    </div>      
  )
}

export default CollectionItem;
