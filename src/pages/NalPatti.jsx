function NalPatti() {
    return (
        <div className="container py-5">
            <div className="card shadow p-4">
                <h1 className="text-success fw-bold mb-3">
                    🚰 नळ पट्टी भरणा
                </h1>

                <p>
                    येथे नागरिकांना ग्रामपंचायत नळ पट्टी / पाणी बिल भरण्याची माहिती
                    मिळेल.
                </p>

                <hr />

                <h4>भरणा माहिती</h4>

                <ul>
                    <li>नाव</li>
                    <li>घर क्रमांक</li>
                    <li>मोबाईल नंबर</li>
                    <li>बिल रक्कम</li>
                </ul>

                <button className="btn btn-success mt-3">
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default NalPatti;