import { colors } from "./colors";

export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
    pinned: boolean;
}

export const playlists: Playlist[] = [
    {
        id: "1",
        albumId: 1,
        title: "Tus me gusta",
        color: colors.blue,
        cover: "/likes.png",
        artists: ["Tus canciones favoritas"],
        pinned: true
    },
    {
        id: "2",
        albumId: 2,
        title: "Chill Lo-Fi Music",
        color: colors.yellow,
        cover: "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        artists: ["NoSpirit", "Casiio"],
        pinned: true
    },
    {
        id: "3",
        albumId: 3,
        title: "Lo-Fi Chill Session",
        color: colors.green,
        cover: "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
        artists: ["Kupla", "Blue Fox"],
        pinned: false
    },
    {
        id: "4",
        albumId: 4,
        title: "Study Session",
        color: colors.rose,
        cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
        artists: ["Tenno", "xander", "Team Astro"],
        pinned: false
    },
    {
        id: "5",
        albumId: 5,
        title: "Blue Note Study Time",
        color: colors.blue,
        cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Raimu", "Yasumu"],
        pinned: false
    },
    {
        id: "6",
        albumId: 6,
        title: "Chau Saura Session",
        color: colors.purple,
        cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["Chau Saura", "amies", "kyu"],
        pinned: false
    },
    {
        id: "7",
        albumId: 7,
        title: "Like a Necessity",
        color: colors.orange,
        cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
        pinned: false
    }
];

export const morePlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_more"
}));

export const sidebarPlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_side"
}));

export const allPlaylists = [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists
];

export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [
    {
        id: 1,
        albumId: 1,
        title: "El himno de Ohio",
        image: "/music/1/01.webp",
        artists: ["Don Pollo"],
        album: "Tus me gusta",
        duration: "0:59"
    },
    {
        id: 1,
        albumId: 2,
        title: "Moonlit Walk",
        image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "3:12"
    },
    {
        id: 2,
        albumId: 2,
        title: "Coffee Daze",
        image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "4:07"
    },
    {
        id: 3,
        albumId: 2,
        title: "Skyline Serenade",
        image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "3:50"
    },
    {
        id: 4,
        albumId: 2,
        title: "Urban Echoes",
        image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "3:30"
    },
    {
        id: 5,
        albumId: 2,
        title: "Night's End",
        image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "4:20"
    },
    {
        id: 1,
        albumId: 3,
        title: "Silent Rain",
        image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        artists: ["Urban Nocturne"],
        album: "Midnight Tales",
        duration: "3:40"
    },
    {
        id: 2,
        albumId: 3,
        title: "Lost Pages",
        image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        artists: ["Urban Nocturne"],
        album: "Midnight Tales",
        duration: "3:20"
    },
    {
        id: 3,
        albumId: 3,
        title: "Midnight Tales",
        image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        artists: ["Urban Nocturne"],
        album: "Midnight Tales",
        duration: "3:50"
    },
    {
        id: 4,
        albumId: 3,
        title: "City Lights",
        image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        artists: ["Urban Nocturne"],
        album: "Midnight Tales",
        duration: "3:30"
    },
    {
        id: 5,
        albumId: 3,
        title: "Night Drive",
        image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        artists: ["Urban Nocturne"],
        album: "Midnight Tales",
        duration: "4:20"
    },
    {
        id: 1,
        albumId: 4,
        title: "Lunar",
        image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        artists: ["Tenno"],
        album: "Study Session",
        duration: "3:40"
    },
    {
        id: 2,
        albumId: 4,
        title: "Go go go!",
        image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        artists: ["Tenno"],
        album: "Study Session",
        duration: "3:20"
    },
    {
        id: 3,
        albumId: 4,
        title: "Keep focus!",
        image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        artists: ["Tenno"],
        album: "Study Session",
        duration: "2:40"
    },
    {
        id: 4,
        albumId: 4,
        title: "JavaScript is the way",
        image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        artists: ["Tenno"],
        album: "Study Session",
        duration: "3:10"
    },
    {
        id: 5,
        albumId: 4,
        title: "No more TypeScript for me",
        image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        artists: ["Tenno"],
        album: "Study Session",
        duration: "2:10"
    },
    {
        id: 1,
        albumId: 5,
        title: "Lunar",
        image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Tenno"],
        album: "Study Session",
        duration: "3:40"
    },
    {
        id: 2,
        albumId: 5,
        title: "Go go go!",
        image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Tenno"],
        album: "Study Session",
        duration: "3:20"
    },
    {
        id: 3,
        albumId: 5,
        title: "Keep focus!",
        image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Tenno"],
        album: "Study Session",
        duration: "2:40"
    },
    {
        id: 4,
        albumId: 5,
        title: "JavaScript is the way",
        image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Tenno"],
        album: "Study Session",
        duration: "3:10"
    },
    {
        id: 5,
        albumId: 5,
        title: "No more TypeScript for me",
        image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Tenno"],
        album: "Study Session",
        duration: "2:10"
    },
    {
        id: 1,
        albumId: 6,
        title: "Moonlit Walk",
        image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "3:12"
    },
    {
        id: 2,
        albumId: 6,
        title: "Coffee Daze",
        image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "4:07"
    },
    {
        id: 3,
        albumId: 6,
        title: "Skyline Serenade",
        image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "3:50"
    },
    {
        id: 4,
        albumId: 6,
        title: "Urban Echoes",
        image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "3:30"
    },
    {
        id: 5,
        albumId: 6,
        title: "Night's End",
        image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["LoFi Dreamer"],
        album: "Chill Lo-Fi Music",
        duration: "4:20"
    }
];

