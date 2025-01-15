import "./Testimonial.css";
import Testimg from ".././../assets/testimonial/IMAGE.png"
import Testiimg from "../../assets/testimonial/IMAGE (1).png"
const Testimonial = () => {
  return (
    <div className="testimonial">
    <img src={Testimg} alt="#" />
    <p className="lorem">HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</p>
    <div className="joshua">

      <p className="josh">Joshua Home</p>
      <p className="york">New York Times</p>
    </div>

    <img className="sapport" src={Testiimg} alt="" />
    </div>
    
  )
};

export default Testimonial;
