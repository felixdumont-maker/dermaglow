"use client";

import { useEffect } from "react";

interface AcuityEmbedProps {
  acuityUrl?: string;
}

export default function AcuityEmbed({
  acuityUrl = "https://app.acuityscheduling.com/schedule.php?owner=YOUR_OWNER_ID",
}: AcuityEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        src={acuityUrl}
        title="Réservation Dermaglow by Hanane"
        width="100%"
        height="800"
        frameBorder="0"
        className="w-full border-0"
        style={{ minHeight: "clamp(500px, 80vh, 900px)" }}
      />
    </div>
  );
}
