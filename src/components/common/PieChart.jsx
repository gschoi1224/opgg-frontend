import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const MyPieChart = ({ radius, weight = 13, wins, loses }) => {
    const data = [
        { name: 'win', value: wins, fill: '#1f8ecd' },
        { name: 'lose', value: loses, fill: '#ee5a52' },
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart
                width={radius}
                height={radius}
                style={{ transform: 'rotate(-90deg)' }}
            >
                <Pie
                    data={data}
                    innerRadius={radius / 2 - weight}
                    outerRadius={radius / 2}
                    dataKey="value"
                />
            </PieChart>
        </ResponsiveContainer>
    );
};
export default MyPieChart;
