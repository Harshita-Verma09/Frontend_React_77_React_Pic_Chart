import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Initial data
const initialData = [
  { name: "React", value: 400 },
  { name: "Vue", value: 300 },
  { name: "Angular", value: 300 },
  { name: "Svelte", value: 200 },
];

// Default colors
const defaultColors = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
  "#A28DFF", "#FF6699", "#33CCCC", "#B6FF00",
  "#FFB347", "#E066FF", "#00CED1", "#FFD700",
];

// Generate random color
const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const Chart = () => {
  const [chartData, setChartData] = useState(initialData);
  const [colors, setColors] = useState(defaultColors);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputName || !inputValue) return;

    const newEntry = {
      name: inputName,
      value: parseInt(inputValue),
    };

    setChartData([...chartData, newEntry]);
    setColors([...colors, getRandomColor()]);
    setInputName("");
    setInputValue("");
  };

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl text-white flex flex-col items-center gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-semibold">Enter Data</h2>
          <input
            type="text"
            placeholder="Name (e.g., Framework)"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="px-4 py-2 rounded-md w-64 text-white border border-white bg-transparent focus:outline-none"
          />
          <input
            type="number"
            placeholder="Value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 rounded-md w-64 text-white border border-white bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <PieChart width={400} height={300}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            label
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Chart;
