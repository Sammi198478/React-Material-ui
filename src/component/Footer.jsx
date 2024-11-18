

import React from 'react'

function Footer() {

  const socialLink = [
    {link:"img/fb.png"},
    {link:"img/instra.png"},
    {link:"img/tw.png"},
]

  return (
    <>
    <section className='gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto bg-black'>
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
            <div>
                <img src="img/degic(1) 1.png" alt="" />
            </div>
            <div>
                <h3 className='text-white'>Home</h3>
                <span className='text-[#FFFFFF80]'>Become Affiliate<br/>

                       Go Unlimited<br/>

                      Services</span>
            </div>
            <div>
                <h3 className='text-white'>Products</h3>
                <span className='text-[#FFFFFF80]'>Design Systems<br/>

                            Themes & Templates<br/>

                              Mockups<br/>

                             Presentations<br/>

                              Wireframes Kits<br/>

                              UI Kits</span>
            </div>
            <div>
                <h3 className='text-white'>Legals</h3>
                <span className='text-[#FFFFFF80]'>License<br/>

                            Refund Policy<br/>

                            About Us<br/>

                           Contacts</span>
            </div>
            <div>
                <h3 className='text-white'>Blog</h3>
                <span className='text-[#FFFFFF80]'>Business Stories<br/>

                             Digital Store<br/>

                             Learning<br/>

                             Social Media</span>
            </div>  
        </div>
        <div className=' flex flex-row'>
        <div className='text-[#FFFFFF80]'>Copyright Degic © 2020 </div>
        <div className='flex flex-row '>
        {
                  socialLink.map((social)=>(
                    <a href="" className='bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition duration-300'>
                        <img src={social.link} alt="" />
                    </a>
                  ))  
                }
        </div>
        
                

            </div>
    </section>
    </>
  )
}

export default Footer;