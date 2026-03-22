"use client"
import { useState } from 'react';
import WaterUse from '../components/WaterUse';
import WaterUseBreakdown from '../components/WaterUseBreakdown';

export default function Home() {
    const [currentView, setCurrentView] = useState('waterUse');
    const [people, setPeople] = useState(0);

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 10,
                background: 'linear-gradient(135deg, #0f2027, #2c5364)',
                color: 'white'
            }}>
                <button
                    onClick={() => setCurrentView('waterUse')}
                    style={{
                        margin: 5,
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: 5,
                        background: currentView === 'waterUse' ? '#00c6ff' : '#555',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    Water Use
                </button>
                <button
                    onClick={() => setCurrentView('breakdown')}
                    style={{
                        margin: 5,
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: 5,
                        background: currentView === 'breakdown' ? '#00c6ff' : '#555',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    Breakdown
                </button>
            </div>
            {{
                'waterUse': <WaterUse people={people} setPeople={setPeople} />,
                'breakdown': <WaterUseBreakdown people={people} />
            }[currentView]}
        </div>
    );
}