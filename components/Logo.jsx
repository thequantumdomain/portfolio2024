import Image from "next/image";
import Link from "next/link";

import { EvervaultCard, Icon } from "./ui/evervault-card";

const Logo = () => {
    return (
        <Link href={"/"}>
            {/* <Image src={"/logo.svg"} width={54} height={54} priority alt="" /> */}
            <div className=" border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto relative">
                <EvervaultCard text="Kaium" />
            </div>
        </Link>
    );
};

export default Logo;
