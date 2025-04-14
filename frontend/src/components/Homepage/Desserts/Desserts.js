import React from 'react'
import { DessertsStyled } from './DessertsStyled';
import dessert1 from '../../../assests/Desserts/dessert1.png'
import dessert2 from '../../../assests/Desserts/dessert2.png';

const Desserts = () => {
  return (
    <DessertsStyled>
      <div className='dessertWrapper'>
        <div className='titleWrapper'>
          <div className='title'>Currently in Our Store</div>
          <div className='sub'>Discover Our Range of Desserts</div>
        </div>
        <div className='imageWrapper'>
          <div>
            <img src={dessert1} alt='dessert1' />
            <div className='content2'>
              <div className='click'>
                <div className='text'>Disponsible en individual</div>
              </div>
            </div>
            <div className='content'>
              <div className='name'>Puff with Litchi</div>
              <div className='price'>Starts from 200</div>
            </div>
          </div>
          <div>
            <img src={dessert2} alt='dessert2' />
            <div className='content'>
              <div className='name'>Hearty Cookies</div>
              <div className='price'>Starts from 100</div>
            </div>
          </div>
        </div>
      </div>
    </DessertsStyled>
  )
}

export default Desserts;
