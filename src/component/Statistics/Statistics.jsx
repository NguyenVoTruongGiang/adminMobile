import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Statistics.css';

const StatisticsPage = () => {
  const [selectedRange, setSelectedRange] = useState("7 days");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    setDropdownVisible(false); // Hide dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Data for the chart
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [200, 450, 300, 600, 700, 500, 400], 
        fill: false,
        borderColor: 'rgba(34, 139, 230, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top', // Use one of the allowed values
      },
    },
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header-container">
          <div>
            <h2 className="header-text">32.4k</h2>
            <p className="sub-header-text">Users this week</p>
          </div>
          <div className="percentage-container">
            <p className="percentage-text">12%</p>
            <div className="percentage-icon">
              <div className="percentage-icon-text">↑</div>
            </div>
          </div>
        </div>
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
        <div className="footer-container">
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
              {selectedRange} ▼
            </button>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <button onClick={() => handleRangeChange("1 day")}>1 day</button>
                <button onClick={() => handleRangeChange("7 days")}>7 days</button>
                <button onClick={() => handleRangeChange("1 month")}>1 month</button>
              </div>
            )}
          </div>
          <button className="report-button">
            Users Report →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;