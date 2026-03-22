"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface WaterUseBreakdownProps {
	people: number;
}

export default function WaterUseBreakdown({ people }: WaterUseBreakdownProps) {

	// Sample data for water usage breakdown
	const data = [
		{
			name: 'Toilets',
			usage: people * 30, // Assuming 30L per person per day for toilets
		},
		{
			name: 'Showers',
			usage: people * 50, // Assuming 50L per person per day for showers
		},
		{
			name: 'Sinks',
			usage: people * 20, // Assuming 20L per person per day for sinks
		},
		{
			name: 'Laundry',
			usage: people * 40, // Assuming 40L per person per day for laundry
		},
		{
			name: 'Outdoor',
			usage: people * 10, // Assuming 10L per person per day for outdoor use
		},
	];

	return (
		<div style={{
			height: "100vh",
			display: "flex",
			fontFamily: "Arial",
			color: "white",
			background: "linear-gradient(135deg, #0f2027, #2c5364)",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<div style={{
				width: "80%",
				padding: 20,
				textAlign: "center"
			}}>
				<h2>Water Usage Breakdown</h2>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="usage" name="Usage in Liters" fill="#00c6ff" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
