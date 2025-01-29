            import { useState } from "react";
            import * as React from "react";
            import { register } from "../../actions/LoginInfo"; // Ensure this path is correct
            import {
            Typography,
            Button,
            Grid,
            Dialog,
            DialogActions,
            DialogContent,
            DialogTitle,
            } from "@mui/material";
            import { useNavigate } from 'react-router-dom';
            const NewLoginPage = () => {
            const navigate = useNavigate(); 
            const [signIn, setSignIn] = useState(false);
            const [signUp,setSignUp]=useState(false);
            const [username, setUserName] = useState('');
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [loading, setLoading] = useState(false); // Add loading state
            const [error, setError] = useState(''); // Add error state

            // Event handlers
            const handleUserName = (e) => setUserName(e.target.value);
            const handleEmail = (e) => setEmail(e.target.value);
            const handlePassword = (e) => setPassword(e.target.value);
            const handleSignUpClose = () => setSignUp(false);
            const handleSignIn = () => {
                setSignIn(true)
            };
            
            // Sign-up handler
            const handleSignUp = async () => {
                setLoading(true);
                if(username!=='' ||password!==''||email !==''){
                    try {
                    await register(username, email, password); // Assuming register is an async function
                    console.log("Sign-up successful");
                    setLoading(false);
                    setSignUp(true)
                    navigate('/home');
                    setEmail("")
                    setPassword("")
                    setUserName("")
                    // Add any redirect or success handling logic here
                    } catch (error) {
                    setLoading(false);
                    setError("Failed to register. Please try again.");
                    console.log("Error:", error);
                    }
                }else{
                    alert("please fill all the required field to Register")
                    setLoading(false);
                }
            };

            const handleClose = () => setSignIn(false);
            console.log(signUp,"signUp")
            return (
                <div className="flex flex-col md:flex-row h-screen bg-gray-100">
                {/* Left Section */}
                <div className="bg-[#006666] w-full md:w-1/3 flex flex-col justify-center items-center rounded-none md:rounded-l-lg shadow-lg relative">
                    <div className="absolute top-8 left-8">
                    <Typography variant="h4" className="text-white font-bold">
                        MoneyMap
                    </Typography>
                    </div>
                    <div className="mb-2">
                    <Typography variant="h4" className="text-white font-bold mb-4">
                        Welcome Back!
                    </Typography>
                    </div>
                    <div className="mb-2">
                    <Typography variant="body1" className="text-white text-center mb-8 px-10 leading-relaxed">
                        To keep connected with us, please login with your personal info.
                    </Typography>
                    </div>
                    <div className="mt-2">
                    <Button
                        variant="contained"
                        color="white"
                        className="!text-white !border-2 !border-white !px-8 !py-2 !rounded-full !hover:bg-white !hover:text-[#00cca3]"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                    </div>
                </div>

                {/* Right Section */}
                <div
                    className="w-full md:w-2/3 flex flex-col justify-center items-center rounded-none md:rounded-r-lg shadow-lg p-8"
                    style={{
                    backgroundImage: "url(./src/assets/main3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    }}
                >
                    <Typography variant="h4" className="font-bold text-[#00997a] mb-6">
                    Create Account
                    </Typography>
                    <Typography variant="body2" className="text-white mb-8 text-center leading-relaxed">
                    Please use your email for registration
                    </Typography>
                    <div className="w-full max-w-sm">
                    <div className="mb-4 mt-4">
                        <input
                        type="text"
                        placeholder="Name"
                        value={username}
                        onChange={handleUserName}
                        className="w-full text-white placeholder-white border border-gray-300 rounded-lg px-4 py-2 bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmail}
                        className="w-full text-white placeholder-white border border-gray-300 rounded-lg px-4 py-2 bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        className="w-full text-white placeholder-white border border-gray-300 rounded-lg px-4 py-2 bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
                        />
                    </div>
                    {error && (
                        <Typography variant="body2" color="error" className="mb-4 text-center">
                        {error}
                        </Typography>
                    )}
                    <Button
                        variant="contained"
                        color="success"
                        className="bg-[#00cca3] text-white font-bold px-8 py-2 rounded-full hover:bg-green-600 w-full"
                        onClick={handleSignUp}
                        disabled={loading} // Disable while loading
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    </div>
                </div>

                {/* Sign-In Dialog */}
                <Dialog open={signIn} onClose={handleClose} maxWidth="xs" fullWidth PaperProps={{ style: { borderRadius: "16px", padding: "16px" } }}>
                    <DialogTitle>
                    <Typography variant="h5" align="center" style={{ color: "#00997a", fontWeight: "bold" }}>
                        Welcome Back!
                    </Typography>
                    </DialogTitle>
                    <DialogContent>
                    <Typography variant="body2" align="center" style={{ marginBottom: "16px", color: "#666" }}>
                        Please sign in to continue
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <input
                            type="text"
                            placeholder="Username or Email"
                            value={username}
                            onChange={handleUserName}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00997a] focus:outline-none"
                            style={{ fontSize: "16px", color: "#333" }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePassword}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00997a] focus:outline-none"
                            style={{ fontSize: "16px", color: "#333" }}
                        />
                        </Grid>
                    </Grid>
                    <div className="mt-4 flex justify-between items-center">
                        <Typography variant="body2" style={{ color: "#00997a", cursor: "pointer" }} onClick={() => alert("Forgot Password Clicked")}>
                        Forgot Password?
                        </Typography>
                    </div>
                    </DialogContent>
                    <DialogActions style={{ justifyContent: "center" }}>
                    <Button variant="contained" onClick={handleClose} style={{ backgroundColor: "#00997a", color: "white", fontWeight: "bold", width: "120px" }}>
                        Login
                    </Button>
                    <Button variant="outlined" onClick={handleClose} style={{ borderColor: "#00997a", color: "#00997a", fontWeight: "bold", width: "120px" }}>
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>
                {/* User details dialog */}
                </div>
            );
            };

            export default NewLoginPage;
    