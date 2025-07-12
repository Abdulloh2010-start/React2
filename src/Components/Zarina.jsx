import React from 'react';
import icon from '../assets/icon.png';
import vector from '../assets/Vector.png';
import di from '../assets/di.png';

const Zarina = () => {
  return (
    <div className='w-[1440px] h-[749px] mt-[39px] pt-[53px] px-[129px] pb-[237px] bg-[#1F242D] mx-auto'>
      <h1 className='font-bold text-4xl text-center text-white'>Our <span className='text-[#00EEFF]'>Services</span></h1>
    <div className='flex justify-between mt-[50px]'>
      <div className='w-[380px] h-[369px] border-2 bg-[#323946] rounded-2xl mt-[27px] '>
        <img src={icon} alt=""  className='mx-auto mt-[32px]'/>
        <h2 className='font-bold text-2xl mb-3 text-white mx-auto text-center w-[247px]'>Web Development</h2>
        <p className='w-[300px] h-[93px] text-center mx-auto font-normal text-white text-base'>Lorem ipsum dolor sit amet, it. Natus iure nisi dolor nesciunt voluptas et  explicabo ducimus magni est, illum, alias impedit, aut itaque blanditiis rerum.</p>
        <button className='mt-[32px] w-[151px] bg-[#00EEFF] h-[45px] rounded-4xl shadow-[0px_0px_10px_0px_#00EEFF] mx-[114px]'>Read More</button>
      </div>
      <div className='w-[380px] h-[369px] border-2 bg-[#323946] rounded-2xl mt-[27px] '>
        <img src={vector} alt=""  className='mx-auto mt-[32px]'/>
        <h2 className='font-bold text-2xl mb-3 text-white mx-auto text-center w-[247px]'>Graphic Design</h2>
        <p className='w-[300px] h-[93px] text-center mx-auto font-normal text-white text-base'>Lorem ipsum dolor sit amet, it. Natus iure nisi dolor nesciunt voluptas et  explicabo ducimus magni est, illum, alias impedit, aut itaque blanditiis rerum.</p>
        <button className='mt-[32px] w-[151px] h-[45px] bg-[#00EEFF] rounded-4xl shadow-[0px_0px_10px_0px_#00EEFF] mx-[114px]'>Read More</button>
      </div>
      <div className='w-[380px] h-[369px] border-2 bg-[#323946] rounded-2xl mt-[27px] '>
        <img src={di} alt=""  className='mx-auto mt-[32px]'/>
        <h2 className='font-bold text-2xl mb-3 text-white mx-auto text-center w-[247px]'>Digital Marketing</h2>
        <p className='w-[300px] h-[93px] text-center mx-auto font-normal text-white text-base'>Lorem ipsum dolor sit amet, it. Natus iure nisi dolor nesciunt voluptas et  explicabo ducimus magni est, illum, alias impedit, aut itaque blanditiis rerum.</p>
        <button className='mt-[32px] w-[151px] bg-[#00EEFF] h-[45px] rounded-4xl shadow-[0px_0px_10px_0px_#00EEFF] mx-[114px]'>Read More</button>
      </div>
    </div>
    </div>
  )
}

export default Zarina;