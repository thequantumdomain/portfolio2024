"use client";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/work/ProjectCard";
import projectData from "@/data/project";
import { useState } from "react";
const uniqueCategories = [
    "all projects",
    ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all projects");

    const filterdProjects = projectData.filter((project) => {
        return category == "all projects"
            ? project
            : project.category === category;
    });

    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Projects
                </h2>
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className="w-full flex flex-col md:flex-row justify-between h-full lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                        {/* grid md:grid-cols-5 */}
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    key={index}
                                    value={category}
                                    onClick={() => setCategory(category)}
                                    className="capitalize w-[162px] md:w-auto flex-1"
                                >
                                    {category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filterdProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard
                                        project={project}
                                    ></ProjectCard>
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;
