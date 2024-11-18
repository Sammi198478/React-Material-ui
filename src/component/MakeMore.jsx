import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function MakeMore() {
  return (
   <>
   <section className='gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto'>
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>

        {/* Left side */}

        <div className='flex-1 items-start'>
            <img className='w-full h-auto max-w-lg' src="img\cake 2.png" alt="" />
        </div>

        {/* Right side */}

        <div className='flex flex-1 flex-col gap-4'>
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>

          <p className='text-black text-lg'>
            <CheckCircleOutlineIcon className='text-green-600 me-1'/>
            <span>Many ways to use illustrations in design</span>
          </p>

          <p className='text-black text-lg'>
            <CheckCircleOutlineIcon className='text-green-600 me-1'/>
            <span>Many ways to use illustrations in design</span>
          </p>

          <p className='text-black text-lg'>
            <CheckCircleOutlineIcon className='text-green-600 me-1'/>
            <span>Many ways to use illustrations in design</span>
          </p>
          <div>
          <button className='bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white'>Learn more <ArrowForwardIcon /></button>
          </div>
        </div>
    </div>

    {/* section 2 */}
    <div className='flex flex-col lg:flex-row items-center justify-between mt-24'>



{/* LEFT side */}

<div className='flex flex-1 flex-col gap-4'>
  <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>

  <p className='text-black text-lg'>
    <CheckCircleOutlineIcon className='text-green-600 me-1'/>
    <span>Many ways to use illustrations in design</span>
  </p>

  <p className='text-black text-lg'>
    <CheckCircleOutlineIcon className='text-green-600 me-1'/>
    <span>Many ways to use illustrations in design</span>
  </p>

  <p className='text-black text-lg'>
    <CheckCircleOutlineIcon className='text-green-600 me-1'/>
    <span>Many ways to use illustrations in design</span>
  </p>
  <div>
  <button className='bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white'>Learn more <ArrowForwardIcon /></button>
  </div>
</div>

{/* RIGHT side */}

<div className='flex-1 items-start'>
    <img className='w-full h-auto max-w-lg' src="img\Group 22.png" alt="" />
</div>
</div>


   </section>
 
   </>
  );
};

export default MakeMore;