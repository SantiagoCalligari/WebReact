import Card from '@mui/material/Card';
import React, { useState } from 'react';
import styles from '../styles/Carta.module.css';
import Modal from '@mui/material/Modal';
import Carta from './Carta';
export default function Cards({ data }) {
    const nombreImagen = data.Imagen.replace(/\.[^/.]+$/, "");

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    //TODO no deberia ser una ruta. Usar Componente MODAL cuando toca la carta.
    return (
    <>
    <Card className={styles.cartita} onClick={() => handleOpen()}>
        <Carta data={data}></Carta>
    </Card>
    <Modal className={styles.modal} onClose={handleClose} open={open}>
        <div className={styles.modalContainer} >
                Que ondaa aamiguito
        </div>
    </Modal>
    </>
    );
}