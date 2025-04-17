"use client";
import Link from "next/link";
import FenceIcon from '@mui/icons-material/Fence';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import SvgIcon from '@mui/material/SvgIcon';

const items = [
  { label: "Bramy", icon: <SvgIcon fontSize="large" className="!w-[10rem] !h-[3rem]"><FenceIcon /></SvgIcon>, status: "", color: "text-lime-400", "href": "/gates", isDisabled: false },
  { label: "Gniazdka", icon: <SvgIcon fontSize="large" className="!w-[10rem] !h-[3rem]"><ElectricBoltIcon /></SvgIcon>, status: "", color: "text-cyan-400", "href": "/volts", isDisabled: true },
  { label: "Kamery", icon: <SvgIcon fontSize="large" className="!w-[10rem] !h-[3rem]"><CameraOutdoorIcon /></SvgIcon>, status: "", color: "text-cyan-400", "href": "/cameras", isDisabled: true },
  { label: "Alarm", icon: <SvgIcon fontSize="large" className="!w-[10rem] !h-[3rem]"><NotificationsActiveIcon /></SvgIcon>, status: "", color: "", "href": "/alarm", isDisabled: true },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem",
        color: "white",
        fontFamily: "sans-serif",
        width: "100%",
        // backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "40rem",
        }}
      >
        {items.map((item, index) => (
          <Link
            href={item?.href}
            key={index}
            style={{
              pointerEvents: item?.isDisabled ? "none" : "auto",
              cursor: item?.isDisabled ? "not-allowed" : "pointer",
              opacity: item?.isDisabled ? 0.5 : 1,
            }}
          >
            <div
              style={{
                border: "2px solid transparent",
                borderRadius: "1rem",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderImage: "linear-gradient(135deg, #ff007f, #00f0ff) 1",

              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
                {item.icon}
              </div>
              <div style={{ color: "#ec4899", fontSize: "1.125rem" }}>
                {item.label}
              </div>
              {item.status && (
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: item.color,
                    marginTop: "0.25rem",
                  }}
                >
                  {item.status}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "40rem",
          borderRadius: "1rem",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          borderImage: "linear-gradient(135deg, #ff007f, #00f0ff) 1",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      >
        <span style={{ color: "#ec4899", fontSize: "1.125rem" }}>Temperatura</span>
        <span style={{ color: "#22d3ee", fontSize: "1.5rem", fontWeight: "bold" }}>
          21,5°C
        </span>
      </div>
    </main>
  );
}
