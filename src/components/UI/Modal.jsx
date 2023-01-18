import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';


const Backdrop = ({onClose}) => {
    return <div className={classes.backdrop} onClick={onClose} />
}

const ModalOverlay = props => {
    return ( 
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = ({children, onClose})  => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    )
}

export default Modal;