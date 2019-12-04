import React from 'react';

import './collection-item.styles.scss'

const CollectionItem = ({id, name, imageUrl, price}) => {
  return (    
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="collection-item-image" />
      <div className="collection-item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">${price}</span>
      </div>
    </div>      
  )
}

export default CollectionItem;
