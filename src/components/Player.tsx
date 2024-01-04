import { useEffect, useRef } from "react";
import { usePlayerStore, type PlayerStoreState } from "../store/playerStore";
import type { Song } from "../lib/data";

export default function Player() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(
        (state) => state as PlayerStoreState
    );

    const handlePlay = () => {
        if (!audioRef.current) {
            return;
        }
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const { song, playlist } = currentMusic;
        if (song) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`;
            audioRef.current!.src = src;
            audioRef.current?.play();
        }
    }, [currentMusic]);

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <main className="h-full flex items-center ">
            {/* @ts-ignore */}
            <CurrentSong song={currentMusic.song} />
            <section className="flex-1 flex justify-center items-center">
                <button
                    className="w-10 h-10 rounded-full bg-white text-black grid place-content-center"
                    onClick={handlePlay}
                >
                    {isPlaying ? (
                        //@ts-ignore
                        <IconPause />
                    ) : (
                        //@ts-ignore
                        <IconPlay />
                    )}
                </button>

                <audio ref={audioRef} />
            </section>
            <section className="flex-1 flex justify-end items-center mr-10">
                Volume
            </section>
        </main>
    );
}

/* Componentes */

function IconPause() {
    return (
        <svg
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
        >
            <path
                fill="currentColor"
                d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
            ></path>
        </svg>
    );
}

function IconPlay() {
    return (
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
}

function CurrentSong({ song }: { song: Song }) {
    if (!song) {
        return (
            <section className="flex-1 flex justify-start items-center ml-10">
                <picture className="flex items-center gap-5 max-w-[210px] w-full">
                    <img
                        src={"/placeholder.png"}
                        alt={"Song"}
                        className="w-14 h-14 rounded-md object-cover object-center"
                    />
                    <div className="flex flex-col gap-1 truncate">
                        <span className="truncate font-bold">
                            No hay canción
                        </span>
                        <span className="truncate text-gray-400"></span>
                    </div>
                </picture>
            </section>
        );
    }
    return (
        <section className="flex-1 flex justify-start items-center ml-10">
            <picture className="flex items-center gap-5 max-w-[210px] w-full">
                <img
                    src={song?.image}
                    alt={song?.title}
                    className="w-14 h-14 rounded-md object-cover object-center"
                />
                <div className="flex flex-col gap-1 truncate">
                    <span className="truncate font-bold">{song?.title}</span>
                    <span className="truncate text-gray-400">
                        {song.artists.join(", ")}
                    </span>
                </div>
            </picture>
        </section>
    );
}
