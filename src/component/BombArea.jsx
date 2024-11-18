import React from 'react'

function BombArea() {
  return (
    <>
    <section className='bg-indigo-500 w-full h-auto mb-5'>
        <div className='flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px] mx-auto'>
            <div className='flex-1 flex flex-col gap-8 p-5'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white text-center md:text-start'>The quickest way to create awesame presentation</h1>

                <div className='flex gap-3 flex-wrap mb-10'>

                <button className='bg-green-500 hover:bg-indigo-700 text-white font-semibold py-2 px-5 transition duration-300 rounded-lg sm:py-3 sm:px-6'>Get Started</button>

                <button className='bg-indigo-400 font-semibold py-2 px-5 rounded-lg transition duration-300 text-[#5F62E2] sm:py-3 sm:px-6 hover:bg-indigo-700 hover:text-white'>Learn More</button>

                </div>
            </div>
            <div className='flex-1'>
                <img className='w-full h-auto md:h-[300px] ' src="img\bomb 1.png" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default BombArea;