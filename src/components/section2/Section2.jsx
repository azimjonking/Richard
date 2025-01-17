import "./Section2.css";
import SecondImage from "../../assets/section2/IMAGE.png"
const Section2 = () => {
  return (
    <section className='second-container'>
      <p>Aenean Consectetur Porta</p>
      <h2>Nullam quis risus eget urna mollis ornare vel eu leo.</h2>
      <img src={SecondImage} alt="#"/>
    </section>
  )
    
};

export default Section2;
