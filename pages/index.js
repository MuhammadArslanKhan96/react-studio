import React from "react";
import Card from "@/components/Card";
import EmptyCard from "@/components/EmptyCard";

export default function Home() {
    return (
        <div className="w-full flex gap-2 p-2">
            <EmptyCard />
            <Card />
        </div>
    );
}
