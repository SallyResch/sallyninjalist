import Link from 'next/link'
const FourOfour = () => {
  return (
    <div className="not-found">
      <h1>Oooooopsies......</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>Startsida</a></Link></p>
    </div>
  );
}

export default FourOfour;