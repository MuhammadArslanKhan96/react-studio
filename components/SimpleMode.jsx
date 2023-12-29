import Image from "next/image";
import React from "react";

export default function SimpleMode() {
    return (
        <div>
            <div>
                <div className="w-3/5">
                    <div>
                        <div>
                            <Image src="/images/lovo.png" width={100} height={100} alt="" />
                            <p>Sopia</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/5">laksjlkasjdlk</div>
            </div>
        </div>
    );
}
