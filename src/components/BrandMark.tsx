// The Encuentro "square cross" brand mark, as inline SVG so it stays crisp
// and can be tinted for light or dark backgrounds.

export default function BrandMark({
  className = "",
  bg = "#12345c",
  arms = "#f5f2eb",
  center = "#6aa644",
}: {
  className?: string;
  bg?: string;
  arms?: string;
  center?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Encuentro Church"
    >
      <rect width="64" height="64" rx="14" fill={bg} />
      <rect x="27.05" y="10.6" width="9.9" height="42.8" fill={arms} />
      <rect x="13.8" y="27.05" width="36.4" height="9.9" fill={arms} />
      <rect x="27.9" y="27.9" width="8.2" height="8.2" fill={center} />
    </svg>
  );
}

// Pillar icons — thin-stroke line icons on brand green.
export function PillarIcon({ name }: { name: "hands" | "book" | "people" }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "book")
    return (
      <svg {...common}>
        <path d="M12 6.5C10.5 5.3 8.3 5 6 5.3v12.4c2.3-.3 4.5 0 6 1.2 1.5-1.2 3.7-1.5 6-1.2V5.3c-2.3-.3-4.5 0-6 1.2Z" />
        <path d="M12 6.5v12.3" />
      </svg>
    );
  if (name === "people")
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="2.6" />
        <circle cx="16.5" cy="9.2" r="2.1" />
        <path d="M4.5 18.5c0-2.7 2-4.6 4.5-4.6s4.5 1.9 4.5 4.6" />
        <path d="M14.5 14.2c2.1-.4 4.5 1 4.5 4" />
      </svg>
    );
  // hands
  return (
    <svg {...common}>
      <path d="M12 8.5c-1-2-3.6-2.4-5-.9-1.4 1.5-1 3.6.6 5.2L12 17l4.4-4.2c1.6-1.6 2-3.7.6-5.2-1.4-1.5-4-1.1-5 .9Z" />
    </svg>
  );
}
