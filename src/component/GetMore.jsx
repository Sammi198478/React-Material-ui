import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function GetMore() {
    const data = [
        {
            source:"img/vase-1-b 2.png",
            heading:"Make myspace your best designed space",
            para:"A lot of different components that will help you create the perfect look for your project",
            button:"Design",
        },
        {
            source:"img/vase-1-b 2 (1).png",
            heading:"My company culture has changed today",
            para:"A lot of different components that will help you create the perfect look for your project",
            button:"3D illustrations",
        },
        {
            source:"img/vase-1-b 2 (2).png",
            heading:"Professionals in craft! All products were super great",
            para:"A lot of different components that will help you create the perfect look for your project",
            button:"Development",
        },
    ]
  return (
    <>
    <section className='gap-24 py-12 px-6 lg:px-16 max-w-[1400px] mx-auto'>
        <div >
            {/* left side */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mb-10'>
            <div>
                <h1  className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg mb-4 text-gray-800'>Get more from our blog</h1>
                <p className='mt-8 max-w-lg text-gray-500'>There are a lot of different components that will<br/> help you create the perfect look for your project</p>
            </div>
            <div>
            <button className='bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white'>Explore All <ArrowForwardIcon /></button>
            </div>
            </div>

            {/* right side */}
            <div className='flex flex-col lg:flex-row items-center justify-between mt-24'>
            <div className='flex flex-1 flex-row gap-4'>
                {data.map((d)=>(
                    <div className=''>
                        <img src={d.source} alt="" />
                        <h2 className='text-2xl sm:text-4xl lg:text-2xl font-bold max-w-lg'>{d.heading}</h2>
                        <p className='text-[#00000080]'>{d.para}</p>
                        <button className='text-[#2AB691] mt-2'>{d.button}</button>
                    </div>
                    
                    
                
                ))}

            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GetMore;