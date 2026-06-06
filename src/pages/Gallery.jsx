import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
    const [gallery, setGallery] = useState([]);

    const API_BASE = "http://localhost:8083";

    useEffect(() => {
        getGallery();
    }, []);

    const getGallery = async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/gallery`);
            setGallery(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getImageUrl = (imageUrl) => {
        if (!imageUrl) return "";

        if (imageUrl.startsWith("http")) {
            return imageUrl;
        }

        if (imageUrl.startsWith("/")) {
            return `${API_BASE}${imageUrl}`;
        }

        return `${API_BASE}/${imageUrl}`;
    };

    return (
        <div className="container my-5">
            <h1 className="text-success mb-4">
                फोटो गॅलरी
            </h1>

            <div className="row">
                {gallery.length > 0 ? (
                    gallery.map((photo) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={photo.id}>
                            <div className="card shadow border-0 h-100">
                                <img
                                    src={getImageUrl(photo.imageUrl)}
                                    className="card-img-top rounded"
                                    alt="Gallery"
                                    style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <h5 className="text-muted text-center">
                        कोणतेही फोटो उपलब्ध नाहीत
                    </h5>
                )}
            </div>
        </div>
    );
}

export default Gallery;