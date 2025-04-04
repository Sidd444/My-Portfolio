import { motion as m} from "framer-motion";
import { card } from "../component/anime";
import "./Service.css";

import penTool from "../assets/Svg/vector.svg"
import code from "../assets/Svg/gallery.svg"
import person from "../assets/Svg/person.svg"
import SectionName from "../component/SectionName";

const cardDetails = [
  
  {
    icon: code,
    heading: "Web Development",
    description: "I specialize in building responsive and user-friendly websites using modern technologies like Next,React,Tailwind and other UI Libararies",
  },
  {
    icon: penTool,
    heading: "Graphic Design",
    description: "I provide creative graphic design services, including logo design, branding, and marketing materials to help your brand shine.",
  },
  {
    icon: person,
    heading: "Backend",
    description: "I create appealing backend using SpringBoot Framework,Next JS or Node JS and SQL/MongoDB as Database ",
  },
  
]

const Service = () => {
  return (
    <section className='w-full bg-inherit  z-0  snap-start mt-36' id='service'>
        <div className='relative mx-auto flex flex-col w-11/12 md:h-screen max-w-maxContent gap-8  mt-10  text-white'>
         <SectionName name={"Service"}/>
         <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 mx-auto px-4 py-12 justify-center items-center ">
            {
              cardDetails.map((ele, i)=>{
                return (
                  <m.div 
                  variants={card}
                  initial="initial" 
                  whileInView="whileInView"  
                  custom={i}
                  key={i} 
                  className='flex flex-col gap-4 justify-start items-center sm:w-[80%]  lg:w-[25%] h-[100%] mx-2 container'>
                    <div className="box px-2  relative w-[320px] h-[400px] flex justify-center items-center ">
                    <span></span>
                    <div className="content w-full border-2 border-[#353535]">
                    <img src={ele.icon} alt={ele.icon} className="w-[40%] mx-auto " />
                    <h2 className='text-2xl font-semibold text-center my-2'>{ele.heading}</h2>
                    <p className=' w-full paragraph '>{ele.description}</p>
                    </div>
                  </div>
                   
                  </m.div>
                )
              })
            }
         </div>
        </div>
    </section>
  )
}

export default Service
