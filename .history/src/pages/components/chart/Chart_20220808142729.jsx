import React, { PureComponent } from 'react';
import './chart.scss';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'January', total: 18000 },
  { name: 'February', total: 12000 },
  { name: 'March', total: 21000 },
  { name: 'April', total: 12000 },
  { name: 'May', total: 11000 },
];
const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last six month Revenue</div>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
