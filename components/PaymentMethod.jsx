import React from "react";

export default function PaymentMethod() {
    return (
        <>
            <div>
                <p className="text-[20px] text-[#EFEFEF] font-bold">Payment Method</p>
                <p className="text-[#8C8C96] text-[16px]">Manage your payment methods</p>
            </div>
            <div className="px-[24px] py-[16px] border border-[#44444A] rounded-[10px] w-fit mt-3">
                <p className="text-[#8C8C96]">You currently have no payment method or upcoming billing schedules.</p>
            </div>
        </>
    );
}
