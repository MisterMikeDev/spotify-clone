import { useEffect, useState } from "react";
import { playlists } from "../lib/data";

export default function Gradient() {
    const [colorGradient, setColorGradient] = useState("#3b1eab");

    useEffect(() => {
        const path = window.location.pathname;
        if (path.includes("/album/")) {
            const id = path.replace("/album/", "");
            const album = playlists.find(
                (album) => album.albumId === Number(id)
            );
            setColorGradient(`${album?.color.accent}`);
        } else if (path.includes("/likes")) {
            const id = 1;
            const album = playlists.find(
                (album) => album.albumId === Number(id)
            );
            setColorGradient(`${album?.color.accent}`);
        }
    }, []);

    useEffect(() => {
        const $gradient = document.getElementById("gradient");
        if ($gradient) {
            $gradient.style.background = `linear-gradient(to bottom, ${colorGradient}, transparent)`;
        }
    }, [colorGradient]);
    return (
        <div
            id="gradient"
            className={`absolute w-full h-96  inset-0 -z-[0]`}
            color={"#fff"}
        ></div>
    );
}

/**
 ---
import { playlists } from "../lib/data";
export interface Props {
    color?: string;
}

const getColorFromPage = () => {
    const path = Astro.url.pathname;
    if (path.includes("/album/")) {
        const id = path.replace("/album/", "");
        const album = playlists.find((album) => album.albumId === Number(id));
        return album?.color.accent;
    } else if (path.includes("/likes")) {
        const id = 1;
        const album = playlists.find((album) => album.albumId === Number(id));
        return album?.color.accent;
    }
};

const color = getColorFromPage();
---

<div id="gradient" class={`absolute w-full h-96 inset-0 -z-[0]`} color={color}>
</div>
<script>
    const $gradient = document.getElementById("gradient");
    const color = $gradient?.getAttribute("color");
    if (color && $gradient)
        $gradient.style.background = `linear-gradient(to bottom, ${color}, transparent)`;
</script>

 */
