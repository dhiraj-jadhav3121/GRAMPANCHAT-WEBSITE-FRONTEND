function OtherPayment() {
    return (
        <div className="container py-5">
            <div className="card shadow p-4">
                <h1 className="text-success fw-bold mb-3">
                    💰 इतर देयके
                </h1>

                <p>
                    येथे नागरिकांना इतर ग्रामपंचायत शुल्क / देयके भरण्याची माहिती
                    मिळेल.
                </p>

                <hr />

                <h4>इतर शुल्क</h4>

                <ul>
                    <li>प्रमाणपत्र शुल्क</li>
                    <li>दाखला शुल्क</li>
                    <li>परवानगी शुल्क</li>
                    <li>इतर ग्रामपंचायत शुल्क</li>
                </ul>

                <button className="btn btn-success mt-3">
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default OtherPayment;