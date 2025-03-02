import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine, faChartPie, faDatabase, faChartSimple,
    faGraduationCap, faUser, faHeadset, faFileInvoiceDollar,
    faCube, faFlag, faMousePointer, faChevronRight
} from '@fortawesome/free-solid-svg-icons';
// NO CSS HERE - it belongs in Sidebar.css
// NO Dashsidebar import OR component used here

const Sidebar = () => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleDashboardClick = () => {
        setIsOverlayVisible(!isOverlayVisible); // Toggle visibility
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    Able
                </div>
                <div className="version">
                    v1.1.0
                </div>
            </div>

            <div className="user-profile">
                <div className="user-info">
                    <img src="https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg" alt="User Avatar" className="user-avatar" />
                    <div className="user-details">
                        <div className="user-name">Jonh Smith</div>
                        <div className="user-role">Administrator</div>
                    </div>
                </div>
                <div className="menu-button">
                    ☰
                </div>
            </div>

            <div className="sidebar-navigation">
                <div className="navigation-heading">
                    NAVIGATION
                </div>

                <ul className="nav-list">
                    <li className={`nav-item ${isOverlayVisible ? 'overlay-active' : ''}`} onClick={handleDashboardClick}>
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
                            Dashboard
                            <span className="badge">2</span>
                            <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                        </a>
                        {isOverlayVisible && (
                            <ul className="overlay-list">
                                <li>Default</li>
                                <li>Analytics</li>
                                <li>Finance</li>
                                <li>Layout</li>
                            </ul>
                        )}
                    </li>
                   
                </ul>
            </div>

            <div className="sidebar-widget">
                <div className="navigation-heading">
                    WIDGET
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faChartPie} className="nav-icon" />
                            Statistics
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faDatabase} className="nav-icon" />
                            Data
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faChartSimple} className="nav-icon" />
                            Chart
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-admin-panel">
                <div className="navigation-heading">
                    ADMIN PANEL
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faGraduationCap} className="nav-icon" />
                            Online Courses
                            <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faUser} className="nav-icon" />
                            Membership
                            <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faHeadset} className="nav-icon" />
                            Helpdesk
                            <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="nav-icon" />
                            Invoice
                            <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-ui-components">
                <div className="navigation-heading">
                    UI COMPONENTS
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faCube} className="nav-icon" />
                            Components
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faFlag} className="nav-icon" />
                            Animation
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faMousePointer} className="nav-icon" />
                            Icons
                            <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;