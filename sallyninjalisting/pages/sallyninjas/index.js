import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { sallys: data }
  }
}

const Ninjas = ({ sallys }) => {

  console.log(sallys)

  return (
    <>
      <Head>
        <title> Sally List | Sally Listing</title>
        <meta name="keywords" content='Sallys'></meta>
      </Head>
      <div>
        <h1>All ninjas</h1>
        {sallys.map(sally => (
          <div key={sally.id}>
            <a className={styles.single}>
              <h3>{sally.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
export default Ninjas;