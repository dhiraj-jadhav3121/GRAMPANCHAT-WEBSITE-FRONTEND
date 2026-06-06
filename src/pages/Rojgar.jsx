function Rojgar() {
    const jobs = [
        {
            title: "Computer Operator",
            company: "ग्रामपंचायत / CSC Center",
            location: "जांभरून अंधवाडी तांडा, हिंगोली",
            salary: "₹8,000 - ₹12,000",
            lastDate: "---",
            apply: "ग्रामपंचायत कार्यालयात संपर्क करा",
        },
        {
            title: "Data Entry Operator",
            company: "Private Office",
            location: "हिंगोली",
            salary: "₹10,000 - ₹15,000",
            lastDate: "---",
            apply: "सरपंच / ग्रामसेवक कडे Resume जमा करा",
        },
        {
            title: "शेतमजूर / Farm Worker",
            company: "स्थानिक शेतकरी",
            location: "गाव परिसर",
            salary: "दिवसाप्रमाणे",
            lastDate: "----",
            apply: "सरपंच / ग्रामसेवक यांच्याशी संपर्क करा",
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center fw-bold text-success mb-3">
                🏢 रोजगार संधी
            </h1>

            <p className="text-center fs-5 mb-5">
                गावातील युवक व नागरिकांसाठी उपलब्ध रोजगार / नोकरी संधी.
            </p>

            <div className="row g-4">
                {jobs.map((job, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card h-100 shadow p-4">
                            <h3 className="fw-bold text-primary">
                                {job.title}
                            </h3>

                            <p><b>संस्था:</b> {job.company}</p>
                            <p><b>ठिकाण:</b> {job.location}</p>
                            <p><b>पगार:</b> {job.salary}</p>
                            <p><b>शेवटची तारीख:</b> {job.lastDate}</p>

                            <div className="alert alert-success">
                                <b>Apply:</b> {job.apply}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rojgar;