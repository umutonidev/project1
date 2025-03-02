// Overview.jsx
import React from 'react';
import '../styles/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faArrowUp, faArrowDown, faPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const doughnutData = {
        labels: ['Item01', 'Item02', 'Item03', 'Item04'],
        datasets: [
            {
                data: [30, 25, 20, 25],  // Example percentages
                backgroundColor: [
                    '#9cb4e7', //Light Blue
                    '#f9a825', //Orange
                    '#2e7d32', //Green
                    '#9cb4e7', //Light Blue
                ],
                borderWidth: 0, //Remove border
            },
        ],
    };

    const doughnutOptions = {
        cutout: '70%', //Makes it a doughnut chart
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide labels on the chart
            },
        },
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false
                }
            },
        },
        elements: {
            line: {
                tension: 0.4
            }
        }
    };

    const lineChartData = {
        labels: [], // Empty labels since x-axis is hidden
        datasets: [
            {
                data: [25, 30, 22, 35, 32, 40, 38, 45, 42, 50, 48, 55], // Example data
                borderColor: '#3498db',
                fill: false,
                borderWidth: 2
            },
        ],
    };

    const transactionData = [
        { id: 1, name: 'Apple Inc.', code: '#ABLE-PRO-T00232', amount: '$210,000', change: '10.6', type: 'up' },
        { id: 2, name: 'Spotify Music', code: '#ABLE-PRO-T10232', amount: '-10,000', change: '30.6', type: 'down' },
        { id: 3, name: 'Medium', time: '06:30 pm', amount: '-26', change: '5', type: 'same' },
        { id: 4, name: 'Uber', time: '08:40 pm', amount: '+210,000', change: '10.6', type: 'up' },
        { id: 5, name: 'Ola Cabs', time: '07:40 pm', amount: '+210,000', change: '10.6', type: 'up' },
    ];

    return (
        <div className="overview-container">
            {/* Project Overview Section */}
            <div className="project-overview">
                <div className="overview-header">
                    <div className="overview-title">Project overview</div>
                    <FontAwesomeIcon icon={faEllipsisVertical} className="overview-menu" />
                </div>
                <div className="overview-details">
                    <div className="overview-item">
                        <div className="item-title">Total Tasks</div>
                        <div className="item-value">34,688</div>
                        <div className="item-chart">
                            <Doughnut data={lineChartData} options={lineChartOptions} />
                        </div>
                    </div>
                    <div className="overview-item">
                        <div className="item-title">Pending Tasks</div>
                        <div className="item-value">3,786</div>
                        <div className="item-chart">
                            <Doughnut data={lineChartData} options={lineChartOptions} />
                        </div>
                    </div>
                </div>
                <button className="add-project-button">
                    <FontAwesomeIcon icon={faPlus} /> Add project
                </button>
            </div>
            <div className="able-pro-info">
                <div className="able-pro-header">
                    <div className="able-pro-title">Able pro</div>
                    <div className="able-pro-handle">@ableprodevelop</div>
                </div>
                <FontAwesomeIcon icon={faPlus} className="add-able-button" />
            </div>

            {/* Transactions Section */}
            <div className="transactions-section">
                <div className="transactions-header">
                    <div className="transactions-title">Transactions</div>
                    <FontAwesomeIcon icon={faEllipsisVertical} className="transactions-menu" />
                </div>
                <div className="transactions-tabs">
                    <button className="tab active">All Transaction</button>
                    <button className="tab">Success</button>
                    <button className="tab">Pending</button>
                </div>
                <div className="transactions-list">
                    {transactionData.map((transaction) => (
                        <div className="transaction-item" key={transaction.id}>
                            <div className="transaction-icon">{transaction.name.charAt(0)}</div>
                            <div className="transaction-details">
                                <div className="transaction-name">{transaction.name}</div>
                                <div className="transaction-code">{transaction.code || transaction.time}</div>
                            </div>
                            <div className="transaction-amount">
                                {transaction.amount}
                                <div className={`transaction-change ${transaction.type}`}>
                                    <FontAwesomeIcon icon={transaction.type === 'up' ? faArrowUp : transaction.type === 'down' ? faArrowDown : null} />
                                    {transaction.change}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="transactions-actions">
                    <button className="view-history-button">View all Transaction History</button>
                    <button className="create-transaction-button">Create new Transaction</button>
                </div>
            </div>

            {/* Total Income Section */}
            <div className="total-income-section">
                <div className="total-income-header">
                    <div className="total-income-title">Total Income</div>
                    <FontAwesomeIcon icon={faEllipsisVertical} className="total-income-menu" />
                </div>
                <div className="doughnut-chart-container">
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
                <div className="total-income-items">
                    <div className="total-income-item">
                        <span className="item-dot item-dot-1"></span>Item01 <span className="item-value">$23,876</span>
                    </div>
                    <div className="total-income-item">
                        <span className="item-dot item-dot-2"></span>Item02 <span className="item-value">$23,876</span>
                    </div>
                    <div className="total-income-item">
                        <span className="item-dot item-dot-3"></span>Item03 <span className="item-value">$23,876</span>
                    </div>
                    <div className="total-income-item">
                        <span className="item-dot item-dot-4"></span>Item04 <span className="item-value">$23,876</span>
                    </div>
                </div>
            </div>
            <button className="buy-now-float-button">
                <FontAwesomeIcon icon={faCartShopping} />
                Buy Now
            </button>
        </div>
    );
};

export default Dashboard;