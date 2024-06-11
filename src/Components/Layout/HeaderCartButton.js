import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import {useContext, useState, useEffect} from 'react';
import CartContext from '../../store/Cart-context';

function HeaderCartButton(props){
  const context = useContext(CartContext);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);


  const number = context.items.reduce((currentValue, item)=>{
    return currentValue + item.amount;
  },0)

  useEffect(()=>{
    if(context.items.length === 0){
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(()=>{
      setIsButtonAnimated(false);
    }, 300);

    return(()=>{
      clearTimeout(timer);
    })
  },[context.items])

  const classButton = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`;

  return <button className={classButton} onClick={props.onOpen}>
    <span className={styles.icon}>
      <CartIcon />
    </span>
    <span>Корзина</span>
    <span className={styles.badge}>{number}</span>
  </button>
}

export default HeaderCartButton;