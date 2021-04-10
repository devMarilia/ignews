import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton'

import styles from './home.module.scss'
export default  function MyApp() {
  return (
  <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      <main className= {styles.contentContainer}>
        <section className= {styles.hero}>
        <span> 👏 Olá, seja bem vindo(a)</span>
        <h1>Notícias sobre o mundo do <span>React</span></h1>
        <p>
            Acesse todas as publicações<br />
          <span>por R$9,90 mensais</span>
        </p>
        <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
      </>
    )
  
  
  }
