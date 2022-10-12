import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({ titulo, cuerpo, imagen }) {
    const ruta = imagen.replace(/\.[^/.]+$/, "");
    const nombreImagen=ruta;
    return (
    <Card sx={{ width: 250, height: 'auto' }}>
        <CardActionArea href={ruta}>
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
    );
}