import React from 'react';
import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return(
    <React.Fragment>
    <header className={styles.header}>
      <h1>Япона кухня</h1>
      <HeaderCartButton onOpen={props.onOpen}/>
    </header>
    <div className={styles['main-image']}>
      <img src={sushiImage} alt='Блюдо японской кухни'/>
    </div>
    </React.Fragment>
  )
}

export default Header;