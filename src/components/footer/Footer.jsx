import "./Footer.css";
import image from "../../assets/footerImg/IMAGE (29).png"

const Footer = () => {
  return <div className="footer">
    <img src={image} alt="" />
    <ul>
      <li><a href="">Email</a></li>
      <li><a href="">Instagram</a></li>
      <li><a href="">Facebook</a></li>
      <li><a href="">Twitter</a></li>
      <li><a href="">Image License Info</a></li>
      <li><a href="">Powered by Webflow</a></li>
    </ul>
  </div>;
};

export default Footer;
