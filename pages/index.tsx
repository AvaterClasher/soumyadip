import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {BsReddit,BsInstagram,BsGithub,BsLinkedin,BsTwitter} from "react-icons/bs"
import {AiTwotoneMail} from "react-icons/ai"
import {FcReddit} from "react-icons/fc"
import {GiD4,GiVortex} from "react-icons/gi"


const Home: NextPage = () => {
  return (
    <div className='bg-gray-900 h-screen'>
      <header className="text-gray-400 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-[0.5px] border-[#03DAC5] box-s">
          <div className="flex gap-2 title-font cursor-pointer font-medium items-center text-gray mb-4 md:mb-0">
            <div className="ml-3 text-2xl cursor-pointer">
              <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;Moni&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;Moni&nbsp;</span>
              </button>
            </div>
          </div>
          <nav className="md:ml-auto flex gap-2 flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-2xl cursor-pointer hover:text-white"><BsGithub /></a>
            <a className="mr-5 text-2xl cursor-pointer hover:text-white"><BsLinkedin/></a>
            <a className="mr-5 text-2xl cursor-pointer hover:text-white"><BsTwitter/></a>
            <a className="mr-5 text-2xl cursor-pointer hover:text-white"><AiTwotoneMail/></a>
            <a className="mr-5 text-2xl cursor-pointer hover:text-white"><BsInstagram/></a>
            <a className="mr-5 text-2xl cursor-pointer hover:text-white"><BsReddit/></a>
          </nav> 
          {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
      <section className="ml-[120px] mt-[40px] text-gray-100">
        <h1 className=' font-medium text-[60px] font-body uppercase '>Soumyadip Moni</h1>
        <h5 className=' font-semibold text-[22px] mt-0 tracking-widest uppercase font-body'>Fullstack Developer</h5>
        <p className='mt-[20px] text-[15px]'>Fullstack developer living in Bhubaneswar,<br/> Freelancer and University student.</p>
      </section>
      <section className='ml-[120px] mt-[80px] text-gray-100'>
        <h2 className='uppercase text-[30px] my-7'>Activities</h2>
        
      </section>
    </div>
    

  )
}

export default Home
