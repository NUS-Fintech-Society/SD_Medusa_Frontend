"use client"
import Image from "next/image";
import WithSubnavigation from "../components/navbar/NavBar";
import Button from "../components/inputs/Button";
import { ChevronRightIcon, Icon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <>
    <WithSubnavigation/>
    <div className="flex flex-col h-[calc(100vh-4rem)] min-w-screen">
        <div className="flex flex-col min-w-full bg-ftnal-grey px-8 md:px-36 py-14 md:pt-28 md:pb-20">
            <p className="text-h2-l md:text-h1-l text-brand-yellow tracking-wide">About NFS and MEDUSA</p>
            <p className="text-body-s mb-5 md:mb-10 md:text-body-l text-ftnal-black tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Button colour="brand-yellow">Read More</Button>
        </div>
        <div className="flex flex-col grow min-w-full">
            <div className="flex min-h-[3rem] bg-brand-blue justify-center items-center">
                <p className="text-ftnal-white text-h3-s tracking-wide">Our Projects</p>
            </div>

            <div className="flex flex-col grow min-w-full md:flex-row">
                <div className="flex flex-col grow md:min-h-full px-8 py-20 bg-ftnal-black md:w-1/2">
                    <p className="group text-ftnal-white text-h3-s md:text-h3-l hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors">Crypto Fraud Detection <Icon className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" as={ChevronRightIcon} /></p>
                    <p className="text-ftnal-white text-body-s md:text-body-l">Brief Description</p>
                </div>
                <div className="flex flex-col grow md:min-h-full px-8 py-20 bg-ftnal-darkgrey md:w-1/2">
                    <p className="group text-ftnal-white text-h3-s md:text-h3-l hover:cursor-pointer hover:text-ftnal-lightgrey transition-colors">News Headline Sentiment <Icon className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" as={ChevronRightIcon} /></p>
                    
                    <p className="text-ftnal-white text-body-s md:text-body-l">Brief Description</p>
                </div>
            </div>

        </div>
    </div>
    
    </>

  );
}
