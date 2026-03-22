"use client"
import { useState } from "react";
import WaterUseBreakdown from "./WaterUseBreakdown";

interface WaterUseProps {
    people: number;
    setPeople: (people: number) => void;
}

export default function WaterUse({ people, setPeople }: WaterUseProps) {

    const usage = people * 230;
    const tankPercent = Math.min(usage / 10, 100);

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            fontFamily: "Arial",
            color: "white",
            background: "linear-gradient(135deg, #0f2027, #2c5364)"
        }}>

            {/* CENTER */}
            <div style={{
                width: "75%",
                padding: 20,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>

                <img
                    src="https://cdn.vectorstock.com/i/500p/36/81/blue-water-splash-logo-vector-27833681.jpg"
                    style={{
                        width: 120,
                        marginBottom: 10,
                        borderRadius: "50%",
                        boxShadow: "0 0 20px #00c6ff"
                    }}
                />

                <h1>Water Saver</h1>

                <p>Adjust number of people in your house</p>

                <div style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "center",
                    marginBottom: 20
                }}>

                    <button
                        onClick={() => setPeople(Math.max(0, people - 1))}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            border: "none",
                            background: "#ff4d4d",
                            color: "white",
                            fontSize: 20,
                            cursor: "pointer"
                        }}
                    >
                        -
                    </button>

                    <div style={{ fontSize: 30 }}>{people}</div>

                    <button
                        onClick={() => setPeople(people + 1)}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            border: "none",
                            background: "#00c6ff",
                            color: "white",
                            fontSize: 20,
                            cursor: "pointer"
                        }}
                    >
                        +
                    </button>

                </div>

                <h3>{usage} L / Day</h3>
                <p>{usage * 365} L / Year</p>

            </div>

            {/* RIGHT - CLEAN TANK */}
            <div style={{
                width: "25%",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>

                <h3>Tank</h3>

                <div style={{
                    width: 140,
                    height: 240,
                    borderRadius: 25,
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.05)",
                    border: "2px solid rgba(255,255,255,0.2)",
                    boxShadow: "inset 0 0 25px rgba(0,0,0,0.6), 0 0 20px rgba(0,198,255,0.3)"
                }}>

                    {/* WATER */}
                    {tankPercent > 0 && (
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: `${tankPercent}%`,
                            background: "linear-gradient(to top, #0072ff, #00c6ff)",
                            transition: "height 0.6s ease"
                        }} />
                    )}

                    {/* SHINE */}
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 15,
                        width: "30%",
                        height: "100%",
                        background: "rgba(255,255,255,0.12)",
                        transform: "skewX(-12deg)"
                    }} />

                </div>

                <p>{usage} L</p>

            </div>

        </div>
    );
}