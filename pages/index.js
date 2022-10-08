import Cabecera from '../components/Cabecera'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'
export default function Home() {
  return (
  <>
    <Cabecera titulo="La Merendola!" />
    <div className={styles.div}>
    <Cards titulo="Groovin ★★★★★" cuerpo="Café de especialidad con un toque de Jazz." imagen="/Imagenes/groovin.jpg"></Cards>
    <Cards titulo="Groovin ★★★★★" cuerpo="Café de especialidad con un toque de Jazz." imagen="/Imagenes/groovin.jpg"></Cards>
    <Cards titulo="Groovin ★★★★★" cuerpo="Café de especialidad con un toque de Jazz." imagen="/Imagenes/groovin.jpg"></Cards>
    <Cards titulo="Groovin ★★★★★" cuerpo="Café de especialidad con un toque de Jazz." imagen="/Imagenes/groovin.jpg"></Cards>
    <Cards titulo="Groovin ★★★★★" cuerpo="Café de especialidad con un toque de Jazz." imagen="/Imagenes/groovin.jpg"></Cards>
    <Cards titulo="Groovin ★★★★★" cuerpo="Café de especialidad con un toque de Jazz." imagen="/Imagenes/groovin.jpg"></Cards>
    </div>
  </>
  )
}
