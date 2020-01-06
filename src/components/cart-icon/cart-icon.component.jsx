import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import "./cart-icon.styles.scss";

const CartIcon = ({toggleCart, itemsCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
});

const mapToStateProps = state => ({
    itemsCount: selectCartItemsCount(state)
});

export default connect(mapToStateProps, mapDispatchToProps)(CartIcon);
