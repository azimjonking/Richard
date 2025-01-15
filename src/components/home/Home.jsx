import "./Home.css";
import image from "../../assets/headerImg/IMAGE (28).png"
const Home = () => {
  return <div className="home">
    <div className="homeLeft">
      <h1>Momentum</h1>
      <p>Launch your product — and savor the momentum.</p>
      <button>Get the App</button>
    </div>
    <div className="homeRight">
      <img src={image} alt="" />
    </div>
  </div>;
};

export default Home;
