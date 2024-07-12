import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp} from "react-icons/io";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm">
                            Awesome shoe store
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm">
                            Light weight footear
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm">
                            stay connected with us
                        </div>
                        <Link href="/contact">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-white/[0.5]">
                            send us feedback
                        </div>
                        </Link>
                        <Link href="/temp">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer hover:text-white/[0.5]">
                            student discount
                        </div>
                        </Link>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href="/Footer/order-status">Order Status</Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            <Link href="/Footer/order-status">Delivery</Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            <Link href="/Footer/order-status">Returns</Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            <Link href="/Footer/order-status">Payment Options</Link>
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                <Link href="/contact">Contact Us</Link>
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About nikefy
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("https://www.linkedin.com/in/hasan-alli-b05245250/", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaLinkedinIn size={20} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://twitter.com/hasansd432", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://wa.me/+918144991844", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <IoLogoWhatsapp size={20} />
                    </div>
                    <div
                        onClick={() =>
                            window.open("https://www.instagram.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaInstagram size={20} />
                    </div>
                    
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2024 Nikefy, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <Link href="https://strategiccfo.com/articles/accounting/terms-of-sale/">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    </Link>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
