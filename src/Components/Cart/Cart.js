import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

function Cart(props) {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length;

  const removeCartItemHandler = (id)=>{
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item,event)=>{
    cartContext.addItem({...item, amount: 1});
  };

  const cartItems=(
  <ul className={styles['cart-items']}>
    {cartContext.items.map((item)=>(
    <CartItem 
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={addCartItemHandler.bind(null,item)}
      onRemove={removeCartItemHandler.bind(null,item.id)}
      />))}
  </ul>
 );


  return(
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button-alt']} onClick={props.onClose}>Закрыть</button>
        {hasItems>0 && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  )
}

export default Cart;