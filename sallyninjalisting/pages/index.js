import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> Sally List | Home</title>
        <meta name="keywords" content='Sallys'></meta>
      </Head>
      <div>

        <h1 className={styles.title}>Startsida</h1>
        <p className={styles.text}>loremtexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
        <p className={styles.text}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
        <Link href={"/sallyninjas"}>
          <button className={styles.btn}><a>See Ninja Listing</a></button>
        </Link>

      </div>
    </>
  )
}
