import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main id="home">
        <section className="container">
          <h1>Mitti & Bean</h1>
          <p>Coffee, comfort, and a little bit of home.</p>
        </section>
      </main>
    </>
  );
}

export default Home;