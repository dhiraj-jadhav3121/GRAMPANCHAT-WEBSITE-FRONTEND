function PropertyTax() {
    return (
        <div className="container py-5">
            <div className="card shadow p-4">
                <h1 className="text-success fw-bold mb-3">
                    🧾 मालमत्ता कर भरणा
                </h1>

                <p>
                    येथे नागरिकांना मालमत्ता कर भरण्याची माहिती मिळेल.
                </p>

                <hr />

                <h4>आवश्यक माहिती</h4>

                <ul>
                    <li>मालमत्ता क्रमांक</li>
                    <li>मालकाचे नाव</li>
                    <li>मोबाईल नंबर</li>
                    <li>कर रक्कम</li>
                </ul>

                <button className="btn btn-success mt-3">
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default PropertyTax;