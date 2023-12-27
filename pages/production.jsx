import ProductionComp from "../components/ProductionComp";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Production() {
    return (
        <div className="w-full h-screen">
            <ProductionComp />
        </div>
    );
}
