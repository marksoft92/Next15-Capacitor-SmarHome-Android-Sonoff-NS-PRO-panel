"use client";
import Link from "next/link";
import FenceIcon from '@mui/icons-material/Fence';
import SvgIcon from '@mui/material/SvgIcon';
import Image from 'next/image';
import { getSuplaChannelsStates } from "../../lib/utils";
import { useEffect, useState } from "react";
import BottomBackNav from "@/components/BottomBackNav"
const items = [
    {
        label: "Brama wjazdowa",
        icon: <SvgIcon fontSize="large" style={{ width: "10rem", height: "3rem" }}><FenceIcon /></SvgIcon>,
        status: "",
        href: "/gates",
        isDisabled: false,
        srcOpen: "/assets/images/60_1.svg",
        srcClosed: "/assets/images/60_1-closed.svg"
    },
    {
        label: "Garaż 1",
        icon: <SvgIcon fontSize="large" style={{ width: "10rem", height: "3rem" }}><FenceIcon /></SvgIcon>,
        status: "",
        href: "/gates",
        isDisabled: true,
        srcOpen: "/assets/images/30.svg",
        srcClosed: "/assets/images/30-closed.svg"
    },
    {
        label: "Garaż 2",
        icon: <SvgIcon fontSize="large" style={{ width: "10rem", height: "3rem" }}><FenceIcon /></SvgIcon>,
        status: "",
        href: "/gates",
        isDisabled: true,
        srcOpen: "/assets/images/30.svg",
        srcClosed: "/assets/images/30-closed.svg"
    },
];

export default function Gates() {
    const [channels, setChannels] = useState({});

    useEffect(() => {
        const actualStates = getSuplaChannelsStates();
        setChannels(actualStates);
    }, []);

    return (
        <main
            style={{
                minHeight: "100vh",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "1rem",
                fontFamily: "sans-serif",
                width: "100%",
                height: "100%",
                color: "white"
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
                maxWidth: "28rem"
            }}>
                {items.map((item, index) => (
                    <Link href={item.href} key={index}
                        style={{
                            pointerEvents: item.isDisabled ? "none" : "auto",
                            cursor: item.isDisabled ? "not-allowed" : "pointer",
                            opacity: item.isDisabled ? 0.5 : 1,
                            textDecoration: "none",
                            color: "inherit"
                        }}>
                        <div
                            style={{
                                border: "2px solid transparent",
                                borderImage: "linear-gradient(135deg, #ff007f, #00f0ff) 1",
                                borderRadius: "1rem",
                                padding: "0.5rem",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.5)"
                            }}
                        >
                            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
                                <Image width={100} height={100} src={item.srcOpen} alt="" />
                            </div>
                            <div style={{ color: "#f472b6", fontSize: "1.125rem" }}>
                                {item.label}
                            </div>
                            <div>
                                <button
                                    style={{
                                        background: "transparent",
                                        border: "1px solid white",
                                        color: "white",
                                        padding: "0.25rem 0.5rem",
                                        borderRadius: "0.25rem",
                                        cursor: "pointer"
                                    }}
                                >
                                    {item.status ? "otwórz" : "zamknij"}
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
                <BottomBackNav />
            </div>

        </main>
    );
}
