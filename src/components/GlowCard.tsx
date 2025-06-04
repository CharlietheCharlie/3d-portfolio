import React, { MouseEventHandler, useRef } from "react";
import { expCards } from "../constants";

const GlowCard = ({
  card,
  children,
}: {
  card: (typeof expCards)[number];
  children: React.ReactNode;
}): React.ReactElement => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", String(angle + 60));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="/images/star.png"
            alt="star"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
