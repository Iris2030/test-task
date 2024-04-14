import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_lists_wrapper}>
        <div className={style.footer_list_wrapper}>
          <p className={style.footer_title}>Services</p>

          <ul className={style.footer_list}>
            <li className={style.footer_list_item}><a href=""></a>All campers</li>
            <li className={style.footer_list_item}><a href=""></a>Rent campers</li>
            <li className={style.footer_list_item}><a href=""></a>Cmaper with a dog</li>
            <li className={style.footer_list_item}><a href=""></a>Equipment & services</li>
            <li className={style.footer_list_item}><a href=""></a>Electric-campers</li>
          </ul>
        </div>

        <div>
          <p className={style.footer_title}>About us</p>

          <ul className={style.footer_list}>
            <li className={style.footer_list_item}><a href=""></a>Work with us</li>
            <li className={style.footer_list_item}><a href=""></a>Become a partner</li>
            <li className={style.footer_list_item}><a href=""></a>Contacts</li>
            <li className={style.footer_list_item}><a href=""></a>FAQ</li>
            <li className={style.footer_list_item}><a href=""></a>Photos</li>
          </ul>
        </div>
      </div>
      <div className={style.footer_icons_wrapper}>
        <div className={style.footer_icons}>
          <a className={style.footer_icon} href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        		<img width="24" height="24" alt="Facebook" src="https://freeway-camper.com/assets/media/images/icons-and-logos/Facebook.svg"/>
        	</a>
          <a className={style.footer_icon} href="https://www.instagram.com/" target="_blank" rel="noreferrer">
			  		<img width="24" height="24" alt="Instagram" src="https://freeway-camper.com/assets/media/images/icons-and-logos/Instagram.svg"/>
			  	</a>
          <a  className={style.footer_icon} href="https://www.youtube.com/" target="_blank" rel="noreferrer">
			  		<img width="24" height="24" alt="Youtube" src="https://freeway-camper.com/assets/media/images/icons-and-logos/Youtube.svg"/>
			  	</a>
			  		<a className={style.footer_icon} href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
			  			<img  width="24" height="24" alt="LinkedIn" src="https://freeway-camper.com/assets/media/images/icons-and-logos/LinkedIn_Logo.svg"/>
			  	</a>
        </div>
      </div>

      <div className={style.footer_copyright}>
        <img className={style.logo} alt='logo' width="60" height="40" src="https://freeway-camper.com/assets/media/images/icons-and-logos/Camper_logo.webp"/>
        <p>© 2024 FreewayCamper</p>
      </div>
    </div>
  );
};

export default Footer;
