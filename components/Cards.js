import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../styles/Carta.module.css';
import Modal from '@mui/material/Modal';

export default function Cards({ titulo, cuerpo, imagen }) {
    const ruta = imagen.replace(/\.[^/.]+$/, "");
    const nombreImagen=ruta;
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
        <CardActionArea >
            <CardMedia
                component="img"
                src={"/Imagenes/"+imagen}
                alt={nombreImagen}
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cuerpo}
                    </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    <Modal onClose={handleClose} open={open}>
        <div>
                Que ondaa aamiguito
        </div>
    </Modal>
    </>
    );
}