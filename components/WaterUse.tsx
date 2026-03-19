"use client"
import { useState } from "react";

export default function WaterUse() {

    const [people, setPeople] = useState(0);
    const [usage, setUsage] = useState(0);

    const [showTips, setShowTips] = useState(false);
    const [showTank, setShowTank] = useState(false);
    const [showChart, setShowChart] = useState(false);

    const calculate = () => {
        const result = people * 230;
        setUsage(result);
    };

    const tankPercent = Math.min(usage / 10, 100);

    return (
        <div style={{
            background: "#1f57d6",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial",
            color: "black",
            overflow: "hidden"
        }}>

            <div style={{
                background: "white",
                width: "100%",
                height: "100%",
                borderRadius: 0,
                padding: 20,
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>

                <img
                    src="https://pacinst.org/wp-content/uploads/2023/02/jairo-gallegos-unsplash-scaled.jpg"
                    style={{
                        width: "100%",
                        height: "45vh",
                        objectFit: "contain",
                        borderRadius: 12,
                        marginBottom: 15
                    }}
                />

                <h2>Sustainable Water Use</h2>

                <p style={{ fontSize: 12 }}>
                    Estimate how much water your household uses based on the number of people living in your home.
                </p>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 15,
                    marginBottom: 10
                }}>

                    <button
                        onClick={() => setPeople(Math.max(0, people - 1))}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 6,
                            border: "1px solid black",
                            background: "black",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        -
                    </button>

                    <div style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "black"
                    }}>
                        {people}
                    </div>

                    <button
                        onClick={() => setPeople(people + 1)}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 6,
                            border: "1px solid black",
                            background: "black",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        +
                    </button>

                </div>

                <button
                    onClick={calculate}
                    style={{
                        width: "100%",
                        padding: 10,
                        background: "#2d6cff",
                        color: "white",
                        border: "none",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginBottom: 10
                    }}
                >
                    Calculate Average Per House
                </button>

                <p style={{ fontWeight: "bold" }}>
                    {usage} L Per Day — {usage * 365} L Per Year
                </p>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10
                }}>

                    <button
                        onClick={() => setShowTips(true)}
                        style={{
                            flex: 1,
                            margin: 4,
                            padding: 8,
                            borderRadius: 8,
                            border: "1px solid black",
                            background: "white",
                            color: "black",
                            cursor: "pointer"
                        }}
                    >
                        💡 Tips
                    </button>

                    <button
                        onClick={() => setShowTank(true)}
                        style={{
                            flex: 1,
                            margin: 4,
                            padding: 8,
                            borderRadius: 8,
                            border: "1px solid black",
                            background: "white",
                            color: "black",
                            cursor: "pointer"
                        }}
                    >
                        🛢 Tank
                    </button>

                    <button
                        onClick={() => setShowChart(true)}
                        style={{
                            flex: 1,
                            margin: 4,
                            padding: 8,
                            borderRadius: 8,
                            border: "1px solid black",
                            background: "white",
                            color: "black",
                            cursor: "pointer"
                        }}
                    >
                        📊 Chart
                    </button>

                </div>

            </div>


            {showTips && (
                <div style={{
                    position: "absolute",
                    background: "white",
                    padding: 20,
                    borderRadius: 12,
                    width: 250,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    color: "black"
                }}>
                    <h3>💡 Water Tips</h3>

                    <ul style={{ fontSize: 13 }}>
                        <li>Take shorter showers</li>
                        <li>Fix leaking taps</li>
                        <li>Turn off tap when brushing</li>
                    </ul>

                    <button
                        onClick={() => setShowTips(false)}
                        style={{
                            marginTop: 10,
                            padding: 6,
                            border: "1px solid black",
                            borderRadius: 6,
                            background: "white",
                            cursor: "pointer",
                            color: "black"
                        }}
                    >
                        Close
                    </button>
                </div>
            )}


            {showTank && (
                <div style={{
                    position: "absolute",
                    background: "white",
                    padding: 20,
                    borderRadius: 12,
                    width: 250,
                    textAlign: "center",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    color: "black"
                }}>
                    <h3>🛢 Water Tank</h3>

                    <div style={{
                        width: 100,
                        height: 120,
                        border: "3px solid black",
                        borderRadius: 12,
                        margin: "15px auto",
                        position: "relative",
                        overflow: "hidden"
                    }}>

                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: `${tankPercent}%`,
                            background: "linear-gradient(#5edfff,#00aaff)"
                        }} />

                        <div style={{
                            position: "absolute",
                            bottom: `${tankPercent}%`,
                            width: "100%",
                            height: `${tankPercent * 0.2}%`,
                            background: "linear-gradient(#9effa1,#39c96b)"
                        }} />

                    </div>

                    <p>💧 Used: <b>{usage} L</b></p>
                    <p>🌱 Could Save: <b>{Math.round(usage * 0.2)} L</b></p>

                    <button
                        onClick={() => setShowTank(false)}
                        style={{
                            padding: 6,
                            border: "1px solid black",
                            borderRadius: 6,
                            background: "white",
                            cursor: "pointer",
                            color: "black"
                        }}
                    >
                        Close
                    </button>

                </div>
            )}

            {showChart && (
                <div style={{
                    position: "absolute",
                    background: "white",
                    padding: 20,
                    borderRadius: 12,
                    width: "80vw",
                    maxWidth: 700,
                    height: "80vh",
                    textAlign: "center",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <h3>📊 Water Usage Chart</h3>

                    <img
                        src="https://quickchart.io/chart?c={type:'bar',data:{labels:['🚿 Shower','🧺 Laundry','🍽 Kitchen','🚰 Other'],datasets:[{data:[40,25,20,15]}]}}"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            marginTop: 10
                        }}
                    />

                    <button
                        onClick={() => setShowChart(false)}
                        style={{
                            marginTop: 10,
                            padding: 8,
                            border: "1px solid black",
                            borderRadius: 6,
                            background: "white",
                            cursor: "pointer",
                            color: "black"
                        }}
                    >
                        Close
                    </button>
                </div>
            )}

        </div>
    );
}