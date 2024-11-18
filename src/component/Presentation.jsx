import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Presentation() {
    const CardData = [
        {
            source:"img/Group 4.png",
            heading:"Managment",
            text:"Software platform for running your new internet business",
        },
        {
            source:"img/Group 4 (1).png",
            heading:"Entertainment",
            text:"Software platform for running your new internet business",
        },
        {
            source:"img/Group 4 (2).png",
            heading:"Marketing",
            text:"Software platform for running your new internet business",
        },
        {
            source:"img/Group 4 (3).png",
            heading:"References",
            text:"Software platform for running your new internet business",
        },
    ];

    const socialLink = [
        {link:"img/fb.png"},
        {link:"img/instra.png"},
        {link:"img/tw.png"},
    ]


  return (
    <>
    <section className='bg-gray-50'>
        <div className='container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-16 mx-auto max-w-[1400px]'>
            {/* left section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2'>
            {CardData .map((card,index)=>(
                <div key={index}
                className='p-4 gap-4 bg-white rounded-xl hover:bg-gray-300 transition-all text-center'>
                    <div className='flex items-center justify-center'>
                        <img src={card.source} alt="" />
                    </div>
                    <div>
                        <h3 className='text-black text-lg md:text-xl font-semibold'>{card.heading}</h3>
                        <p className='text-gray-400 text-sm md:text-base'>{card.text}</p>
                    </div>

                </div>
            ))}
            </div>

            {/* Right section */}

            <div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
            <h1 className='text-black text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md text-center lg:max-0 lg:text-start'>The quickest way to create modern presentation</h1>

            <p className='text-gray-400 max-w-md text-center lg:text-start lg:mx-0 text-sm md:text-base'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>

            <button className='bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-200 '>Explore All: <ArrowForwardIcon /></button>

            <p className='text-gray-400 mt-[85px] text-center lg:text-start'>Follow us</p>
            <div className='flex justify-center lg:justify-start gap-4 mt-6 items-center'>
                {
                  socialLink.map((social)=>(
                    <a href="" className='bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition duration-300'>
                        <img src={social.link} alt="" />
                    </a>
                  ))  
                }

            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Presentation;