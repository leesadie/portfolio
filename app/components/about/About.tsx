'use client';

import Image from "next/image";
import { roboto_mono } from "@/app/fonts";
import Button from "../Button";
import { AiOutlineArrowRight } from 'react-icons/ai'

const About = () => {
    return (
        <div
            className="flex flex-col gap-10 items-center justify-center text-center"
        >
            <div className="mt-48">
                <Image 
                    alt="profile pic"
                    src='/images/profile.png'
                    width={200}
                    height={200}
                />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl text-center font-regular">
                Hello — I’m Sadie Lee, a Research Assistant
                <br />
                at BC Children’s Hospital DHIL, and
                <br />
                a Cognitive Systems student at UBC
            </div>
            <div className="flex flex-row group">
                <Button 
                    label="More"
                    onClick={() => {}}
                />
                <div className="pl-2 pt-1 group-hover:opacity-70 cursor-pointer">
                    <AiOutlineArrowRight size={18}/>
                </div>
            </div>
        </div>
    );
}

export default About;