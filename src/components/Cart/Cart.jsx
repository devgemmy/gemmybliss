import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from '../Cart/CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = ({onClose}) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((cart) => 
            <CartItem 
                key={cart.id} 
                onRemove={cartItemRemoveHandler.bind(null, cart.id)} 
                onAdd={cartItemAddHandler.bind(null, cart)} 
                {...cart} 
            />
        )}
    </ul>

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount: </span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;