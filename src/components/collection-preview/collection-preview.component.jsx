import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({id, title, items}) => {
  return (
    <div className="collections-preview">
    <h1 className="shop-title">{title}</h1>
    <div className="collections-list">
      {
      items.filter((item, idx) => idx < 4)
      .map((item) => <CollectionItem key={item.id} item={item} />)
      }
     </div>
    </div>
  )
}

export default CollectionPreview;
