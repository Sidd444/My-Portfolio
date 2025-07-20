import { motion as m } from "framer-motion";
import turn2webLogo from "../assets/Image/turn2web_logo.jpg";
import upskillmafiaLogo from "../assets/Image/upskillmafia_logo.jpg";
import healtetherLogo from "../assets/Image/healtether_logo.jpg";

const ExperienceCard = ({ company, role, description, technologies, logo }) => {
    return (
        <m.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative group mx-auto w-full md:w-[80%] lg:w-[100%] border-[2px] border-gray-800 rounded-md cursor-pointer min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] overflow-hidden"
        >
            {/* Content Layer */}
            <div className="flex flex-col justify-center items-center h-full z-10 relative">
                <img src={logo} alt={company} className="w-40 h-40 object-contain mb-4" />
                <h2 className="subHeading mb-2 text-lg">{company}</h2>
                <h3 className="text-lg font-bold">{role}</h3>
            </div>

            {/* Overlay Layer */}
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 
  transition-all duration-500 bg-[#020A13]/80 backdrop-blur-sm 
  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex items-center justify-center p-6">

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-center"
                >
                    <p className="text-[#C6C6C6] mb-4">{description}</p>
                    {technologies?.length > 0 && (
                        <ul className="flex flex-wrap gap-2 justify-center">
                            {technologies.map((tech, i) => (
                                <m.li
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                    className="text-[#E1E1E1] text-xs font-bold bg-[#13283e] rounded-md py-[6px] px-3"
                                >
                                    {tech}
                                </m.li>
                            ))}
                        </ul>
                    )}
                </m.div>
            </div>


        </m.div>


    );
};

const Experience = () => {
    const experiences = [
        {
            company: "GOITDEV / Turn2Web",
            role: "Full Stack Developer",
            description:
                "Working as a Full Stack Developer, contributing to client-facing web applications and internal tools. Focused on delivering scalable solutions using SpringBoot and React.",
            technologies: ["SpringBoot", "MERN"],
            logo: turn2webLogo,
        },
        {
            company: "UpskillMafia",
            role: "Mentor",
            description:
                "Mentoring aspiring developers in MERN stack technologies. Responsible for managing hackathon groups and reviewing assignments to ensure quality and learning outcomes.",
            technologies: ["MERN"],
            logo: upskillmafiaLogo,
        },
        {
            company: "HealTether",
            role: "Software Developer",
            description:
                "Collaborated on healthcare-related web platforms, integrating backend services and enhancing user experience through responsive design and efficient data handling.",
            technologies: ["MERN"],
            logo: healtetherLogo,
        },
    ];

    return (
        <section
            className="w-full bg-inherit z-10 snap-start mt-80 pt-14 mb-14 text-white"
            id="experience"
        >
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((experience, i) => (
                        <ExperienceCard key={i} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;