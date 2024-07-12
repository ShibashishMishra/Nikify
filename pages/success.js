import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center bg-green-500">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border bg-green-500 text-white mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">hasansd432@gmail.com</div>

                    <Link href="/" className="font-bold mt-5 ">
                        <span className="hover:text-black">Continue Shopping</span>
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
