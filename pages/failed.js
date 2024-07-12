import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center bg-red-500">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 text-white border mx-auto flex flex-col">
                    <div className="text-2xl font-bold">Payment failed!</div>
                    <div className="text-base mt-5">
                        Don't Worry, if your money debited from your bank account it will get back to you soon
                    </div>
                    <Link href="/contact"><div className="underline hover:text-black">for any query contact with us</div></Link>

                    <Link href="/" className="font-bold mt-5">
                        <span className="hover:text-black">Continue Shopping</span>
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;
