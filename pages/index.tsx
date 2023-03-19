import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  BsReddit,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";
import { GiD4, GiVortex } from "react-icons/gi";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Moni's Portfolio</title>
      </Head>
      <div className="bg-gradient-to-t from-gray-800 via-gray-900 to-black h-full">
        <header className="text-gray-400 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-[3px] border-gray-500 ">
            <div className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="ml-3 text-2xl cursor-pointer">
                <div data-text="Awesome" className="button1">
                  <span className="actual-text">&nbsp;Moni&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">
                    &nbsp;Moni&nbsp;
                  </span>
                </div>
              </div>
            </div>
            <nav className="md:ml-auto flex gap-2 flex-wrap items-center text-base justify-center">
              <a className="mr-5 text-2xl cursor-pointer hover:text-pink-400">
                <BsGithub />
              </a>
              <a className="mr-5 text-2xl cursor-pointer hover:text-pink-400">
                <BsLinkedin />
              </a>
              <a className="mr-5 text-2xl cursor-pointer hover:text-pink-400">
                <BsTwitter />
              </a>
              <a className="mr-5 text-2xl cursor-pointer hover:text-pink-400">
                <AiTwotoneMail />
              </a>
              <a className="mr-5 text-2xl cursor-pointer hover:text-pink-400">
                <BsInstagram />
              </a>
              <a className="mr-5 text-2xl cursor-pointer hover:text-pink-400">
                <BsReddit />
              </a>
            </nav>
            {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button> */}
          </div>
        </header>
        <section className="ml-[120px] mt-[40px] text-gray-400">
          <h1 className=" font-medium text-[60px] font-body uppercase gradient">
            Soumyadip Moni
          </h1>
          <h5 className=" font-semibold text-[22px] mt-0 tracking-widest uppercase font-body">
            Frontend Developer
          </h5>
          <p className="mt-[20px] text-[15px]">
            Frontend developer living in Bhubaneswar,
            <br /> Freelancer and University student.
          </p>
        </section>
        <section className="ml-[120px] mt-[80px]">
          <h2 className="uppercase text-[30px] my-7 text-gray-400 ">
            Activities
          </h2>
          <div className="uppercase">
            <h3 className="text-gray-400 text-lg">Student</h3>
            <div>
              <div className="mt-3  font-bold ">
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px] border rounded-lg">
                  2007
                </span>
                <span className="text-gray-100"> {">"} </span>
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px]  border rounded-lg">
                  Today
                </span>
              </div>
            </div>
            <h3 className="text-gray-400 mt-6 text-lg">Frontend Developer</h3>
            <div>
              <div className="mt-3  font-bold">
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px] border rounded-lg">
                  2020
                </span>
                <span className="text-gray-100"> {">"} </span>
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px] border rounded-lg">
                  Today
                </span>
              </div>
            </div>
            {/* <h3 className="text-gray-400 mt-6 text-lg">Frontend Developer</h3>
            <div>
              <div className="mt-3  font-bold mb-5">
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px] border rounded-lg">
                  2022
                </span>
                <span className="text-gray-100"> {">"} </span>
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px] border rounded-lg">
                  Today
                </span>
              </div>
            </div> */}
            <h3 className="text-gray-400 mt-6 text-lg">Creative Developer</h3>
            <div>
              <div className="mt-3  font-bold mb-5">
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px] border rounded-lg">
                  2023
                </span>
                <span className="text-gray-100"> {">"} </span>
                <span className="bg-pink-300 text-gray-900 text-sm px-2 py-[5px] border rounded-lg">
                  Today
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="ml-[120px] mt-[80px] uppercase">
          <div>
            <h2 className="text-[30px] my-7 text-gray-400">Projects</h2>
          </div>
          <div>
            <h3 className="text-gray-400 text-lg mt-9">Immersive Websites</h3>
            <div className="flex gap-4 border-slate-200 mt-3">
              <button>
                <a href="https://moni-laptop.vercel.app/">Portfolio</a>
              </button>
              <button>
                <a href="https://3-d-obj.vercel.app">Apple</a>
              </button>
              <button>Work in Progress..</button>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 mt-9 text-lg">Common Websites</h3>
            <div className="flex gap-4 border-slate-200  mt-3">
              <button>
                <a>Spotify (NA)</a>
              </button>
              <button>
                <a href="https://moni-lyart.vercel.app">Company Landing Page</a>
              </button>
              <button>Work in Progress..</button>
            </div>
          </div>
        </section>
        <div className="w-full mt-24 text-gray-300 py-y px-2">
          <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-pink-600">
            <p className="py-4">2023 Moni LLC. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
