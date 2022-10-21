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
        const apiUrlGetData = '../api/getSqlData';
        const response = await fetch(apiUrlGetData);
        const res = await response.json();
        setdataResponse(res.bares);
    }
    tomarBares();
  }, []);
  return (
  <main className={styles.main}>
    <Cabecera titulo="La Merendola!" />
    <div className={styles.cardContainer}>
      {dataResponse.map((bar) => <Cards key={bar.Titulo} data={bar}/>)}
      {dataResponse.map((bar) => <Cards key={bar.Titulo} data={bar}/>)}
      {dataResponse.map((bar) => <Cards key={bar.Titulo} data={bar}/>)}
      {dataResponse.map((bar) => <Cards key={bar.Titulo} data={bar}/>)}
    </div>
  </main>
  )
}