export const weeklyMix: Playlist[] = [
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Mix diario 1",
        cover: "/mix/mix-1.jpg",
        artists: ["Arcade Player, DM DOKURO, NyxTheShield y más"],
        pinned: false,
        color: colors.blue
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Mix diario 2",
        cover: "/mix/mix-2.jpg",
        artists: [
            "String Player Gamer, The Marcus Hedges Trend Orchestra, Kirby's Dream Band y más"
        ],
        pinned: false,
        color: colors.yellow
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Mix diario 3",
        cover: "/mix/mix-3.jpg",
        artists: ["Selphius, Braxton Burks, Shayne Orok y más"],
        pinned: false,
        color: colors.green
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Mix diario 4",
        cover: "/mix/mix-4.jpg",
        artists: ["Sinesita, The Blackem Effect, KokiRemix y más"],
        pinned: false,
        color: colors.rose
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Mix diario 5",
        cover: "/mix/mix-5.jpg",
        artists: ["The Walters, The Living Tombstone, Mr.Kitty y más"],
        pinned: false,
        color: colors.orange
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Mix diario 6",
        cover: "/mix/mix-6.jpg",
        artists: ["Miura Jam, 物語シリーズ, Vicke Blanka y más"],
        pinned: false,
        color: colors.purple
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Descubrimiento semanal",
        cover: "/mix/mix-7.jpg",
        artists: [
            "Tu mix semanal de música nueva y recomendaciones elegidas para ti. Se actualiza los lunes."
        ],
        pinned: false,
        color: colors.blue
    }
];

export const suggestPlaylist: Playlist[] = [
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Plants vs. Zombies (Original Video Game Soundtrack)",
        cover: "/suggest/suggest-1.jpg",
        artists: ["Laura Shigihara"],
        pinned: false,
        color: colors.blue
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Year 7",
        cover: "/suggest/suggest-2.jpg",
        artists: ["Qumu"],
        pinned: false,
        color: colors.yellow
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "JOJO'S BIZARRE ADVENTURE -Diamond is unbreakable O.S.T Vol.1 -Good Morning Morioh Cho- Music by Yugo Kanno",
        cover: "/suggest/suggest-3.jpg",
        artists: ["Yugo Kanno"],
        pinned: false,
        color: colors.green
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "セガ･サウンド･セレクション",
        cover: "/suggest/suggest-4.jpg",
        artists: ["SEGA SOUND TEAM"],
        pinned: false,
        color: colors.rose
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Jump Up, Super Star!",
        cover: "/suggest/suggest-5.jpg",
        artists: ["The Living Tombstone"],
        pinned: false,
        color: colors.orange
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Rhythm Heaven: Iconic Themes, Vol. 2",
        cover: "/suggest/suggest-6.jpg",
        artists: ["Arcade Player"],
        pinned: false,
        color: colors.purple
    },
    {
        id: Math.random().toString(),
        albumId: 404,
        title: "Game & Sound: VGM Covers, Vol. 5",
        cover: "/suggest/suggest-7.jpg",
        artists: ["Game & Sound"],
        pinned: false,
        color: colors.blue
    }
];
