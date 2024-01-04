import type { Song, Playlist } from "../lib/data";
import { create } from "zustand";

type CurrentMusicType = {
    playlist: Playlist | null;
    song: Song | null;
    songs: string[];
};

export type PlayerStoreState = {
    isPlaying: boolean;
    currentMusic: CurrentMusicType;
    volume: number;
    setVolume: (volume: number) => void;
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentMusic: (currentMusic: CurrentMusicType) => void;
};

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    volume: 1,
    setVolume: (volume: number) => set({ volume }),
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setCurrentMusic: (currentMusic: CurrentMusicType) => set({ currentMusic })
}));
