// Link example: https://your-site.com/?guest=Sokha  ->  "Dear Sokha"
const raw = new URLSearchParams(window.location.search).get("guest") || "";
export const GUEST = raw.replace(/[<>]/g, "").trim().slice(0, 40);
