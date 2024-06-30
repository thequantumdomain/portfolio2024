"use client";
import Link from "next/link";

// import data
import projectData from "@/data/project";

// import swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

// components

// const projectData = [
//   {
//     image: "/work/3.png",
//     category: "react js",
//     name: "Nexa Website",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate natus possimus!",
//     link: "/",
//     github: "/",
//   },
//   {
//     image: "/work/1.png",
//     category: "next js",
//     name: "Nexa Website",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate natus possimus!",
//     link: "/",
//     github: "/",
//   },
//   {
//     image: "/work/2.png",
//     category: "next js",
//     name: "Nexa Website",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate natus possimus!",
//     link: "/",
//     github: "/",
//   },
//   {
//     image: "/work/3.png",
//     category: "full stack",
//     name: "Nexa Website",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate natus possimus!",
//     link: "/",
//     github: "/",
//   },
//   {
//     image: "/work/1.png",
//     category: "next js",
//     name: "Nexa Website",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate natus possimus!",
//     link: "/",
//     github: "/",
//   },
// ];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto relative">
        {/* text */}
        <div className="max-w-full mx-auto text-center xl:text-left mb-12 xl:h-[400] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, neque.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="max-w-full">
          {/* xl:absolute right-0 top-0 */}
          <CarousalSwiper />
        </div>
      </div>
    </section>
  );
};

const CarousalSwiper = () => {
  return (
    <Swiper
      className="h-[550px]"
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {/* Show only the first 4 projects */}
      {projectData.slice(0, 4).map((project, index) => {
        return (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Work;
