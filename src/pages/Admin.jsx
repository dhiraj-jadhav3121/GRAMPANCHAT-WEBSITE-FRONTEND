import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    const API_BASE = "https://grampanchat-website-backend.onrender.com";

    const [contacts, setContacts] = useState([]);
    const [notices, setNotices] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [nidhiList, setNidhiList] = useState([]);

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileInputKey, setFileInputKey] = useState(Date.now());

    const [noticeData, setNoticeData] = useState({
        title: "",
        description: "",
        date: "",
    });

    const [nidhiData, setNidhiData] = useState({
        workName: "",
        schemeName: "",
        approvedFund: "",
        expense: "",
        status: "सुरू",
    });

    const [editNidhiId, setEditNidhiId] = useState(null);

    const getContacts = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/contact`);
            setContacts(response.data);
        } catch (error) {
            console.error(error);
            alert("Contact messages load झाले नाहीत!");
        }
    }, []);

    const getNotices = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/notices`);
            setNotices(response.data);
        } catch (error) {
            console.error(error);
            alert("Notices load झाले नाहीत!");
        }
    }, []);

    const getGallery = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/gallery`);
            setGallery(response.data);
        } catch (error) {
            console.error(error);
            alert("Gallery photos load झाले नाहीत!");
        }
    }, []);

    const getNidhi = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE}/api/nidhi`);
            setNidhiList(response.data);
        } catch (error) {
            console.error(error);
            alert("Nidhi data load झाला नाही!");
        }
    }, []);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isAdminLogin");

        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        getContacts();
        getNotices();
        getGallery();
        getNidhi();
    }, [getContacts, getNotices, getGallery, getNidhi]);

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

    const handleNoticeChange = (e) => {
        setNoticeData({
            ...noticeData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNidhiChange = (e) => {
        setNidhiData({
            ...nidhiData,
            [e.target.name]: e.target.value,
        });
    };

    const addNotice = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${API_BASE}/api/notices`, noticeData);
            alert("Notice add झाली!");

            setNoticeData({
                title: "",
                description: "",
                date: "",
            });

            getNotices();
        } catch (error) {
            console.error(error);
            alert("Notice add झाली नाही!");
        }
    };

    const deleteNotice = async (id) => {
        const confirmDelete = window.confirm("ही notice delete करायची आहे का?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_BASE}/api/notices/${id}`);
            alert("Notice delete झाली!");
            getNotices();
        } catch (error) {
            console.error(error);
            alert("Notice delete झाली नाही!");
        }
    };

    const addPhoto = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert("Photo select करा!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", selectedFile);

            await axios.post(`${API_BASE}/api/gallery/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Photo upload झाला!");
            setSelectedFile(null);
            setFileInputKey(Date.now());
            getGallery();
        } catch (error) {
            console.error(error);
            alert("Photo upload झाला नाही!");
        }
    };

    const deletePhoto = async (id) => {
        const confirmDelete = window.confirm("हा photo delete करायचा आहे का?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_BASE}/api/gallery/${id}`);
            alert("Photo delete झाला!");
            getGallery();
        } catch (error) {
            console.error(error);
            alert("Photo delete झाला नाही!");
        }
    };

    const deleteContact = async (id) => {
        const confirmDelete = window.confirm("हा message delete करायचा आहे का?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_BASE}/api/contact/${id}`);
            alert("Message delete झाला!");
            getContacts();
        } catch (error) {
            console.error(error);
            alert("Message delete झाला नाही!");
        }
    };

    const saveNidhi = async (e) => {
        e.preventDefault();

        try {
            if (editNidhiId) {
                await axios.put(`${API_BASE}/api/nidhi/${editNidhiId}`, nidhiData);
                alert("Nidhi update झाला!");
            } else {
                await axios.post(`${API_BASE}/api/nidhi`, nidhiData);
                alert("Nidhi add झाला!");
            }

            setNidhiData({
                workName: "",
                schemeName: "",
                approvedFund: "",
                expense: "",
                status: "सुरू",
            });

            setEditNidhiId(null);
            getNidhi();
        } catch (error) {
            console.error(error);
            alert("Nidhi save झाला नाही!");
        }
    };

    const editNidhi = (item) => {
        setEditNidhiId(item.id);

        setNidhiData({
            workName: item.workName,
            schemeName: item.schemeName,
            approvedFund: item.approvedFund,
            expense: item.expense,
            status: item.status,
        });
    };

    const deleteNidhi = async (id) => {
        const confirmDelete = window.confirm("हा निधी record delete करायचा आहे का?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_BASE}/api/nidhi/${id}`);
            alert("Nidhi delete झाला!");
            getNidhi();
        } catch (error) {
            console.error(error);
            alert("Nidhi delete झाला नाही!");
        }
    };

    const cancelNidhiEdit = () => {
        setEditNidhiId(null);

        setNidhiData({
            workName: "",
            schemeName: "",
            approvedFund: "",
            expense: "",
            status: "सुरू",
        });
    };

    const logout = () => {
        localStorage.removeItem("isAdminLogin");
        alert("Logout Successful");
        navigate("/login");
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold text-success">Admin Dashboard</h1>

                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            </div>

            {/* Nidhi Management */}
            <div className="card shadow p-4 mb-5">
                <h3 className="mb-4 text-primary">Nidhi Management</h3>

                <form onSubmit={saveNidhi}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">कामाचे नाव</label>
                            <input
                                type="text"
                                name="workName"
                                value={nidhiData.workName}
                                onChange={handleNidhiChange}
                                className="form-control"
                                placeholder="उदा. रस्ता बांधकाम"
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">योजना</label>
                            <input
                                type="text"
                                name="schemeName"
                                value={nidhiData.schemeName}
                                onChange={handleNidhiChange}
                                className="form-control"
                                placeholder="उदा. 15 वा वित्त आयोग"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">मंजूर निधी</label>
                            <input
                                type="number"
                                name="approvedFund"
                                value={nidhiData.approvedFund}
                                onChange={handleNidhiChange}
                                className="form-control"
                                placeholder="उदा. 500000"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">खर्च</label>
                            <input
                                type="number"
                                name="expense"
                                value={nidhiData.expense}
                                onChange={handleNidhiChange}
                                className="form-control"
                                placeholder="उदा. 420000"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">स्थिती</label>
                            <select
                                name="status"
                                value={nidhiData.status}
                                onChange={handleNidhiChange}
                                className="form-control"
                            >
                                <option value="सुरू">सुरू</option>
                                <option value="पूर्ण">पूर्ण</option>
                                <option value="प्रलंबित">प्रलंबित</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success me-2">
                        {editNidhiId ? "Update Nidhi" : "Add Nidhi"}
                    </button>

                    {editNidhiId && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={cancelNidhiEdit}
                        >
                            Cancel
                        </button>
                    )}
                </form>

                <hr />

                <h4 className="mb-3 text-success">All Nidhi Records</h4>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-success">
                            <tr>
                                <th>ID</th>
                                <th>कामाचे नाव</th>
                                <th>योजना</th>
                                <th>मंजूर निधी</th>
                                <th>खर्च</th>
                                <th>स्थिती</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {nidhiList.length > 0 ? (
                                nidhiList.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.workName}</td>
                                        <td>{item.schemeName}</td>
                                        <td>₹ {Number(item.approvedFund).toLocaleString("en-IN")}</td>
                                        <td>₹ {Number(item.expense).toLocaleString("en-IN")}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-primary me-2"
                                                onClick={() => editNidhi(item)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteNidhi(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No nidhi records found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <button className="btn btn-success mt-3" onClick={getNidhi}>
                    Refresh Nidhi
                </button>
            </div>

            {/* Notice Management */}
            <div className="card shadow p-4 mb-5">
                <h3 className="mb-4 text-primary">Notice Board Management</h3>

                <form onSubmit={addNotice}>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="form-label">Notice Title</label>
                            <input
                                type="text"
                                name="title"
                                value={noticeData.title}
                                onChange={handleNoticeChange}
                                className="form-control"
                                placeholder="Notice title"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Notice Date</label>
                            <input
                                type="date"
                                name="date"
                                value={noticeData.date}
                                onChange={handleNoticeChange}
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3 d-flex align-items-end">
                            <button type="submit" className="btn btn-success w-100">
                                Add Notice
                            </button>
                        </div>

                        <div className="col-md-12 mb-3">
                            <label className="form-label">Notice Description</label>
                            <textarea
                                name="description"
                                value={noticeData.description}
                                onChange={handleNoticeChange}
                                className="form-control"
                                rows="3"
                                placeholder="Notice description"
                                required
                            ></textarea>
                        </div>
                    </div>
                </form>

                <hr />

                <h4 className="mb-3 text-success">All Notices</h4>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-success">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {notices.length > 0 ? (
                                notices.map((notice) => (
                                    <tr key={notice.id}>
                                        <td>{notice.id}</td>
                                        <td>{notice.title}</td>
                                        <td>{notice.description}</td>
                                        <td>{notice.date}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteNotice(notice.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No notices found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <button className="btn btn-success mt-3" onClick={getNotices}>
                    Refresh Notices
                </button>
            </div>

            {/* Gallery Management */}
            <div className="card shadow p-4 mb-5">
                <h3 className="mb-4 text-primary">Gallery Management</h3>

                <form onSubmit={addPhoto}>
                    <div className="row">
                        <div className="col-md-9 mb-3">
                            <label className="form-label">Select Photo</label>

                            <input
                                key={fileInputKey}
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                                required
                            />
                        </div>

                        <div className="col-md-3 mb-3 d-flex align-items-end">
                            <button type="submit" className="btn btn-success w-100">
                                Upload Photo
                            </button>
                        </div>
                    </div>
                </form>

                <hr />

                <h4 className="mb-3 text-success">All Gallery Photos</h4>

                <div className="row">
                    {gallery.length > 0 ? (
                        gallery.map((photo) => (
                            <div className="col-md-4 mb-3" key={photo.id}>
                                <div className="card shadow-sm">
                                    <img
                                        src={getImageUrl(photo.imageUrl)}
                                        alt="Gallery"
                                        className="card-img-top"
                                        style={{
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div className="card-body text-center">
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deletePhoto(photo.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No photos found</p>
                    )}
                </div>

                <button className="btn btn-success mt-3" onClick={getGallery}>
                    Refresh Gallery
                </button>
            </div>

            {/* Contact Messages */}
            <div className="card shadow p-4">
                <h3 className="mb-4 text-primary">Contact Messages</h3>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-success">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {contacts.length > 0 ? (
                                contacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>{contact.id}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.mobile}</td>
                                        <td>{contact.message}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteContact(contact.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No messages found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <button className="btn btn-success mt-3" onClick={getContacts}>
                    Refresh Messages
                </button>
            </div>
        </div>
    );
}

export default Admin;