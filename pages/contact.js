import React from 'react'
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { FaLinkedinIn ,FaFacebook} from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';


const Contact = () => {
  return (
    <div className='flex mb-10'>
        <div className='p-5 px-40 text-lg '>
            <h1 className='text-4xl font-black text-gray-800 items-center py-5'>Contact Us-</h1>
            <div className='mt-11'>
            <div className="cursor-pointer px-10 py-3 text-lg flex gap-3 mt-3" onClick={()=>
                window.open("https://wa.me/+918144991844", "_blank")
            }>
                <IoLogoWhatsapp size={25}/> <p>Comunicate Through WhatsApp</p>
            </div>

            <div className="cursor-pointer px-10 py-3 text-lg flex gap-3" onClick={()=>
                window.open("https://www.linkedin.com/in/hasan-alli-b05245250/", "_blank")
            }>
                <FaLinkedinIn size={25}/> <p>Our LinkedIn Profile</p>
            </div>

            <div className="cursor-pointer px-10 py-3 text-lg flex gap-3" onClick={()=>
                window.open("https://twitter.com/hasansd432", "_blank")
            }>
                <FaTwitter size={25}/> <p>Twiter - Page</p>
            </div>

            <div className=" px-10 py-3 text-lg flex gap-3" >
                <IoMdMail size={25}/> <p>hasansd432@gmail.com</p>
            </div>

            <div className="cursor-pointer px-10 py-3 text-lg flex gap-3" onClick={()=>
                window.open("https://facebook.com", "_blank")
            }>
                <FaFacebook size={25}/> <p>FaceBook</p>
            </div>

            <div className="cursor-pointer px-10 py-3 mb-10 text-lg flex gap-3" onClick={()=>
                window.open("https://facebook.com", "_blank")
            }>
                <TiSocialInstagram size={25}/> <p>InstaGram</p>
            </div>
            </div>
        </div>
        <div>
            <img src="/contact1.jpg" alt="" className='w-90 h-90' />
        </div>
    </div>
  )
}

export default Contact
