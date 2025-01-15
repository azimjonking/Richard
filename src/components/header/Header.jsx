import "./Header.css";
import image from "../../assets/headerImg/IMAGE (27).png"
const Header = () => {
  return <div className="Header">
    <div className="headLeft">
      <img src={image} alt="" />
    </div>
    <div className="headRight">
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">How to Use</a></li>
        <li><a href="">Download</a></li>
      </ul>
    </div>

  </div>;
};

export default Header;
