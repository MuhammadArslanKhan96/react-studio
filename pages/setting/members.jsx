import MembersComp from "../../components/MembersComp";
import SettingLayout from "../../components/SettingLayout";
import React from "react";

export default function members() {
    return (
        <SettingLayout>
            <div className="px-[24px] py-[32px]">
                <MembersComp />
            </div>
        </SettingLayout>
    );
}
