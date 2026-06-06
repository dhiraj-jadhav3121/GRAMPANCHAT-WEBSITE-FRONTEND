import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import heroImage from "../assets/images/ProfilePhoto.jpeg";
import Sarpanch from "../assets/images/Sarpanch.jpg";
import UpSarpanch from "../assets/images/UpSarpanch.jpg";
import Gramsevak from "../assets/images/Gramsevak.jpg";
import PolicePatil from "../assets/images/PolicePatil.jpg";

function Home() {
    const [notices, setNotices] = useState([]);
    const [gallery, setGallery] = useState([]);

    const API_BASE = "http://localhost:8083";

    useEffect(() => {
        loadNotices();
        loadGallery();
    }, []);

    const loadNotices = async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/notices`);
            setNotices(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadGallery = async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/gallery`);
            setGallery(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getImageUrl = (imageUrl) => {
        if (!imageUrl) return "";

        if (imageUrl.startsWith("http")) {
            return imageUrl;
        }

        if (imageUrl.startsWith("/")) {
            return `${API_BASE}${imageUrl}`;
        }

        return `${API_BASE}/${imageUrl}`;
    };

    useEffect(() => {
        if (gallery.length > 1) {
            const interval = setInterval(() => {
                const carousel = document.querySelector("#galleryCarousel");
                const nextButton = carousel?.querySelector(".carousel-control-next");

                if (nextButton) {
                    nextButton.click();
                }
            }, 2500);

            return () => clearInterval(interval);
        }
    }, [gallery]);

    return (
        <>
            {/* Hero Section */}
            <div
                className="text-white text-center d-flex align-items-center hero-section"
                style={{
                    minHeight: "500px",
                    background: `linear-gradient(
                        rgba(0,0,0,0.10),
                        rgba(0,0,0,0.10)
                    ), url(${heroImage}) center/cover no-repeat`,
                }}
            >
                <div
                    className="container-fluid p-0"
                    style={{ marginTop: "350px" }}
                >
                    <Link to="/about">
                        <button className="btn btn-warning btn-lg shadow">
                            अधिक माहिती
                        </button>
                    </Link>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mt-5">
                <div className="card shadow border-0 p-4">
                    <h2 className="text-success fw-bold">
                        ग्रामपंचायत परिचय
                    </h2>

                    <p>
                        ग्रामपंचायत जांभरून तांडा ही गावाच्या विकासासाठी कार्यरत असलेली
                        स्थानिक स्वराज्य संस्था आहे. नागरिकांना मूलभूत सुविधा,
                        पाणीपुरवठा, स्वच्छता, शिक्षण व विविध शासकीय योजना उपलब्ध करून
                        देणे हे आमचे उद्दिष्ट आहे.
                    </p>
                </div>
            </div>

            {/* Statistics */}
            <div className="container mt-5">
                <h2 className="text-center text-success fw-bold mb-4">
                    गावाची आकडेवारी
                </h2>

                <div className="row text-center">
                    {[
                        ["1500+", "लोकसंख्या"],
                        ["300+", "घरे"],
                        ["900+", "मतदार"],
                        ["400+", "शेतकरी"],
                    ].map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-6 mb-3" key={index}>
                            <div className="card shadow p-4 h-100">
                                <h3 className="fw-bold text-success">
                                    {item[0]}
                                </h3>
                                <p className="mb-0">{item[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lokseva + Notice Board + Yojana */}
            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-12">
                        <h2 className="fw-bold mb-4" style={{ color: "#003b70" }}>
                            लोकसेवा
                        </h2>

                        <div className="row g-4">
                            {[
                                ["📄", "जन्म प्रमाणपत्र", "जन्म नोंदणी व प्रमाणपत्र सेवा उपलब्ध आहे."],
                                ["📄", "मृत्यू प्रमाणपत्र", "मृत्यू नोंदणी व प्रमाणपत्र सेवा उपलब्ध आहे."],
                                ["👥", "विवाह नोंदणी", "विवाह नोंदणी सेवा उपलब्ध आहे."],
                                ["₹", "थकबाकी नसल्याचे प्रमाणपत्र", "कर बाकी नसल्यास प्रमाणपत्र दिले जाते."],
                            ].map((service, index) => (
                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                    <div className="card p-4 h-100 shadow-sm">
                                        <div className="d-flex gap-3 service-box">
                                            <div className="service-icon">
                                                {service[0]}
                                            </div>

                                            <div>
                                                <h4 className="fw-bold">
                                                    {service[1]}
                                                </h4>
                                                <p className="mb-0">
                                                    {service[2]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-4">
                            <Link to="/lokseva">
                                <button className="btn btn-primary px-5">
                                    सर्व पहा
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="card shadow-sm p-4 mb-4">
                            <h3 className="text-center text-primary fw-bold">
                                🔔 सूचना फलक
                            </h3>

                            <div
                                className="mt-3"
                                style={{
                                    height: "220px",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                {notices.length > 0 ? (
                                    <marquee
                                        direction="up"
                                        scrollamount="3"
                                        onMouseOver={(e) => e.currentTarget.stop()}
                                        onMouseOut={(e) => e.currentTarget.start()}
                                        style={{ height: "220px" }}
                                    >
                                        {notices.map((notice) => (
                                            <div
                                                key={notice.id}
                                                className="border-bottom pb-3 mb-3"
                                            >
                                                <h6 className="fw-bold text-danger mb-1">
                                                    🔔 {notice.title}
                                                </h6>

                                                <p className="mb-1 small">
                                                    {notice.description}
                                                </p>

                                                <small className="text-muted">
                                                    📅 {notice.date}
                                                </small>
                                            </div>
                                        ))}
                                    </marquee>
                                ) : (
                                    <p className="text-center mt-3 mb-0">
                                        कोणतीही सूचना उपलब्ध नाही
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="card shadow-sm p-4">
                            <h3 className="text-center text-primary fw-bold">
                                शासकीय योजना
                            </h3>

                            <p className="text-center mt-3">
                                वैयक्तिक लाभाच्या योजना <br />
                                सार्वजनिक विकासाच्या योजना
                            </p>

                            <div className="text-center">
                                <Link to="/shaskiya-yojana">
                                    <button className="btn btn-outline-primary">
                                        सर्व पहा
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            {/* Gallery + Officers */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12 mb-5">
                        <h2
                            className="fw-bold mb-4 text-center"
                            style={{ color: "#1a6b5e" }}
                        >
                            📸 फोटो गॅलरी
                        </h2>

                        <div
                            id="galleryCarousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                            data-bs-interval="2500"
                            data-bs-pause="false"
                        >
                            <div className="carousel-inner rounded shadow">
                                {gallery.length > 0 ? (
                                    gallery.map((photo, index) => (
                                        <div
                                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                                            key={photo.id}
                                        >
                                            <img
                                                src={getImageUrl(photo.imageUrl)}
                                                className="d-block w-100"
                                                alt={`Gallery ${index + 1}`}
                                                style={{
                                                    height: "450px",
                                                    objectFit: "cover",
                                                    borderRadius: "10px",
                                                }}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="carousel-item active">
                                        <div
                                            className="d-flex justify-content-center align-items-center bg-light"
                                            style={{
                                                height: "300px",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <h4 className="text-muted">
                                                No Gallery Photos
                                            </h4>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {gallery.length > 1 && (
                                <>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#galleryCarousel"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon"></span>
                                    </button>

                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#galleryCarousel"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon"></span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Officers Horizontal */}
                <div className="mt-4">
                    <h2
                        className="fw-bold mb-4 text-center"
                        style={{ color: "#1a6b5e" }}
                    >
                        👤 पदाधिकारी आणि कर्मचारी
                    </h2>

                    <div className="row g-4">
                        {[
                            ["रिक्त ", "सरपंच", Sarpanch],
                            ["रिक्त ", "उपसरपंच", UpSarpanch],
                            ["जीवन राठोड", "ग्रामसेवक", Gramsevak],
                            ["श्री निकलेस रामराव पवार", "पोलीस पाटील", PolicePatil],
                        ].map((person, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div className="card h-100 shadow-sm text-center p-4">
                                    <img
                                        src={person[2]}
                                        alt={person[1]}
                                        className="mx-auto mb-3"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: "3px solid #198754",
                                        }}
                                    />

                                    <h5 className="fw-bold mb-2">
                                        {person[0]}
                                    </h5>

                                    <span className="badge bg-success mx-auto mb-2">
                                        {person[1]}
                                    </span>

                                    <p className="mb-0 small">
                                        📞 **********
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <br />
            </div>
        </>
    );
}

export default Home;