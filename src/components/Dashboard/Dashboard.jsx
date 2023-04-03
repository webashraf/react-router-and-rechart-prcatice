import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Dashboard = () => {


    let students = [
        { id: 1, name: "Alice", physics: 80, chemistry: 5, math: 90 },
        { id: 2, name: "Bob", physics: 60, chemistry: 70, math: 80 },
        { id: 3, name: "Charlie", physics: 0, chemistry: 85, math: 95 },
        { id: 4, name: "David", physics: 70, chemistry: 75, math: 0 },
        { id: 5, name: "Emma", physics: 85, chemistry: 8, math: 90 },
        { id: 6, name: "Frank", physics: 75, chemistry: 70, math: 80 },
        { id: 7, name: "Grace", physics: 95, chemistry: 90, math: 100 },
        { id: 8, name: "Helen", physics: 80, chemistry: 75, math: 85 },
        { id: 9, name: "Ivan", physics: 35, chemistry: 70, math: 75 },
        { id: 10, name: "Jane", physics: 90, chemistry: 85, math: 95 }
      ];
            


    return (
        <div>
            <LineChart
            width={800}
            height={300}
            data={students}
            >
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey="physics" type="monotone" stroke='#8884d8'></Line>
                <Line dataKey="chemistry" type="monotone" stroke='#4384f8'></Line>
                <Line dataKey="math" type="monotone" stroke='#82ca9d'></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;