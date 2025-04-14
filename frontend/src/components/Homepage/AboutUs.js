import React from 'react'
import { HomepageStyled } from './HomepageStyled';
import aboutus from '../../assests/Aboutus/aboutus.png';
import { FiArrowRight } from "react-icons/fi";


const AboutUs = () => {
  return (
    <HomepageStyled>
        <div className='aboutUsWrapper' id='aboutUs'>
            <div className='imageWrapper'>
                <img src={aboutus} alt='aboutus' />
                
                <div className='aboutDetails'>
                    <i><div className='header'>About Sam Bakery</div></i>
                    <div className='description'>
                    At Sweet Cravings, we believe that every bite should be a moment of joy. Our bakery app brings the warmth and love of our oven-fresh goodies right to your fingertips. Whether you're craving cookies, cakes, muffins, or waffles, we've got you covered with a delightful selection of treats made from the finest ingredients.
                    </div>
                    <div className='description'>
                    Our journey started with a passion for baking and a dream to share that love with the world. From classic favorites to innovative new flavors, our team of expert bakers crafts each item with care and dedication. With our easy-to-use app, you can browse our menu, place orders, and even customize your treats to make every occasion special.
                    </div>
                    <div className="addTocartCTA">
                    <button className="addToCart">Show More</button>
                    <FiArrowRight style={{width:'20px', height:"20px"}} className='arrow'/>
                  </div>
                    </div>
                </div>
        </div>
    </HomepageStyled>
  )
}

export default AboutUs