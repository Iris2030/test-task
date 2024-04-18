// · import react tools
import React from 'react';

// · import styles
import style from './about.module.css';

const About = () => {
  return (
    <div className={style.about}>
      <p>Welcome to Freeway Camper, your gateway to unforgettable adventures on the open road!</p>
      <br/>
      <hr/>
      <p>At Freeway Camper, we believe that every journey should be an experience to remember. Whether you're seeking the thrill of exploring new destinations, the freedom of traveling at your own pace, or simply the joy of spending quality time with loved ones amidst breathtaking landscapes, we're here to make your dream adventure a reality.</p>
      <br/>
      <p>As passionate travelers ourselves, we understand the excitement and anticipation that comes with planning the perfect getaway. That's why we're dedicated to providing you with top-quality camper rentals, equipped with everything you need for a comfortable and hassle-free trip.</p>
      <br/>
      <p>But Freeway Camper is more than just a rental company – we're your trusted partner in exploration. Our team of experienced travel enthusiasts is here to share insider tips, recommend scenic routes, and ensure that every aspect of your journey is nothing short of extraordinary.</p>
      <br/>
      <p>So why wait? Embark on the road trip of a lifetime with Freeway Camper today. Let's turn your travel dreams into unforgettable memories!</p>

      <img alt="Different categories of campers on Sales: Vans, campervans, motorhomes and RVs" className={style.about_img} src="https://i.ibb.co/PrwSFfv/side-view-woman-sitting-trunk-car-while-road-trip-using-smartphone.jpg"/>

      <h2 >You have more questions?</h2>

      <p>Contact us and let us advise you personally. </p>

      <span className={style.contacts_name}>Tel:</span> <a className={style.contacts} href="tel:+1234567890">123-456-7890</a>
      <br/>
      <br/>
      <span className={style.contacts_name} >Email:</span>  <a className={style.contacts} href="mailto:info@example.com">info@example.com</a>
      <br/>

      <img className={style.about_img} alt="campers" src="https://i.ibb.co/zZjkZm9/medium-shot-nomad-family-by-fire.jpg"/>

      <p>*The discount is 20% of the rental price of your last booking with FreewayCamper, but not more than 500€.</p>

      <p>**Delivery dates are agreed without obligation. Delivery periods begin with the conclusion of the contract. Delivery includes only the provision of the object of purchase at the respective branch of the seller and does not include delivery of the object of purchase to the contractually specified address of the buyer.</p>
    </div>
  );
};

export default About;
