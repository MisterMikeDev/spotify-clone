import type { Song } from "@/lib/data";
import { useState } from "react";
import { usePlayerStore, type PlayerStoreState } from "../store/playerStore";
export default function MusicTableSongIndexPlay({
    song: songProps,
    index
}: {
    song: Song;
    index: number;
}) {
    const { setCurrentMusic, setIsPlaying } = usePlayerStore(
        (state) => state as PlayerStoreState
    );
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        fetch(`/api/get-info-playlist.json?id=${songProps.albumId}`)
            .then((res) => res.json())
            .then((data) => {
                const { songs, playlist } = data;
                setIsPlaying(true);
                setCurrentMusic({
                    songs,
                    playlist,
                    song: songs[songProps.id - 1]
                });
            });
    };

    const handleHoverEnter = () => {
        setIsHovering(true);
        setTimeout(() => {
            if (isHovering === true) {
                return;
            }
            setIsHovering(false);
        }, 2500);
    };

    const handleHoverLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="w-5 h-5 flex items-center justify-center"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
        >
            {isHovering ? (
                <button
                    onClick={handleClick}
                    className="w-[0.5rem] h-[0.5rem] text-textSpotify shadow-2xl transition-all duration-200 transform"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-9 h-9 -m-3.5"
                    >
                        <path
                            fill="currentColor"
                            d="M8 5.14v14l11-7-11-7z"
                        ></path>
                    </svg>
                </button>
            ) : (
                <span className="truncate text-gray-400">{index + 1}.</span>
            )}
        </div>
    );
}
