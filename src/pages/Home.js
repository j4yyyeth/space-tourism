import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="home-container">
        <div className="home-text">
          <h1>So, you want to travel to</h1>
          <h1>SPACE</h1>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>
        <button className="explore-btn">Explore</button>
      </div>
    </div>
  );
};

export default Home;