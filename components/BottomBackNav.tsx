"use client"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export default function BottomBackNav() {
    const pathname = usePathname()
    const router = useRouter()

    if (pathname === "/") return null

    return (
        <nav style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "#000",
            borderTop: "2px solid transparent",
            borderImage: "linear-gradient(135deg, #ff007f, #00f0ff) 1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
        }}>
            <button
                onClick={() => router.push("/")}
                style={{
                    color: "#00f0ff",
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    textShadow: "0 0 8px #00f0ff",
                    cursor: "pointer"
                }}
            >
                ← Wróć
            </button>
        </nav>
    )
}
