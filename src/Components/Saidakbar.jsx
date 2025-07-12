import React from 'react';
import ghj from '/src/let.png';

const Saidakbar = () => {
  return (
    <div className="w-[1440px] h-[900px] bg-[#323946]">
      <h2 className='text-[45px] text-center text-[white] pt-[102px]'>Latest <span className='text-[#00EEFF]'> Project</span></h2>
      <div className='ml-[129px] mt-[40px]'>
        <div className='flex gap-[25px]'>
          <img src={ghj} alt="" />
          <img src={ghj} alt="" />
          <img src={ghj} alt="" />

        </div>
                <div className='flex gap-[25px] mt-[25px]'>
          <img src={ghj} alt="" />
          <img src={ghj} alt="" />
          <img src={ghj} alt="" />

        </div>

      </div>
    </div>
  )
}

export default Saidakbar;