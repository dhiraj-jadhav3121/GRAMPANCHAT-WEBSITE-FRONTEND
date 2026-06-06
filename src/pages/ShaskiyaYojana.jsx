function ShaskiyaYojana() {
    const schemes = [
        {
            title: "प्रधानमंत्री आवास योजना",
            info: "ही घरकुलाची केंद्र पुरस्कृत योजना असून ग्रामीण भागातील पात्र लाभार्थ्यांना घरकुलासाठी मदत दिली जाते.",
            eligibility: "लाभार्थी पात्र यादीत असावा.",
            docs: ["आधार कार्ड", "बँक पासबुक", "जागेची कागदपत्रे"],
            benefit: "घरकुल बांधकामासाठी आर्थिक सहाय्य",
            process: "लाभार्थ्यांची निवड शासनाच्या पात्र यादीप्रमाणे केली जाते.",
        },
        {
            title: "रमाई आवास योजना",
            info: "अनुसूचित जाती व नवबौद्ध घटकांतील पात्र कुटुंबांना घर उपलब्ध करून देण्यासाठी योजना.",
            eligibility: "लाभार्थी अनुसूचित जाती किंवा नवबौद्ध प्रवर्गातील असावा.",
            docs: ["जात प्रमाणपत्र", "उत्पन्न दाखला", "बँक पासबुक", "जागेची कागदपत्रे"],
            benefit: "घर बांधण्यासाठी आर्थिक सहाय्य",
            process: "ग्रामपंचायत व पंचायत समितीमार्फत पडताळणी केली जाते.",
        },
        {
            title: "पंडित दीनदयाळ उपाध्याय घरकुल जागा खरेदी अर्थसहाय्य योजना",
            info: "घरकुल पात्र लाभार्थ्यांना जागा नसल्यास जागा खरेदीसाठी अर्थसहाय्य दिले जाते.",
            eligibility: "घरकुलासाठी पात्र परंतु जागा उपलब्ध नसलेला लाभार्थी.",
            docs: ["आधार कार्ड", "बँक पासबुक", "जागा खरेदी कागदपत्रे"],
            benefit: "जागा खरेदीसाठी आर्थिक सहाय्य",
            process: "गट विकास अधिकारी व पंचायत समितीमार्फत प्रक्रिया होते.",
        },
    ];

    return (
        <div className="container-fluid py-5 px-4">
            <h1 className="text-center fw-bold" style={{ color: "#003b70" }}>
                शासकीय योजना
            </h1>

            <p className="text-center fs-5 mb-5" style={{ color: "#003b70" }}>
                ग्रामपंचायतीशी संबंधित महत्त्वाच्या शासकीय योजनांची माहिती
            </p>

            <h2 className="fw-bold mb-4" style={{ color: "#003b70" }}>
                🎗️ वैयक्तिक लाभाच्या योजना
            </h2>

            <div className="row g-4">
                {schemes.map((scheme, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div
                            className="card h-100 p-4"
                            style={{
                                borderRadius: "10px",
                                maxHeight: "520px",
                                overflowY: "auto",
                            }}
                        >
                            <h3 className="fw-bold mb-4" style={{ color: "#7b0000" }}>
                                {scheme.title}
                            </h3>

                            <p>
                                <b>थोडक्यात माहिती :</b> {scheme.info}
                            </p>

                            <p>
                                <b>लाभार्थी पात्रता :</b> {scheme.eligibility}
                            </p>

                            <h5 className="fw-bold">कागदपत्रे:</h5>
                            <ul>
                                {scheme.docs.map((doc, i) => (
                                    <li key={i}>{doc}</li>
                                ))}
                            </ul>

                            <div style={{ background: "#eee", padding: "15px" }}>
                                <h5 className="fw-bold">लाभाचे स्वरूप:</h5>
                                <p>{scheme.benefit}</p>
                            </div>

                            <p className="mt-3">
                                <b>निवड प्रक्रिया :</b> {scheme.process}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShaskiyaYojana;