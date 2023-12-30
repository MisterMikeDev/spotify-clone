import { useState, useRef } from "react";
import { songs } from "../lib/data";

const PlayIcon = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
    >
        <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
    </svg>
);

const PauseIcon = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
    >
        <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
    </svg>
);

export default function Player() {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setIsPlaying(!isPlaying);
    };
    return (
        <main className="h-full flex items-center ">
            <section className="flex-1 flex justify-start items-center ml-10">
                <picture className="flex items-center gap-5 max-w-[210px] w-full">
                    <img
                        src={songs[0].image}
                        alt={songs[0].title}
                        className="w-14 h-14 rounded-md object-cover object-center"
                    />
                    <div className="flex flex-col gap-1 truncate">
                        <span className="truncate font-bold">
                            {songs[0].title}
                        </span>
                        <span className="truncate text-gray-400">
                            {songs[0].artists.join(", ")}
                        </span>
                    </div>
                </picture>
            </section>
            <section className="flex-1 flex justify-center items-center">
                <button
                    className="w-10 h-10 rounded-full bg-white text-black grid place-content-center"
                    onClick={handlePlay}
                >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <audio ref={audioRef} src="/music/1/01.mp3" />
            </section>
            <section className="flex-1 flex justify-end items-center mr-10">
                Volume
            </section>
        </main>
    );
}
