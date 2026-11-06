import { CONFIG } from "./data.js";

// Times are Cambodia (UTC+7), written in UTC for the calendar file.
const EVENTS = [
  { title: "អាពាហ៍ពិពាហ៍ ចាន់រ៉ា & ស្រីណេ · Wedding Day 1", start: "20270123T080000Z", end: "20270123T140000Z" },
  { title: "អាពាហ៍ពិពាហ៍ ចាន់រ៉ា & ស្រីណេ · Wedding Day 2", start: "20270124T233000Z", end: "20270124T100000Z" },
];

export function downloadIcs() {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Invite Wedding//EN"];
  EVENTS.forEach((e, i) => lines.push(
    "BEGIN:VEVENT", `UID:wedding-${i}@invite-wedding`, "DTSTAMP:20261028T000000Z",
    `DTSTART:${e.start}`, `DTEND:${e.end}`, `SUMMARY:${e.title}`,
    `DESCRIPTION:Location\\: ${CONFIG.mapUrl}`, `URL:${CONFIG.mapUrl}`, "END:VEVENT"));
  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "wedding.ics";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
