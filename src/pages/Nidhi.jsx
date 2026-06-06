import { useEffect, useState } from "react";
import axios from "axios";

function Nidhi() {
    const [works, setWorks] = useState([]);
    const [summary, setSummary] = useState({
        totalFund: 0,
        usedFund: 0,
        remainingFund: 0,
        totalWorks: 0,
    });

    useEffect(() => {
        fetchNidhiData();
    }, []);

    const fetchNidhiData = async () => {
        try {
            const response = await axios.get("https://grampanchat-website-backend.onrender.com/api/nidhi");

            const data = response.data;
            setWorks(data);

            const totalFund = data.reduce((sum, item) => sum + Number(item.approvedFund || 0), 0);
            const usedFund = data.reduce((sum, item) => sum + Number(item.expense || 0), 0);

            setSummary({
                totalFund: totalFund,
                usedFund: usedFund,
                remainingFund: totalFund - usedFund,
                totalWorks: data.length,
            });
        } catch (error) {
            console.error("Nidhi data fetch error:", error);
        }
    };

    const formatMoney = (amount) => {
        return Number(amount).toLocaleString("en-IN");
    };

    const getStatusBadge = (status) => {
        if (status === "पूर्ण") {
            return <span className="badge bg-success">पूर्ण</span>;
        }

        if (status === "सुरू") {
            return <span className="badge bg-warning text-dark">सुरू</span>;
        }

        return <span className="badge bg-secondary">{status}</span>;
    };

    return (
        <div className="container py-5">
            <h1 className="text-center text-success fw-bold mb-4">
                ग्रामपंचायत निधी माहिती
            </h1>

            <p className="text-center fs-5 mb-5">
                ग्रामपंचायतीस प्राप्त निधी, खर्च झालेला निधी व विकास कामांची माहिती.
            </p>

            <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                    <div className="card shadow text-center p-4 h-100">
                        <h4>आलेला निधी</h4>
                        <h2 className="text-success">
                            ₹ {formatMoney(summary.totalFund)}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow text-center p-4 h-100">
                        <h4>खर्च झालेला निधी</h4>
                        <h2 className="text-danger">
                            ₹ {formatMoney(summary.usedFund)}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow text-center p-4 h-100">
                        <h4>शिल्लक निधी</h4>
                        <h2 className="text-primary">
                            ₹ {formatMoney(summary.remainingFund)}
                        </h2>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="card shadow text-center p-4 h-100">
                        <h4>विकास कामे</h4>
                        <h2 className="text-warning">
                            {summary.totalWorks}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="card shadow mt-5 p-4">
                <h3 className="text-primary mb-4">
                    विकास कामांची माहिती
                </h3>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center">
                        <thead className="table-success">
                            <tr>
                                <th>क्र.</th>
                                <th>कामाचे नाव</th>
                                <th>योजना</th>
                                <th>मंजूर निधी</th>
                                <th>खर्च</th>
                                <th>स्थिती</th>
                            </tr>
                        </thead>

                        <tbody>
                            {works.length > 0 ? (
                                works.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.workName}</td>
                                        <td>{item.schemeName}</td>
                                        <td>₹ {formatMoney(item.approvedFund)}</td>
                                        <td>₹ {formatMoney(item.expense)}</td>
                                        <td>{getStatusBadge(item.status)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-muted">
                                        निधी माहिती उपलब्ध नाही.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card shadow mt-5 p-4">
                <h3 className="text-primary mb-3">
                    eGramSwaraj Reports
                </h3>

                <p>
                    अधिकृत निधी व खर्च अहवाल पाहण्यासाठी eGramSwaraj portal वापरा.
                </p>

                <a
                    href="https://egramswaraj.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success"
                >
                    eGramSwaraj Portal Open
                </a>
            </div>
        </div>
    );
}

export default Nidhi;