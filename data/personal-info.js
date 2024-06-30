import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";

export const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Kaium Uddin",
        field: "name",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+880 1755 241867",
        field: "phone",
    },
    {
        icon: <MailIcon size={20} />,
        text: "kaium.uddin2909@gmail.com",
        field: "email",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on Sep 29, 1998",
        field: "dob",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Bachelor on Computer Science",
        field: "degree",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "House#61, Block A Road 1, Bashundara R/A, Dhaka",
        field: "address",
    },
];
