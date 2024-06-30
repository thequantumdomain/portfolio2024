"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Name() {
    const words = [
        {
            text: "Hello, ",
        },
        {
            text: "my",
        },
        {
            text: "name",
        },
        {
            text: "is ",
        },
        {
            text: "Kaium",
            className: "text-primary dark:text-primary",
        },
        {
            text: "Uddin",
            className: "text-primary dark:text-primary",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-12 ">
            <TypewriterEffect words={words} />
        </div>
    );
}
