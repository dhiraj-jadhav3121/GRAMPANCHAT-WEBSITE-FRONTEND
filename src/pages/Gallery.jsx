function Gallery() {
    return (
        <div className="container my-5">
            <h1 className="text-success">
                फोटो गॅलरी
            </h1>

            <div className="row">

                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div className="col-md-4 mb-4" key={item}>
                        <img
                            src={`https://picsum.photos/400/300?random=${item}`}
                            className="img-fluid rounded shadow"
                            alt=""
                        />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Gallery;