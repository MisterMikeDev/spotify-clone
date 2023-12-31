import { useState } from "react";
import { usePlayerStore, type PlayerStoreState } from "../store/playerStore";
export default function TogglePlay({
    id = 0,
    fullGrow
}: {
    id?: number;
    fullGrow: boolean;
}) {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } =
        usePlayerStore((state) => state as PlayerStoreState);

    const [isHovering, setIsHovering] = useState(false);

    const isPlayingPlaylist =
        isPlaying && currentMusic?.playlist?.id === String(id);

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false);
            return;
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                const { songs, playlist } = data;

                setIsPlaying(true);
                setCurrentMusic({ songs, playlist, song: songs[0] });
            });
    };

    return (
        <div
            className={` h-full absolute top-0 flex items-end justify-end pr-2 pb-2 ${
                fullGrow ? "w-full" : "ml-[67%] w-1/3"
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <button
                onClick={handleClick}
                className={`w-12 h-12 bg-greenSpotify text-black flex items-center justify-center rounded-full shadow-2xl transition-all duration-200 transform ${
                    isHovering ? "" : "translate-y-1/3 opacity-0"
                }`}
            >
                {isPlayingPlaylist ? (
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fill="currentColor"
                            d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-9 h-9"
                    >
                        <path
                            fill="currentColor"
                            d="M8 5.14v14l11-7-11-7z"
                        ></path>
                    </svg>
                )}
            </button>
        </div>
    );
}
