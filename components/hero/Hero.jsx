import Image from "next/image";
import { Download, Send } from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from "react-icons/ri";
import Link from "next/link";
import { Button } from "../ui/button";
import Socials from "../Socials";
import DevImg from "../DevImg";
import Badge from "../Badge";
import { Name } from "./Name";

// components

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 lg:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-8 ">
                    {/* text */}
                    <div className=" flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                            Web Developer
                        </div>
                        <Name />
                        <p className="subtitle  max-w-[490px] mx-auto xl:mx-0">
                            Brief description with insights into myself, my
                            vocational journey, and what I engage in
                            professionally
                        </p>
                        {/* buttons */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href={"/contact"}>
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />{" "}
                                </Button>
                            </Link>
                            {/* <Button variant="secondary" className="gap-x-2">
                                Download CV
                                <Download size={18} />{" "}
                            </Button> */}
                            <Button
                                variant="secondary"
                                className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="gap-x-2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Download CV
                                    <Download size={18} />{" "}
                                </span>
                            </Button>
                        </div>

                        {/* socials */}
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    {/* image */}
                    <div className="xl:flex relative">
                        <DevImg
                            containerStyles={
                                "w-[510px] h-[462px] bg-no-repeat relative bg-bottom mx-auto"
                            }
                            imgSrc={"/hero/developer.png"}
                        />
                        {/* badge 1 */}
                        <Badge
                            containerStyles={"absolute top-[24%] -left-[5rem]"}
                            icon={<RiBriefcase4Fill />}
                            endCountNum={2}
                            badgeText={"Years Of Experience"}
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles={"absolute top-[80%] -left-[1rem]"}
                            icon={<RiTodoFill />}
                            endCountNum={30}
                            endCountText={""}
                            badgeText={"Finished Projects"}
                        />
                        {/* badge 3 */}
                        <Badge
                            containerStyles={"absolute top-[55%] -right-8"}
                            icon={<RiTeamFill />}
                            endCountNum={9}
                            endCountText={""}
                            badgeText={"Happy Client"}
                        />
                    </div>
                </div>
                {/* social icons */}
            </div>
        </section>
    );
};

export default Hero;

function Arrow() {
    return (
        <div className="hidden lg:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
    );
}
