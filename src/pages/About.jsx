import Sarpanch from "../assets/images/Sarpanch.jpg";
import UpSarpanch from "../assets/images/UpSarpanch.jpg";
import Gramsevak from "../assets/images/Gramsevak.jpg";
import PolicePatil from "../assets/images/PolicePatil.jpg";

function About() {
    const electedMembers = [
        {
            name: "रिक्त ",
            post: "सरपंच",
            ward: "वार्ड क्र.: #",
            phone: "**********",
            date: "निवड: #######",
            image: Sarpanch,
        },
        {
            name: "रिक्त ",
            post: "उपसरपंच",
            ward: "वार्ड क्र.: #",
            phone: "**********",
            date: "निवड: #######",
            image: UpSarpanch,
        },
        // {
        //     name: "श्री निकलेस रामराव पवार",
        //     post: "पोलीस पाटील",
        //     ward: "वार्ड क्र.: 1",
        //     phone: "**********",
        //     date: "निवड: 08-01-2024",
        //     image: PolicePatil,
        // },
    ];

    const employees = [
        {
            name: "जीवन राठोड",
            post: "ग्रामसेवक",
            phone: "**********",
            date: "नियुक्ती : ######",
            image: Gramsevak,
        },
        {
            name: "श्री निकलेस रामराव पवार",
            post: "पोलीस पाटील",
            phone: "9130895932",
            date: "नियुक्ती : #######",
            image: PolicePatil,
        },
        {
            name: "********",
            post: "अंगणवाडी सेविका ",
            phone: "###########",
            date: "नियुक्ती : #######",
            image: Gramsevak,
        },
        {
            name: "अनिल चव्हाण ",
            post: "संगणक ऑपरेटर",
            phone: "#########",
            date: "नियुक्ती : #######",
            image: Gramsevak,
        },
        // {
        //     name: "श्री निकलेस रामराव पवार",
        //     post: "पोलीस पाटील",
        //     phone: "9130895932",
        //     date: "नियुक्ती : #######",
        //     image: Gramsevak,
        // },
    ];

    const facilities = [
        "सार्वजनिक पाणीपुरवठा विहीर संख्या : 03",
        "सार्वजनिक बोअरवेल हातपंप संख्या : 03",
        "पाण्याच्या टाक्यांची संख्या : 03",
        "सार्वजनिक शौचालय संख्या : 01",
        "सार्वजनिक कचराकुड्या संख्या : 20",
        "घनकचरा व्यवस्थापन प्रकल्प संख्या : 01",
        "रस्त्यावरील पथदिवे संख्या : 17",
        "प्राथमिक शाळांची संख्या : 02",
        "अंगणवाडी संख्या : 03",
        "सार्वजनिक इमारतींची संख्या : 06",
        "गावात बस येते का? : होय",
        "गावात बँक आहे का? : नाही",
        "वाचनालय आहे का? : होय",
        "खेळाचे मैदान आहे का? : होय",
    ];

    return (
        <div className="container py-5">
            <h1 className="fw-bold text-center mb-3" style={{ color: "#003b70" }}>
                ग्रामपंचायतीबद्दल
            </h1>

            <p className="text-center fs-5 mb-4">
                आम्ही आपल्या गावाचा शाश्वत व समृद्ध विकास करण्यासाठी कटिबद्ध आहोत.
            </p>

            {/* <div className="text-center mb-5">
                <button className="btn btn-primary mx-2 mb-2">सर्व माहिती</button>
                <button className="btn btn-outline-primary mx-2 mb-2">पदाधिकारी</button>
                <button className="btn btn-outline-primary mx-2 mb-2">कर्मचारी</button>
                <button className="btn btn-outline-primary mx-2 mb-2">
                    ग्रामपंचायत समित्या
                </button>
                <button className="btn btn-outline-primary mx-2 mb-2">
                    ग्राम पायाभूत सुविधा
                </button>
            </div> */}

            <div className="card shadow-sm p-4 mb-5">
                <h2 className="text-success mb-4">ग्रामपंचायत माहिती</h2>

                <div className="row">
                    <div className="col-md-6">
                        <h4 className="fw-bold mb-3">प्राथमिक माहिती</h4>
                        <p><b>ग्रामपंचायतीचे नाव :</b> जांभरून अंधवाडी तांडा</p>
                        <p><b>अंतर्गत गावाची नावे :</b> जांभरून अंधवाडी तांडा</p>
                        <p><b>तालुका :</b> हिंगोली</p>
                        <p><b>जिल्हा :</b> हिंगोली</p>
                        <p><b>ग्रामपंचायत स्थापना दिनांक :</b> 01-05-1959</p>
                        <p><b>एकूण प्रभाग संख्या :</b> 3</p>
                        <p><b>एकूण क्षेत्रफळ :</b> 1524</p>
                    </div>

                    <div className="col-md-6">
                        <h4 className="fw-bold mb-3">लोकसंख्या माहिती</h4>
                        <p><b>एकूण लोकसंख्या :</b> 1500+</p>
                        <p><b>एकूण कुटुंबे :</b> 300+</p>
                        <p><b>पुरुष :</b>-</p>
                        <p><b>महिला :</b>-</p>
                        <p><b>साक्षरता दर :</b> 80</p>
                        <p><b>पिन कोड :</b> 431513</p>
                        <p><b>LGD कोड :</b> -</p>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm p-4 mb-5">
                <h2 className="text-success mb-3">दृष्टिकोन व ध्येय</h2>
                <ul>
                    <li>गावातील सर्व नागरिकांना उच्च दर्जाच्या भौतिक व प्रशासकीय सेवा प्रदान करणे.</li>
                    <li>गावाचा शाश्वत विकास घडवून निसर्गसंपन्न, समृद्ध परिसर निर्माण करणे.</li>
                    <li>शासनाच्या योजना समाजाच्या प्रत्येक घटकांपर्यंत पोहचवणे.</li>
                    <li>भेदभावमुक्त, सशक्त आणि सुरक्षित गाव निर्माण करणे.</li>
                </ul>
            </div>

            <div className="card shadow-sm p-4 mb-5">
                <h2 className="text-success mb-3">मूलभूत मूल्ये</h2>
                <ul>
                    <li>सर्व नागरिकांना समान हक्क या न्यायाने सेवा प्रदान करणे.</li>
                    <li>समाजातील सर्व घटकांचे कल्याण साधणे.</li>
                    <li>पर्यावरण संवर्धन व संरक्षण.</li>
                    <li>सर्वधर्मसमभाव, महिलास्नेही, बालस्नेही ग्राम निर्मिती.</li>
                </ul>
            </div>

            <h2 className="fw-bold mb-4" style={{ color: "#003b70" }}>
                निवडून आलेले पदाधिकारी
            </h2>

            <div className="row g-4 mb-5">
                {electedMembers.map((member, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card h-100 p-4 text-center shadow-sm">
                            <img
                                src={member.image}
                                alt={member.post}
                                className="mx-auto mb-3"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "4px solid #198754",
                                }}
                            />

                            <h5 className="fw-bold">{member.name}</h5>
                            <span className="badge bg-success mb-2">{member.post}</span>
                            <p className="mb-1">{member.ward}</p>
                            <p className="mb-1">📞 {member.phone}</p>
                            <p className="mb-0">🗂️ {member.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="fw-bold mb-4" style={{ color: "#003b70" }}>
                कर्मचारी माहिती
            </h2>

            <div className="row g-4 mb-5">
                {employees.map((emp, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card h-100 p-4 text-center shadow-sm">
                            <img
                                src={emp.image}
                                alt={emp.post}
                                className="mx-auto mb-3"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "4px solid #0d6efd",
                                }}
                            />

                            <h5 className="fw-bold">{emp.name}</h5>
                            <span className="badge bg-primary mb-2">{emp.post}</span>
                            <p className="mb-1">📞 {emp.phone}</p>
                            <p className="mb-0">🗂️ {emp.date}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card shadow-sm p-4 mb-5">
                <h2 className="text-success mb-3">ग्रामपंचायत समित्या</h2>

                <h5 className="fw-bold">1) मुख्यमंत्री समृद्ध पंचायत राज अभियान समिती</h5>
                <ul>
                    <li>सरपंच - अध्यक्ष</li>
                    <li>उपसरपंच - सदस्य</li>
                    <li>ग्रामपंचायत सदस्य - सदस्य</li>
                    <li>ग्रामसेवक - सदस्य सचिव</li>
                </ul>

                <h5 className="fw-bold">2) आदिशक्ती अभियान समिती</h5>
                <ul>
                    <li>ग्राम सदस्य - अध्यक्ष</li>
                    <li>सरपंच - सदस्य</li>
                    <li>उपसरपंच - सदस्य</li>
                    <li>ग्रामसेवक - सदस्य सचिव</li>
                </ul>

                <h5 className="fw-bold">3) ग्राम आरोग्य पोषण पाणीपुरवठा व स्वच्छता समिती</h5>
                <ul>
                    <li>ग्राम सदस्य - अध्यक्ष</li>
                    <li>सरपंच - सदस्य</li>
                    <li>ग्रामसेवक - सदस्य सचिव</li>
                </ul>

                <h5 className="fw-bold">4) ग्राम बाल संरक्षण समिती</h5>
                <p>ग्राम बाल संरक्षणासाठी स्थानिक पातळीवर समिती कार्यरत आहे.</p>
            </div>

            <div className="card shadow-sm p-4">
                <h2 className="text-success mb-3">ग्राम पायाभूत सुविधा</h2>

                <div className="row">
                    {facilities.map((item, index) => (
                        <div className="col-md-6 mb-2" key={index}>
                            ✅ {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;