import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isAdminLogin");

        if (isLoggedIn === "true") {
            navigate("/admin", { replace: true });
        }
    }, [navigate]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showForgot, setShowForgot] = useState(false);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8083/api/admin/login",
                {
                    username: username,
                    password: password,
                }
            );

            console.log("Login Response:", response.data);

            if (String(response.data).trim() === "success") {
                localStorage.setItem("isAdminLogin", "true");
                localStorage.setItem("adminUsername", username);

                alert("Login Successful");
                navigate("/admin", { replace: true });
            } else {
                alert("Invalid Username or Password");
            }
        } catch (error) {
            console.error(error);
            alert("Backend server चालू नाही किंवा login API error आहे!");
        }
    };
    const sendOtp = async () => {
        if (email.trim() === "") {
            alert("Email enter करा!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8083/api/admin/send-otp",
                {
                    email: email,
                }
            );

            if (response.data === "otp-sent") {
                alert("OTP email वर पाठवला आहे!");
                setOtpSent(true);
            } else {
                alert("Admin email match होत नाही!");
            }
        } catch (error) {
            console.error(error);
            alert("OTP send झाला नाही!");
        }
    };

    const resetPassword = async () => {
        if (otp.trim() === "") {
            alert("OTP enter करा!");
            return;
        }

        if (newPassword.trim() === "") {
            alert("New password enter करा!");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Password match होत नाही!");
            return;
        }

        try {
            const response = await axios.put(
                "http://localhost:8083/api/admin/reset-password",
                {
                    email: email,
                    otp: otp,
                    newPassword: newPassword,
                }
            );

            if (response.data === "password-reset") {
                alert("Password reset झाला! आता new password ने login करा.");

                setShowForgot(false);
                setOtpSent(false);
                setEmail("");
                setOtp("");
                setNewPassword("");
                setConfirmPassword("");
                setPassword("");
            } else if (response.data === "invalid-otp") {
                alert("OTP चुकीचा आहे!");
            } else {
                alert("Password reset झाला नाही!");
            }
        } catch (error) {
            console.error(error);
            alert("Reset password API error!");
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow p-4">
                        {!showForgot ? (
                            <>
                                <h2 className="text-center text-success mb-4">
                                    Admin Login
                                </h2>

                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Username
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Username"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-success w-100"
                                    >
                                        Login
                                    </button>
                                </form>

                                <div className="text-center mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-link text-decoration-none"
                                        onClick={() => setShowForgot(true)}
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-center text-primary mb-4">
                                    Forgot Password
                                </h2>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Admin Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Admin Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        disabled={otpSent}
                                    />
                                </div>

                                {!otpSent && (
                                    <button
                                        type="button"
                                        className="btn btn-warning w-100"
                                        onClick={sendOtp}
                                    >
                                        Send OTP
                                    </button>
                                )}

                                {otpSent && (
                                    <>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Enter OTP
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter OTP"
                                                value={otp}
                                                onChange={(e) =>
                                                    setOtp(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                New Password
                                            </label>

                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter New Password"
                                                value={newPassword}
                                                onChange={(e) =>
                                                    setNewPassword(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Confirm Password
                                            </label>

                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                value={confirmPassword}
                                                onChange={(e) =>
                                                    setConfirmPassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="btn btn-success w-100"
                                            onClick={resetPassword}
                                        >
                                            Reset Password
                                        </button>
                                    </>
                                )}

                                <button
                                    type="button"
                                    className="btn btn-secondary w-100 mt-3"
                                    onClick={() => {
                                        setShowForgot(false);
                                        setOtpSent(false);
                                        setEmail("");
                                        setOtp("");
                                        setNewPassword("");
                                        setConfirmPassword("");
                                    }}
                                >
                                    Back to Login
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;