import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/gp-logo.png";

function Navbar() {
    const [showBillMenu, setShowBillMenu] = useState(false);
    const billMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                billMenuRef.current &&
                !billMenuRef.current.contains(event.target)
            ) {
                setShowBillMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow py-1">

            <div className="container-fluid px-3">

                {/* Logo */}
                <Link
                    className="navbar-brand d-flex align-items-center"
                    to="/"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
                            marginRight: "10px",
                        }}
                    />

                    <div className="d-flex flex-column">
                        <span
                            className="fw-bold text-white"
                            style={{
                                fontSize: "1.5rem",
                                lineHeight: "1",
                            }}
                        >
                            ग्रामपंचायत
                        </span>

                        <span
                            className="fw-bold text-white"
                            style={{
                                fontSize: "1.5rem",
                                lineHeight: "1",
                            }}
                        >
                            जांभरून तांडा
                        </span>
                    </div>
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu"
                >
                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                मुख्यपृष्ठ
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                परिचय
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/lokseva">
                                लोकसेवा
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/shaskiya-yojana"
                            >
                                योजना
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/rojgar">
                                रोजगार
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/nidhi">
                                निधी
                            </Link>
                        </li>

                        {/* Bill Payment */}
                        <li className="nav-item position-relative" ref={billMenuRef}>
                            <button
                                type="button"
                                className="nav-link border-0 bg-transparent"
                                onClick={() => setShowBillMenu(!showBillMenu)}
                            >
                                बिल भरणा ▼
                            </button>

                            {showBillMenu && (
                                <div
                                    className="bg-white shadow-lg p-2"
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: "0",
                                        minWidth: "250px",
                                        borderRadius: "12px",
                                        zIndex: 9999,
                                    }}
                                >
                                    <a className="dropdown-item rounded-3 py-2" href="https://wss.mahadiscom.in/wss/wss" target="_blank" rel="noreferrer">
                                        ⚡ वीज बिल
                                    </a>

                                    <a className="dropdown-item rounded-3 py-2" href="https://aaplesarkar.mahaonline.gov.in" target="_blank" rel="noreferrer">
                                        🚰 नळ पट्टी
                                    </a>

                                    <a className="dropdown-item rounded-3 py-2" href="https://maharashtra.gov.in" target="_blank" rel="noreferrer">
                                        🏠 घर पट्टी
                                    </a>

                                    <a className="dropdown-item rounded-3 py-2" href="https://maharashtra.gov.in" target="_blank" rel="noreferrer">
                                        🧾 मालमत्ता कर
                                    </a>
                                </div>
                            )}
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                संपर्क
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                लॉगिन
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;