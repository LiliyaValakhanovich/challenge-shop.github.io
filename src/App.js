import React, {useState} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';


function App() {

  const [isOpen, setIsOpen]=useState(false);

  const closeModalHandler = ()=>{
    setIsOpen(false);
  }

  const showModalHandler =()=>{
    setIsOpen(true);
  }

  return (
    <CartContextProvider>
      {isOpen && <Cart onClose={closeModalHandler}/>}
      <Header onOpen={showModalHandler}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
