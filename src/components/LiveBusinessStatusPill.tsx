"use client";

import { useEffect, useState } from "react";

import { getBusinessStatus } from "@/lib/opening-hours";

const REFRESH_INTERVAL = 60_000;
const fallbackStatus = {
  detail: "Vérification en cours…",
  isOpen: false,
  label: "Horaires en direct",
};

function getDelayUntilNextMinute() {
  const now = new Date();
  return (60 - now.getSeconds()) * 1000 - now.getMilliseconds() + 50;
}

export function LiveBusinessStatusPill() {
  const [status, setStatus] = useState(fallbackStatus);

  useEffect(() => {
    let intervalId: number | undefined;

    const syncStatus = () => {
      setStatus(getBusinessStatus());
    };

    syncStatus();

    const timeoutId = window.setTimeout(() => {
      syncStatus();
      intervalId = window.setInterval(syncStatus, REFRESH_INTERVAL);
    }, getDelayUntilNextMinute());

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div aria-live="polite" className={`status-pill ${status.isOpen ? "status-pill--open" : ""}`}>
      <span>{status.label}</span>
      <small>{status.detail}</small>
    </div>
  );
}
