import React from 'react'
import { WeddingCakesStyled } from './WeddingCakesStyled';
import { HiShoppingBag } from "react-icons/hi2";
import weddingCake from '../../../assests/WeddingCakes/weddingCake.png';
import weddingCake1 from '../../../assests/WeddingCakes/weddingCake1.png';
import weddingCake2 from '../../../assests/WeddingCakes/weddingcake2.png';


export const WeddingCakes = () => {
  return (
    <WeddingCakesStyled>
      <div className='weddingCakeWrapper'>
        <div className='image1'>
          <img src={weddingCake1} alt='weddingcake1'/>
        </div>
        <div className='weddingCakeDetails'>
        <i><div className='title'>Special Wedding Cakes</div></i>
                <div className='description'>Saves upto 60% off</div>
                <div className="addTocartCTA addToCart">
                    <button className="">Show more</button>
                    <HiShoppingBag 
                    style={{width:'25px', height:"25px", marginTop:"3px"}}/>
                </div>
        </div>
        <div className='image2'>
        <img src={weddingCake2} alt='weddingcake2'/>

        </div>
      </div>
        {/* <div className='weddingWrapper'>
            <div className='imageWrapper'>
                <img
                    src={weddingCake}
                    className="w-full h-full"
                    alt={"weddingcake"}
                  />
            </div>
            <div className='descWrapper'>
                <div className='title'>Special Orders, Cakes & Weddings</div>
                <div className='description'>We are delighted to fulfill orders for pastries, breads, and cakes for your celebrations and special occasions. All other inquiries, including weddings and special orders, can be directed to sambakery@com</div>
                <div className="addTocartCTA addToCart">
                    <button className="">Wedding & Special Orders</button>
                    <HiShoppingBag 
                    style={{width:'25px', height:"25px", marginTop:"3px"}}/>
                </div>
            </div>
        </div> */}
    </WeddingCakesStyled>
  )
}
