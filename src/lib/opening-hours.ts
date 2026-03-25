import { weeklySchedule } from "@/lib/site-data";

const timeZone = "Europe/Paris";

function dayIndexFromShortName(shortDay: string) {
  const order = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return order.indexOf(shortDay);
}

function parseMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatDisplayTime(minutes: number) {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}h${mins}`;
}

function getLocalParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const shortDay =
    parts.find((part) => part.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value ?? "0",
  );

  return {
    shortDay,
    minutes: hour * 60 + minute,
  };
}

export function getBusinessStatus(date = new Date()) {
  const { shortDay, minutes } = getLocalParts(date);
  const todayIndex = dayIndexFromShortName(shortDay);
  const today = weeklySchedule.find((entry) => entry.shortDay === shortDay);

  if (!today) {
    return {
      label: "Horaires à confirmer",
      detail: "Merci de vérifier les horaires publics.",
      isOpen: false,
    };
  }

  for (const interval of today.intervals) {
    const start = parseMinutes(interval.start);
    const end = parseMinutes(interval.end);

    if (minutes >= start && minutes < end) {
      return {
        label: "Ouvert maintenant",
        detail: `Fermeture à ${formatDisplayTime(end)}`,
        isOpen: true,
      };
    }

    if (minutes < start) {
      return {
        label: "Réouvre bientôt",
        detail: `Ouverture à ${formatDisplayTime(start)}`,
        isOpen: false,
      };
    }
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const nextIndex = (todayIndex + offset) % 7;
    const nextDay = weeklySchedule[nextIndex];

    if (nextDay && nextDay.intervals.length > 0) {
      const nextStart = parseMinutes(nextDay.intervals[0].start);
      return {
        label: "Fermé pour le moment",
        detail: `${nextDay.day} à ${formatDisplayTime(nextStart)}`,
        isOpen: false,
      };
    }
  }

  return {
    label: "Horaires à confirmer",
    detail: "Aucun créneau public n'a été renseigné.",
    isOpen: false,
  };
}

export function formatIntervals(
  intervals: Array<{ start: string; end: string }>,
) {
  if (intervals.length === 0) {
    return "Fermé";
  }

  return intervals
    .map((interval) => `${interval.start.replace(":", "h")} - ${interval.end.replace(":", "h")}`)
    .join(" / ");
}
