import React from "react";
import SettingLayout from "../../components/SettingLayout";
import InfoComp from "../../components/InfoComp";

export default function info() {
    return (
        <SettingLayout>
            <div className="px-[24px] py-[32px]">
                <InfoComp />
            </div>
        </SettingLayout>
    );
}
