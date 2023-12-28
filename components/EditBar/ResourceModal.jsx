/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import { Modal, ModalContent, ModalHeader, Input, useDisclosure, Button, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineReload } from "react-icons/ai";
import { FaRegFolderClosed } from "react-icons/fa6";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaChevronRight, FaPlayCircle, FaPlus, FaCaretDown } from "react-icons/fa";
// import { Checkbox } from "antd";
import { HiOutlinePaintBrush } from "react-icons/hi2";

export default function ResourceModal({ isOpen, onOpenChange }) {
    const { onOpen } = useDisclosure();
    const ref = useRef();

    const [active, setActive] = useState("home");
    const [model, setModel] = useState(false);
    const [caseModel, setCaseModel] = useState(false);
    const [imgdrop, setImgdrop] = useState(false);
    const [category, setCategory] = useState(false);
    const [popular, setPopular] = useState(false);
    const [styleActive, setStyleActive] = useState("Photography1");

    const image = [
        {
            img: "https://pixabay.com/get/gc1973bd873ca00850cdc12f2793c8c8c856ff0abaa5fa424e5460089ba65294114b4fd308146cf1908c41c9d0577bdbddc9066e30e01938a5c42818078c02482_640.jpg",
        },
        {
            img: "https://pixabay.com/get/g7cf68c53656d9402863efa464e39c96d765a83c96f9c4cafb8a00ceae7f069990d367ba4c3442fe61238be7aa6f65987ede5d7336d3a25eb352d6673da67ee8f_640.jpg",
        },
        {
            img: "https://pixabay.com/get/g0805dd7e106a3e55756636073434b66d1ef00fef2b425ca0e763050644c9baf8cce2ed2c43bf27d453406226791cd57fc96fe5c8878067821516ffe8ab70fe1e_640.jpg",
        },
        {
            img: "https://pixabay.com/get/g46ef06af4087e4271b3df291a612e2a4f6f31a3dc68bb38597a9ff45515e1aac71fa366a0d247813cd62f907665d7f754a3b4123e59d114024549cd99a094072_640.jpg",
        },
        {
            img: "https://pixabay.com/get/gb91ad52d181b64e55365952b569e9b29f9e2029672931bb06970f59ce1aab2e4ba2146e7ef6988178ee81030e709cf8cbdff06029283303085a41f68851d9955_640.jpg",
        },
        {
            img: "https://pixabay.com/get/g454a9bd242ec32607205de2dc3df5ea4038f3b68272f5b34625bff2a5c5d74541494a9ba87c82342a3a40c2b94cecff9c3dd002e3f19f9d11241873ce83422b5_640.jpg",
        },
    ];

    const categoryList = [
        {
            title: "All Categories",
        },
        {
            title: "Backgrounds",
        },
        {
            title: "Fashion",
        },
        {
            title: "Nature",
        },
        {
            title: "Science",
        },
        {
            title: "Education",
        },
        {
            title: "Feelings",
        },
        {
            title: "Health",
        },
        {
            title: "People",
        },
        {
            title: "Religion",
        },
        {
            title: "Places",
        },
        {
            title: "Animals",
        },
        {
            title: "Industry",
        },
        {
            title: "Computer",
        },
        {
            title: "Food",
        },
        {
            title: "Sports",
        },
        {
            title: "Transportation",
        },
        {
            title: "Travel",
        },
        {
            title: "Buildings",
        },
        {
            title: "Business",
        },
        {
            title: "Music",
        },
    ];

    const styleData = [
        {
            img: "/images/Photography1.jpg",
            title: "Photography1",
        },
        {
            img: "/images/Photography2.jpg",
            title: "Photography2",
        },
        {
            img: "/images/Photorealism.jpg",
            title: "Photorealism",
        },
        {
            img: "/images/Painting.jpg",
            title: "Painting",
        },
        {
            img: "/images/Anime.jpg",
            title: "Anime",
        },
        {
            img: "/images/InkPunk.jpg",
            title: "Ink Punk",
        },
        {
            img: "/images/PaperCut.jpg",
            title: "Paper Cut",
        },
        {
            img: "/images/Architecture.jpg",
            title: "Architecture",
        },
    ];

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] min-w-[1000px]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex gap-1 justify-between text-[16px] text-[#EFEFEF]">
                                Add Resource
                                <div className="pr-2">
                                    <div className="flex gap-x-2">
                                        <FaRegFolderClosed />
                                        <div className="flex items-center gap-x-2">
                                            <p className="text-[12px] text-[#EFEFEF] flex no-wrap">Storage 0 / 1GB</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 min-w-[100px]">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: "45%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            {/* <ModalBody> */}
                            <div className="flex flex-col">
                                <div className="flex my-2">
                                    {/* sidebar */}
                                    <div className="bg-[#2D2D30]  rounded-r-[10px] gap-2 flex flex-col min-w-[146px]">
                                        <div className="bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] p-[1px] rounded-[10px]  m-2">
                                            <Button
                                                className="bg-[#2D2D30] flex rounded-[10px] flex-col text-[12px] text-[#EBECF0] px-4 py-2 w-full"
                                                onClick={() => ref.current.click()}
                                            >
                                                <Input ref={ref} type="file" className="hidden" />
                                                <MdOutlineCloudUpload size={24} />
                                                Upload
                                            </Button>
                                        </div>
                                        <p
                                            className={`text-[14px] text-[#F5F6F7] px-4 py-1 cursor-pointer ${
                                                active === "home" ? "bg-[#182C5C]" : "bg-transparent"
                                            }`}
                                            onClick={() => setActive("home")}
                                        >
                                            Home
                                        </p>
                                        <p
                                            className={`text-[14px] text-[#F5F6F7] px-4 py-1 cursor-pointer ${
                                                active === "folder" ? "bg-[#182C5C]" : "bg-transparent"
                                            }`}
                                            onClick={() => setActive("folder")}
                                        >
                                            My Folder
                                        </p>
                                        <div className="bg-[#44444A] h-[1px]"></div>
                                        <div>
                                            <p className="text-[10px] text-[#B6B8BF] px-4 py-1">Explore</p>
                                            <p
                                                className={`text-[14px] text-[#F5F6F7] px-4 py-1 cursor-pointer ${
                                                    active === "pixbay" ? "bg-[#182C5C]" : "bg-transparent"
                                                }`}
                                                onClick={() => setActive("pixbay")}
                                            >
                                                Pixbay
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-[#B6B8BF] px-4 py-1">AI Generate</p>
                                            <p
                                                className={`text-[14px] text-[#F5F6F7] px-4 py-1 cursor-pointer ${
                                                    active === "artist" ? "bg-[#182C5C]" : "bg-transparent"
                                                }`}
                                                onClick={() => setActive("artist")}
                                            >
                                                AI Artist
                                            </p>
                                        </div>
                                    </div>
                                    {/* main */}
                                    <div className="w-full px-2">
                                        {active != "artist" ? (
                                            <div className="flex justify-between gap-2 items-center ">
                                                <Input
                                                    type="text"
                                                    placeholder="Search Resources"
                                                    labelPlacement="outside"
                                                    startContent={
                                                        <IoSearchOutline />
                                                        // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                                    }
                                                    className="bg-[#44444A] rounded-[5px] py-2"
                                                />
                                            </div>
                                        ) : null}

                                        <div className="mt-2 flex gap-2 flex-wrap overflow-y-scroll scrollStyle max-h-[400px] w-full">
                                            {active === "home" ? (
                                                <div>
                                                    {/* image */}
                                                    <div className="w-full flex flex-col gap-y-2">
                                                        <div className="flex justify-between items-center w-full">
                                                            <p className="flex text-[12px] text-[#EFEFEF] gap-x-1">
                                                                Image by{" "}
                                                                <Image
                                                                    src="/images/pixabay.svg"
                                                                    alt=""
                                                                    width={62}
                                                                    height={12}
                                                                />
                                                            </p>
                                                            <p className="flex text-[10px] text-[#FFFFFF] items-center gap-x-1 cursor-pointer">
                                                                See More <FaChevronRight size={10} />
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-4 justify-between">
                                                            {image.map((item, idx) => (
                                                                <div key={idx} className="flex gap-4justify-between">
                                                                    <Image
                                                                        src={item.img}
                                                                        alt=""
                                                                        width={132}
                                                                        height={98}
                                                                        className="cursor-pointer"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    {/* video */}
                                                    <div className="w-full flex flex-col gap-y-2">
                                                        <div className="flex justify-between items-center w-full">
                                                            <p className="flex text-[12px] text-[#EFEFEF] gap-x-1">
                                                                Video by{" "}
                                                                <Image
                                                                    src="/images/pixabay.svg"
                                                                    alt=""
                                                                    width={62}
                                                                    height={12}
                                                                />
                                                            </p>
                                                            <p className="flex text-[10px] text-[#FFFFFF] items-center gap-x-1 cursor-pointer">
                                                                See More <FaChevronRight size={10} />
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-4 justify-between">
                                                            {image.map((item, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex gap-4justify-between relative justify-center items-center"
                                                                >
                                                                    <Image
                                                                        src={item.img}
                                                                        alt=""
                                                                        width={132}
                                                                        height={98}
                                                                        className="cursor-pointer"
                                                                    />
                                                                    <Button className="absolute">
                                                                        <FaPlayCircle />
                                                                    </Button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    {/* audio */}
                                                    <div className="w-full flex flex-col gap-y-2">
                                                        <div className="flex justify-between items-center w-full">
                                                            <p className="flex text-[12px] text-[#EFEFEF] gap-x-1">
                                                                Video by{" "}
                                                                <Image
                                                                    src="/images/pixabay.svg"
                                                                    alt=""
                                                                    width={62}
                                                                    height={12}
                                                                />
                                                            </p>
                                                            <p className="flex text-[10px] text-[#FFFFFF] items-center gap-x-1 cursor-pointer">
                                                                See More <FaChevronRight size={10} />
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-4 justify-between">
                                                            {image.map((item, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex gap-4justify-between relative"
                                                                >
                                                                    <Image
                                                                        src={item.img}
                                                                        alt=""
                                                                        width={132}
                                                                        height={98}
                                                                        className="cursor-pointer"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : active === "folder" ? (
                                                <div className="w-full min-h-[300px]">
                                                    <div className="flex justify-between items-center mt-2">
                                                        <div className="flex items-center gap-x-2">
                                                            {/* type model */}
                                                            <div
                                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[120px] cursor-pointer"
                                                                onClick={() => setModel(!model)}
                                                            >
                                                                <p className="text-[14px]">All Types</p>
                                                                <p>
                                                                    <FaCaretDown />
                                                                </p>
                                                                {model && (
                                                                    <div className="absolute border border-[#44444A] rounded-[5px] bg-[#242427] top-[33px] z-20 py-2 left-0 shadow-2xl w-full">
                                                                        <p className="text-[12px] text-[#B6B8BF] pl-1">
                                                                            Filter
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            <Checkbox
                                                                                defaultSelected
                                                                                className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer"
                                                                            >
                                                                                Image
                                                                            </Checkbox>
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            <Checkbox
                                                                                defaultSelected
                                                                                className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer"
                                                                            >
                                                                                Video
                                                                            </Checkbox>
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            <Checkbox
                                                                                defaultSelected
                                                                                className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer"
                                                                            >
                                                                                Audiio
                                                                            </Checkbox>
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            <Checkbox
                                                                                defaultSelected
                                                                                className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer"
                                                                            >
                                                                                Doc
                                                                            </Checkbox>
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            <Checkbox
                                                                                defaultSelected
                                                                                className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer"
                                                                            >
                                                                                TXT
                                                                            </Checkbox>
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {/* name sort model */}
                                                            <div
                                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[180px]"
                                                                onClick={() => setCaseModel(!caseModel)}
                                                            >
                                                                <p className="text-[14px]">File Name (a-z)</p>
                                                                <p>
                                                                    <FaCaretDown />
                                                                </p>
                                                                {caseModel && (
                                                                    <div className="absolute border border-[#44444A] rounded-[5px] bg-[#242427] top-[33px] z-10  py-2 left-0 w-full shadow-2xl">
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            File Name (a-z)
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            Date Added (Lat...)
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex cursor-pointer rounded-[5px] px-3 py-1 gap-x-2 hover:bg-[#44444A] items-center">
                                                            <AiOutlineReload size={16} />
                                                            <p className="text-[14px]">Reset Filter</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-center items-center h-full min-h-[200px]">
                                                        <p className="text-[14px] text-[#EFEFEF]">
                                                            You haven't uploaded any resources yet.
                                                        </p>
                                                        <p className="text-[14px] text-[#EFEFEF]">
                                                            Upload your own or explore resources from our partners.
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : active === "pixbay" ? (
                                                <div className="w-full">
                                                    <div className="flex justify-between items-center mt-2">
                                                        <div className="flex items-center gap-x-2">
                                                            {/* Image model */}
                                                            <div
                                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[180px]"
                                                                onClick={() => setImgdrop(!imgdrop)}
                                                            >
                                                                <p className="text-[14px]">Images</p>
                                                                <p>
                                                                    <FaCaretDown />
                                                                </p>
                                                                {imgdrop && (
                                                                    <div className="absolute border border-[#44444A] rounded-[5px] bg-[#242427] top-[33px] z-10  py-2 left-0 w-full shadow-2xl">
                                                                        <p className="text-[12px] text-[#B6B8BF] pl-2">
                                                                            Filter by Type
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            Image
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            Video
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            Audio
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {/* category model */}
                                                            <div
                                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[180px]"
                                                                onClick={() => setCategory(!category)}
                                                            >
                                                                <p className="text-[14px]">All Categories</p>
                                                                <p>
                                                                    <FaCaretDown />
                                                                </p>
                                                                {category && (
                                                                    <div className="absolute border border-[#44444A] rounded-[5px] max-h-[280px] overflow-y-scroll scrollStyle bg-[#242427] top-[33px] z-10  py-2 left-0 w-full shadow-2xl">
                                                                        <p>Filter by Catygory</p>
                                                                        {categoryList.map((item, idx) => (
                                                                            <p
                                                                                key={idx}
                                                                                className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer"
                                                                            >
                                                                                {item.title}
                                                                            </p>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {/* popular */}
                                                            <div
                                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[180px]"
                                                                onClick={() => setPopular(!popular)}
                                                            >
                                                                <p className="text-[14px]">Popular</p>
                                                                <p>
                                                                    <FaCaretDown />
                                                                </p>
                                                                {popular && (
                                                                    <div className="absolute border border-[#44444A] rounded-[5px] bg-[#242427] top-[33px] z-10  py-2 left-0 w-full shadow-2xl">
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            Popular
                                                                        </p>
                                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                                            Latest
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex cursor-pointer rounded-[5px] px-3 py-1 gap-x-2 hover:bg-[#44444A] items-center">
                                                            <AiOutlineReload size={16} />
                                                            <p className="text-[14px]">Reset Filter</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="flex flex-wrap gap-4 justify-between max-h-[400px] overflow-y-scroll scrollStyle">
                                                            {image.map((item, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex gap-4justify-between relative"
                                                                >
                                                                    <Image
                                                                        src={item.img}
                                                                        alt=""
                                                                        width={132}
                                                                        height={98}
                                                                        className="cursor-pointer"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : active === "artist" ? (
                                                <div className="w-full flex">
                                                    <div className="w-3/5 pr-2 border-r border-r-[#44444A]">
                                                        <p className="text-[14px] text-[#EFEFEF] font-semibold">
                                                            Describe the image you want to generate
                                                        </p>
                                                        <Input
                                                            type="text"
                                                            placeholder="Rabbits in a spaceship..."
                                                            labelPlacement="outside"
                                                            className="bg-[#44444A] rounded-[5px] py-2 mt-2 text-[12px]"
                                                        />
                                                        <p className="flex mt-2 gap-x-2 px-2 rounded-[10px] w-fit bg-[#44444A] text-[12px] text-[#EFEFEF] items-center cursor-pointer">
                                                            <FaPlus size={10} /> Add negative keywords
                                                        </p>
                                                        <div className="mt-2">
                                                            <p className="text-[14px] text-[#EFEFEF] font-semibold">
                                                                Choose a style
                                                            </p>
                                                            <div className="flex flex-wrap justify-between gap-2">
                                                                {styleData.map((item, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className={`border rounded-[5px] relative w-fit cursor-pointer ${
                                                                            styleActive === item.title
                                                                                ? "border-[#255BB8]"
                                                                                : "border-[#44444A]"
                                                                        }`}
                                                                        onClick={() => setStyleActive(item.title)}
                                                                    >
                                                                        <Image
                                                                            src={item.img}
                                                                            alt=""
                                                                            width={111}
                                                                            height={117}
                                                                            className="rounded-t-[5px]"
                                                                        />
                                                                        <p
                                                                            className={` text-[10px]  rounded-b-[5px] flex justify-center ${
                                                                                styleActive === item.title
                                                                                    ? "bg-[#255BB8] text-white"
                                                                                    : "bg-[#FFFFFFA3] text-black"
                                                                            }`}
                                                                        >
                                                                            {item.title}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-center w-full mt-2">
                                                            <Button className="flex items-center gap-x-2 bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] px-8 rounded-[10px] text-[14px]">
                                                                Create{" "}
                                                                <Image
                                                                    src={"/images/stars.svg"}
                                                                    alt=""
                                                                    width={24}
                                                                    height={24}
                                                                />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="w-2/5 px-2">
                                                        <div>
                                                            <p className="text-[14px] text-[#EFEFEF] font-semibold">
                                                                Image results
                                                            </p>
                                                            <div className="flex flex-col justify-center items-center min-h-[300px]">
                                                                <HiOutlinePaintBrush size={32} />
                                                                <p className="text-[12px] text-[#8C8C96] flex text-center">
                                                                    Tell us about the image you want. We will make you a
                                                                    captivating image for you!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                {/* footer */}
                                <div className="bg-[#2D2D30] px-4 py-2 flex w-full gap-x-2 h-fit justify-end border-t border-t-[#44444A]">
                                    <Button className="border border-[#44444A] rounded-[5px] px-4 text-[14px]">
                                        Add to My Folder
                                    </Button>
                                    <Button className="flex gap-x-2 bg-[#24a0ed] rounded-[5px] px-4 py-1 text-[14px]">
                                        Create a Voice
                                    </Button>
                                </div>
                            </div>
                            {/* </ModalBody> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
