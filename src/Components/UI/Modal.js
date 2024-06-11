import styles from './Modal.module.css';


function Modal (props){
  return(
    <div className={styles.backdrop} /*onClick={props.onClose}*/>
      <div className={styles.modal}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;