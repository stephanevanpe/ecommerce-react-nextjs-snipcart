import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaShoppingCart } from 'react-icons/fa';

import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stickers de Stef</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Les Stickers de Stef.
        </h1>
        <p className={styles.description}>
          <strong>Bienvenue.</strong>
          <br/>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <FaShoppingCart />
              <span className="snipcart-total-price">0.00€</span>
          </a>
        </p>
        <div className={styles.grid}>
          {products.map(product => {
    return (
      <div key={product.id} className={styles.card}>
        <img src={product.image} alt={`Preview of ${product.title}`} />
        <h3>{ product.title }</h3>
        <p className={styles.cardDescription}>{ product.description }</p>
        <p>{ product.price }€</p>
        <p>
          <button className="snipcart-add-item"
  data-item-id={product.id}
  data-item-image={product.image}
  data-item-name={product.title}
  data-item-url="/"
  data-item-price={product.price}
>
  Acheter
</button>
        </p>
      </div>
    );
  })}
        </div>
      </main>

      <footer className={styles.footer}>
      

        <script async src="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.js" ></script>
<div id="snipcart" data-api-key="ZDE1MzI5MWItNWQ0Yi00YmE3LTljMzUtODQ2MjU0ZjAzM2ViNjM3NDMyMTI0ODM3NTgxOTE1" hidden data-config-modal-style="side" ></div>
        &copy; 2020 Van-Pé Stéphane
      </footer>
    </div>
  )
}
