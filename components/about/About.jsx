import DevImg from "../DevImg";
import TabComponent from "./TabComponent";

const About = () => {
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles={
                                "w-[505px] h-[505px] bg-no-repeat relative"
                            }
                            imgSrc={"/about/developer.png"}
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <TabComponent />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
