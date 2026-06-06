function Lokseva() {
    const services = [
        {
            title: "जन्म नोंदणी व प्रमाणपत्र",
            desc: "गावाच्या हद्दीत जन्म झाला असल्यास 21 दिवसांच्या आत जन्म नोंदणी केली जाते व प्रमाणपत्र दिले जाते.",
            docs: ["अर्ज", "आई-वडील यांचे आधारकार्ड", "आशा/अंगणवाडी कार्यकर्ती यांचा अहवाल"],
            fee: "पहिले प्रमाणपत्र मोफत त्यानंतर 20 रुपये",
            time: "7 दिवस",
        },
        {
            title: "मृत्यू नोंदणी व प्रमाणपत्र",
            desc: "गावाच्या हद्दीत मृत्यू झाला असल्यास 21 दिवसांच्या आत मृत्यू नोंदणी केली जाते व प्रमाणपत्र दिले जाते.",
            docs: ["अर्ज", "मयत व्यक्तीचे आधारकार्ड", "रुग्णालय/पोलीस स्टेशन कागदपत्रे"],
            fee: "20 रुपये",
            time: "7 दिवस",
        },
        {
            title: "विवाह नोंदणी",
            desc: "विवाह नोंदणी अधिनियम 1998 नुसार विवाह नोंदणी केली जाते.",
            docs: ["विवाहाचे ज्ञापन", "वर-वधूचे जन्म प्रमाणपत्र", "शाळा सोडल्याचा दाखला", "आधार/मतदार कार्ड"],
            fee: "20 रुपये",
            time: "7 दिवस",
        },
        {
            title: "दारिद्र्य रेषेखालील असल्याचा दाखला",
            desc: "दारिद्र्य रेषेखालील यादीत नाव असल्यास दाखला दिला जातो.",
            docs: ["अर्ज"],
            fee: "20 रुपये",
            time: "7 दिवस",
        },
        {
            title: "नमुना नं 8 चा उतारा",
            desc: "नमुना नंबर 8 मधील मालमत्तेचा उतारा दिला जातो.",
            docs: ["अर्ज"],
            fee: "20 रुपये",
            time: "5 दिवस",
        },
        {
            title: "थकबाकी नसल्याचे प्रमाणपत्र",
            desc: "ग्रामपंचायत करांची येणे बाकी नसल्यास प्रमाणपत्र दिले जाते.",
            docs: ["अर्ज"],
            fee: "20 रुपये",
            time: "—",
        },
    ];

    const processSteps = [
        {
            no: "1",
            title: "अर्ज सादर करा",
            desc: "विहीत नमुन्यात ग्रामपंचायत कार्यालयात अर्ज सादर करा.",
        },
        {
            no: "2",
            title: "अर्ज व कागदपत्रे पडताळणी",
            desc: "ग्रामपंचायत कार्यालयात प्राप्त अर्ज व कागदपत्रे यांची पडताळणी होईल.",
        },
        {
            no: "3",
            title: "प्रमाणपत्र वितरण",
            desc: "पात्र अर्जदारास विहीत कालमर्यादेत प्रमाणपत्र दिले जाईल.",
        },
    ];
    const downloads = [
        {
            title: "जन्म मृत्यू अनुपलब्धता अर्ज",
            file: "/forms/janm-mrityu.pdf",
        },
        {
            title: "लोकसेवा अर्ज",
            file: "/forms/lokseva-arj.pdf",
        },
        {
            title: "विवाहनोंदणी अर्ज",
            file: "/forms/vivah-nondani.pdf",
        },
    ];

    return (
        <div className="container-fluid py-5 px-4">
            <h1 className="text-center fw-bold mb-3" style={{ color: "#003b70" }}>
                उपलब्ध लोकसेवा
            </h1>

            <p className="text-center fs-5 mb-5" style={{ color: "#003b70" }}>
                सेवा हक्क अधिनियम अंतर्गत ग्रामपंचायतीकडून देण्यात येणाऱ्या सेवांची
                माहिती व अर्ज प्रक्रिया
            </p>

            <h2 className="fw-bold mb-4" style={{ color: "#003b70" }}>
                उपलब्ध लोकसेवा
            </h2>

            <div className="row g-4">
                {services.map((service, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div
                            className="card h-100 p-4"
                            style={{
                                border: "1px solid #a9c23f",
                                borderRadius: "10px",
                            }}
                        >
                            <h3 className="fw-bold mb-4" style={{ color: "#7b0000" }}>
                                {service.title}
                            </h3>

                            <p>{service.desc}</p>

                            <h5 className="fw-bold mt-4">आवश्यक कागदपत्रे:</h5>
                            <ul>
                                {service.docs.map((doc, i) => (
                                    <li key={i}>{doc}</li>
                                ))}
                            </ul>

                            <h5 className="fw-bold mt-3">प्रक्रिया :</h5>
                            <p>ग्रामपंचायत कार्यालयात अर्ज सादर करावा.</p>

                            <div className="d-flex justify-content-between mt-3">
                                <p>
                                    <b>शुल्क:</b> {service.fee}
                                </p>
                                <p>
                                    <b>वेळ:</b> {service.time}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* अर्ज प्रक्रिया */}
            <div className="mt-5 pt-4">
                <h2 className="fw-bold mb-4" style={{ color: "#003b70" }}>
                    अर्ज प्रक्रिया
                </h2>

                <div className="row g-4">
                    {processSteps.map((step, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="card p-4 h-100" style={{ borderRadius: "12px" }}>
                                <div className="d-flex align-items-center gap-4">
                                    <div
                                        className="text-white fw-bold d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                            background: "#092b63",
                                            borderRadius: "12px",
                                            fontSize: "22px",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {step.no}
                                    </div>

                                    <div>
                                        <h4 className="fw-bold mb-3">{step.title}</h4>
                                        <p className="mb-0">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* अर्ज नमुना डाउनलोड करा */}
            <div className="mt-5 pt-4">
                <h2 className="fw-bold mb-4" style={{ color: "#003b70" }}>
                    ↓ अर्ज नमुना डाउनलोड करा
                </h2>

                <div className="row g-4">
                    {downloads.map((item, index) => (
                        <div className="col-lg-4 col-md-4" key={index}>
                            <div
                                className="card p-4 text-center shadow-sm h-100"
                                style={{
                                    borderRadius: "15px",
                                    minHeight: "180px",
                                }}
                            >
                                <h4 className="fw-bold mb-4">
                                    {item.title}
                                </h4>

                                <a
                                    href={item.file}
                                    download
                                    className="btn text-white mx-auto"
                                    style={{
                                        background: "#08aa86",
                                        borderRadius: "30px",
                                        width: "300px",
                                        fontSize: "18px",
                                    }}
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lokseva;