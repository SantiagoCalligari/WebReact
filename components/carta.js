
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Carta({ data }) {
return(
        <CardActionArea >
            <CardMedia
                component="img"
                src={"/Imagenes/"+data.Imagen}
            />
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.Titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.Cuerpo}
                    </Typography>
            </CardContent>
        </CardActionArea>
    );
}
