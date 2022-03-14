import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

function Kpi({ userData }) {
	
	const scoreMax = {
		score: 100,
		fill: 'transparent',
		
	}
  return (
    <div className="kpi">
			<h2>Score</h2>
     <RadialBarChart
      width={256}
      height={256}
      cx="50%"
      cy="50%"
      innerRadius={50}
      outerRadius={100}
      barSize={10}
      data={[scoreMax,userData]}
      startAngle={205}
      endAngle={-155}
			
    >
      <RadialBar  dataKey="score" cornerRadius={10}/>
			<circle cx="50%" cy="50%" fill="white" r="70">
		
			</circle>
		
    </RadialBarChart>
		<p><span>{userData.score}%</span> <br/>de votre <br/>objectif</p>
    </div>
  );
}

export default Kpi;
