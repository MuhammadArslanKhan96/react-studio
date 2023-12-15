import SettingLayout from "@/components/SettingLayout";
import SubscriptionComp from "@/components/SubscriptionComp";
import React from "react";

export default function subscription() {
    return (
        <SettingLayout>
            <div className="px-[24px] py-[32px]">
                <SubscriptionComp />
            </div>
        </SettingLayout>
    );
}
