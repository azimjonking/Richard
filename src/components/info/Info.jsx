import "./Info.css";
import InfoImage1 from "../../assets/info/IMAGE (1).png"
import InfoImage2 from "../../assets/info/Page-1.png"
import InfoImage3 from "../../assets/info/IMAGE (2).png"

const Info = () => {
  return ( <div>
    <section className='info-container'>
      <div className="info-card">
        <img src={InfoImage1} alt="#" />
        <h3>Activity Notifications</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <div className="info-card">
        <img src={InfoImage2} alt="#" />
        <h3>Custom Timing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <div className="info-card">
        <img src={InfoImage3} alt="#" />
        <h3>Mobile Optimized</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
    </section>

    <section className='data-container'>
    <div className="data-card">
      <h4>+12k</h4>
      <p>Nibh Elit Tristique</p>
    </div>
    <div className="data-card">
      <h4>84</h4>
      <p>Aenean Condimentum</p>
    </div>
    <div className="data-card">
      <h4>3,07</h4>
      <p>Quam Inceptos</p>
    </div>
    <div className="data-card">
      <h4>24h</h4>
      <p>Ullamcorper</p>
    </div>
    </section>
    </div>
  )
};

export default Info;
