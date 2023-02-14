import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = ({meal}) => {
    const cartCtx = useContext(CartContext)

    const fine_price = `$${meal.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            amount: amount,
            price: meal.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={classes.description}>{meal.description}</div>
                <div className={classes.price}>{fine_price}</div>
            </div>
            <div>
                <MealItemForm id={meal.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;