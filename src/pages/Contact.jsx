import { useState } from "react";
import axios from "axios";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                "https://grampanchat-website-backend.onrender.com/api/contact",
                formData
            );

            console.log(response.data);

            alert("संदेश यशस्वीरित्या पाठवला!");

            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            alert("डेटा सेव्ह झाला नाही!");
        }
    };

    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="fw-bold text-success">
                    संपर्क
                </h1>

                <p className="lead">
                    ग्रामपंचायतीशी संपर्क साधण्यासाठी खालील माहिती वापरा.
                </p>
            </div>

            <div className="row">

                {/* Contact Form */}
                <div className="col-lg-7 mb-4">

                    <div className="card shadow border-0 p-4">

                        <h3 className="mb-4 text-primary">
                            संदेश पाठवा
                        </h3>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label">
                                    पूर्ण नाव
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="तुमचे नाव"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    ईमेल
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    मोबाईल नंबर
                                </label>

                                <input
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="9876543210"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    संदेश
                                </label>

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="आपला संदेश लिहा..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                संदेश पाठवा
                            </button>

                        </form>

                    </div>

                </div>

                {/* Contact Info */}
                <div className="col-lg-5 mb-4">

                    <div className="card shadow border-0 p-4">

                        <h3 className="mb-4 text-primary">
                            संपर्क माहिती
                        </h3>

                        <p>
                            📍 <b>पत्ता:</b><br />
                            ग्रामपंचायत जांभरून तांडा,
                            तालुका हिंगोली,
                            जिल्हा हिंगोली
                        </p>

                        <hr />

                        <p>
                            📞 <b>मोबाईल:</b><br />
                            9130895932
                        </p>

                        <hr />

                        <p>
                            ☎ <b>कार्यालय:</b><br />
                            **********
                        </p>

                        <hr />

                        <p>
                            📧 <b>Email:</b><br />
                            gpjambharun@gmail.com
                        </p>

                        <hr />

                        <p>
                            🕒 <b>कार्यालयीन वेळ:</b><br />
                            सकाळी 10:00 ते संध्याकाळी 5:00
                        </p>

                    </div>

                </div>

            </div>

            {/* Google Map */}
            <div className="mt-5">

                <div className="card shadow border-0">

                    <div className="card-body">

                        <h3 className="text-center text-primary mb-4">
                            Google Map
                        </h3>

                        <iframe
                            title="map"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://maps.google.com/maps?q=Jambharun Andhawadi Tanda Hingoli Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        ></iframe>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contact;