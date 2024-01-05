import React, { useEffect, useRef, useState } from "react";
import { usePlayerStore, type PlayerStoreState } from "../store/playerStore";
import type { Song } from "../lib/data";
import { Slider } from "./Slider";

export default function Player() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(
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
        audioRef.current!.volume = volume;
    }, [volume]);

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
            <section className="flex-1 flex flex-col justify-center items-center">
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
                {/* @ts-ignore */}
                <SongControl audio={audioRef} />
                <audio ref={audioRef} />
            </section>
            <section className="flex-1 flex justify-end items-center mr-10">
                {/* @ts-ignore */}
                <VolumeControl />
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

function IconVolumeSilence() {
    return (
        <svg
            fill="currentColor"
            role="presentation"
            height="16"
            width="16"
            aria-hidden="true"
            aria-label="Volumen apagado"
            viewBox="0 0 16 16"
        >
            <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
            <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
        </svg>
    );
}

function IconVolume() {
    return (
        <svg
            fill="currentColor"
            role="presentation"
            height="16"
            width="16"
            aria-hidden="true"
            aria-label="Volumen alto"
            id="volume-icon"
            viewBox="0 0 16 16"
        >
            <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
            <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
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

function SongControl({ audio }: { audio: React.RefObject<HTMLAudioElement> }) {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        audio.current?.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio.current?.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    const handleTimeUpdate = () => {
        setCurrentTime(Number(audio.current?.currentTime));
    };

    const formatTime = (time: number) => {
        if (time === null) return "0:00";

        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const duration = audio?.current?.duration ?? 0;

    return (
        <div className="flex gap-x-3 text-xs pt-2">
            <span className="opacity-50 w-12 text-right">
                {formatTime(currentTime)}
            </span>
            {/* @ts-ignore */}
            <Slider
                value={[currentTime]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className="w-[400px]"
                onValueChange={(value) => {
                    const [newCurrentTime] = value;
                    audio.current!.currentTime = newCurrentTime;
                }}
            />

            <span className="opacity-50 w-12">
                {duration ? formatTime(duration) : "0:00"}
            </span>
        </div>
    );
}

function VolumeControl() {
    const { volume, setVolume } = usePlayerStore(
        (state) => state as PlayerStoreState
    );
    const previousVolumeRef = useRef(volume);

    const isVolumeSilenced = volume < 0.1;

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current);
        } else {
            previousVolumeRef.current = volume;
            setVolume(0);
        }
    };

    return (
        <div className="flex justify-center gap-x-2 text-white">
            <button
                className="opacity-70 hover:opacity-100 transition"
                onClick={handleClickVolumen}
            >
                {/* @ts-ignore */}
                {isVolumeSilenced ? <IconVolumeSilence /> : <IconVolume />}
            </button>
            {/* @ts-ignore */}
            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                value={[volume * 100]}
                className="w-[95px]"
                onValueChange={(value) => {
                    const [newVolume] = value;
                    const volumeValue = newVolume / 100;
                    setVolume(volumeValue);
                }}
            />
        </div>
    );
}
