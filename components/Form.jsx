"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

export default function Form() {
    return (
        <form className="flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <Input type="text" id="name" placeholder="Name" />
                <User className="absolute right-8" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Input type="email" id="name" placeholder="Email" />
                <MailIcon className="absolute right-8" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Textarea
                    type="text"
                    id="name"
                    placeholder="Type Your Message Here..."
                />
                <MessageSquare className="absolute right-8 top-4" size={20} />
            </div>
            <Button className="flex items-center  gap-x-2 px-4">
                Send
                <ArrowRightIcon size={20} className="" />
            </Button>
        </form>
    );
}
