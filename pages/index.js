import Cabecera from '../components/Cabecera'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'
import { useEffect, useState } from 'react'

export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() =>
  {
    async function tomarBares()
    {
        const apiUrlGetData = 'http://localhost:3000/api/getSqlData'; //TODO esto, deberia tener el link de la pagina de schujamn, o la mia.
        const response = await fetch(apiUrlGetData);
        const res = await response.json();
        setdataResponse(res.bares);
    }
    tomarBares();
  }, []);
  return (
  <main className={styles.main}>
    <Cabecera titulo="La Merendola!" />
    <div className={styles.div}>
    {dataResponse.map((bar) =>
<Cards key={bar.Titulo} titulo={bar.Titulo} cuerpo={bar.Cuerpo} imagen={"/Imagenes/"+bar.Imagen}/>
)}</div>
  </main>
  )
}
