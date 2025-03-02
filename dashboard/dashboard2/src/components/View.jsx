// Dashboard.jsx
import React from 'react';
import Dashboard from './Dashboard';
import '../styles/View.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical, faArrowUp, faWallet, faFileLines, faCheckToSlot, faDownload
} from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const View= () => {
    // Data for the Line Chart
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Repeat customer rate',
                data: [30, 55, 45, 52, 70, 85, 60, 55, 50, 62, 55, 70],
                borderColor: '#3498db',
                tension: 0.4,
                fill: false,
            },
        ],
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
            },
            y: {
                grid: {
                    display: true,
                },
            },
        },
    };

    const barChartData = {
        labels: [''],
        datasets: [
            {
                data: [30, 55, 45, 52, 70, 85, 60, 55, 50, 62, 55, 70],
                backgroundColor: '#3498db',
            },
        ],
    };

    const barChartOptions = {
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
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="dashboard">
            {/* Header Section */}
            <div className="header-section">
                <div className="header-content">
                    <h1>Explore Redesigned Able Pro</h1>
                    <p>The Brand new User Interface with power of Bootstrap Components. Explore the Endless possibilities with Able Pro.</p>
                    <button className="exclusive-button">Exclusive on Themeforest</button>
                </div>
                <div className="header-rocket">
                    <img src="https://ableproadmin.com/tailwind/assets/images/widget/welcome-banner.png" alt="Rocket" />
                </div>
            </div>

            {/* Cards Section */}
            <div className="cards-section">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <FontAwesomeIcon icon={faWallet} className="card-icon" />
                            All Earnings
                        </div>
                        <FontAwesomeIcon icon={faEllipsisVertical} className="card-menu" />
                    </div>
                    <div className="card-body">
                        <div className="card-chart">
                            <Bar data={barChartData} options={barChartOptions} />
                        </div>
                        <div className="card-footer">
                            <div className="card-value">$30200</div>
                            <div className="card-percentage">
                                <FontAwesomeIcon icon={faArrowUp} className="percentage-icon" />
                                30.6%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <FontAwesomeIcon icon={faFileLines} className="card-icon" />
                            Page Views
                        </div>
                        <FontAwesomeIcon icon={faEllipsisVertical} className="card-menu" />
                    </div>
                    <div className="card-body">
                        <div className="card-chart">
                            <Bar data={barChartData} options={barChartOptions} />
                        </div>
                        <div className="card-footer">
                            <div className="card-value">290+</div>
                            <div className="card-percentage">
                                <FontAwesomeIcon icon={faArrowUp} className="percentage-icon" />
                                30.6%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <FontAwesomeIcon icon={faCheckToSlot} className="card-icon" />
                            Total Task
                        </div>
                        <FontAwesomeIcon icon={faEllipsisVertical} className="card-menu" />
                    </div>
                    <div className="card-body">
                        <div className="card-chart">
                            <Bar data={barChartData} options={barChartOptions} />
                        </div>
                        <div className="card-footer">
                            <div className="card-value">14568</div>
                            <div className="card-percentage">
                                <FontAwesomeIcon icon={faArrowUp} className="percentage-icon" />
                                30.6%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <FontAwesomeIcon icon={faDownload} className="card-icon" />
                            Download
                        </div>
                        <FontAwesomeIcon icon={faEllipsisVertical} className="card-menu" />
                    </div>
                    <div className="card-body">
                        <div className="card-chart">
                            <Bar data={barChartData} options={barChartOptions} />
                        </div>
                        <div className="card-footer">
                            <div className="card-value">$30200</div>
                            <div className="card-percentage">
                                <FontAwesomeIcon icon={faArrowUp} className="percentage-icon" />
                                30.6%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Repeat Customer Rate Section */}
            <div className="repeat-customer-section">
                <div className="repeat-customer-header">
                    <div className="repeat-customer-title">Repeat customer rate</div>
                    <div className="repeat-customer-percentage">
                        5.44%
                        <span className="positive-change"> +2.6%</span>
                    </div>
                </div>
                <div className="repeat-customer-chart">
                    <Line data={lineChartData} options={lineChartOptions} />
                </div>
            </div>

            {/* Project Section */}
            <div className="project-section">
                <div className="project-title">Project - Able Pro</div>
                <div className="project-release">
                    Release v1.2.0 <span className="project-progress">70%</span>
                </div>
                <div className="project-progress-bar">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                </div>
                <div className="project-tasks">
                    <div className="task">
                        <span className="task-dot horizontal"></span> Horizontal Layout <span className="task-count">2</span>
                    </div>
                    <div className="task">
                        <span className="task-dot invoice"></span> Invoice Generator
                    </div>
                    <div className="task">
                        <span className="task-dot figma"></span> Figma Auto Layout
                    </div>
                </div>
                <button className="add-task-button">+ Add task</button>
            </div> <Dashboard/>
        </div>
       
    );
};

export default View;