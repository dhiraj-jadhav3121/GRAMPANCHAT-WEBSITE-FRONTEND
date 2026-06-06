import { Link } from "react-router-dom";

function Footer() {
    const importantLinks = [
        ["ग्रामविकास विभाग", "https://rdd.maharashtra.gov.in"],
        ["महाराष्ट्र शासन", "https://www.maharashtra.gov.in"],
        ["ई-ग्रामस्वराज", "https://egramswaraj.gov.in"],
        ["MGNREGA", "https://nrega.nic.in"],
        ["शासन निर्णय", "https://gr.maharashtra.gov.in"],
        ["माझी ग्रामपंचायत", "https://mahaegram.maharashtra.gov.in"],
    ];

    return (
        <footer style={{ background: "#05061b", color: "white", paddingTop: "60px" }}>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h2 className="fw-bold mb-4" style={{ color: "#d8a62b" }}>
                            Social Media
                        </h2>
                        <p style={{ fontSize: "28px" }}></p>
                        <p>ग्रामपंचायत कार्यालयाची अधिकृत समाज माध्यमे</p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h2 className="fw-bold mb-4" style={{ color: "#d8a62b" }}>
                            महत्त्वाची संकेतस्थळे
                        </h2>

                        <ul className="list-unstyled">
                            {importantLinks.map((item, index) => (
                                <li className="mb-2" key={index}>
                                    <a
                                        href={item[1]}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: "white", textDecoration: "none" }}
                                    >
                                        • {item[0]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h2 className="fw-bold mb-4" style={{ color: "#d8a62b" }}>
                            महत्त्वाची पाने
                        </h2>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/Home" style={{ color: "white", textDecoration: "none" }}>
                                    • मुख्यपृष्ठ
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link to="/About" style={{ color: "white", textDecoration: "none" }}>
                                    • ग्रामपंचायतीबद्दल
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link to="/Lokseva" style={{ color: "white", textDecoration: "none" }}>
                                    • लोकसेवा
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/shaskiya-yojana"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    • योजना
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/Rojgar"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    • रोजगार
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/Contact"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    •  संपर्क
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4">
                        <h2 className="fw-bold mb-4" style={{ color: "#d8a62b" }}>
                            संपर्क माहिती
                        </h2>

                        <p>📍 ग्रामपंचायत कार्यालय <br />जांभरून तांडा <br />हिंगोली</p>
                        <p>📞 9130895932</p>
                        <p>✉️ gpjambharun@gmail.com</p>
                        <p>🕒 सोमवार - शुक्रवार <br />सकाळ 09:45 - संध्याकाळ 06:15</p>
                    </div>
                </div>

                <hr style={{ borderColor: "#444" }} />

                <div className="text-center py-3">
                    <h5 className="mb-0 text-center">
                        © २०२५ ग्रामपंचायत जांभरून तांडा | सर्व हक्क राखीव <br />
                        संकेतस्थळाची निर्मिती, विकास व देखभाल :
                        <span style={{ color: "#d8a62b", fontWeight: "700" }}>
                            {" "}धिरज जाधव
                        </span>
                    </h5>
                </div>
            </div>
        </footer>
    );
}

export default Footer;