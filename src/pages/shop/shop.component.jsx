import React from 'react';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

import "./shop.styles.scss";

class ShopPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			collections: SHOP_DATA
		}
	}
	render() {
		return (
			<div className="shop-data">
				{
					this.state.collections.map((collection) => <CollectionPreview key={collection.id} {...collection} />)
				}				
			</div>
		)
	}
}

export default ShopPage;
