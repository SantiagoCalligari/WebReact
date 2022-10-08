import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({ titulo, cuerpo, imagen, nombreImagen }) {
    return (
    <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                src={imagen}
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
        <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small">Ver Más</Button>
        </CardActions>
    </Card>
    );
}