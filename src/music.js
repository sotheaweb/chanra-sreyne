import { CONFIG } from "./data.js";

export const audio = CONFIG.music ? Object.assign(new Audio(CONFIG.music), { loop: true, preload: "none" }) : null;
export const playMusic = () => { if (audio) audio.play().catch(() => {}); };
