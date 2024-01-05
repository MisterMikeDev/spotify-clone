import { usePlayerStore, type PlayerStoreState } from "../store/playerStore";
export default function PlaylistPagePlayButton({
    albumId = "0",
    songId
}: {
    albumId?: string;
    songId: number;
}) {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } =
        usePlayerStore((state) => state as PlayerStoreState);

    const isPlayingPlaylist =
        isPlaying && currentMusic?.playlist?.id === albumId;

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false);
            return;
        }

        fetch(`/api/get-info-playlist.json?id=${albumId}`)
            .then((res) => res.json())
            .then((data) => {
                const { songs, playlist } = data;

                setIsPlaying(true);
                setCurrentMusic({ songs, playlist, song: songs[songId - 1] });
            });
    };

    return (
        <button
            onClick={handleClick}
            className="w-[4rem] h-[4rem] bg-greenSpotify text-black flex items-center justify-center rounded-full shadow-2xl transition-all duration-200 transform"
        >
            {isPlayingPlaylist ? (
                <svg
                    role="img"
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
                    className="w-10 h-10"
                >
                    <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
                </svg>
            )}
        </button>
    );
}
