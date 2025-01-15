import "./Application.css";
import Applicationimg from "../../assets/application/IMAGE (2).png"
const Application = () => {
  return (
    <div className="application">
      <img className="apimg" src={Applicationimg} alt="#" />

      <div className="ready">
        <h1>Ready to get started?</h1>
        <div className="buttons">
        <button className="download">Download Now</button>
        <button className="get">Get in Touch</button>
        </div>
      </div>
    </div>
  )
};

export default Application;
