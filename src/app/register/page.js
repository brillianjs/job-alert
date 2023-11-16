// pages/register.js
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // Tambahkan logika pendaftaran di sini
  };

  return (
    <div className="min-h-screen  flex flex-col items-center">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Logo"
          style={{ padding: "10px" }}
          width={150}
          height={30}
        />
      </Link>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8  max-w-xl flex flex-col justify-center items-center space-y-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form>
            <TextField
              label="Full Name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
              style={{ color: "white" }}
            >
              Register
            </Button>
          </form>
          <p>
            Do you have an account?{" "}
            <Link href={"/login"}>
              <span className="text-green-700 font-bold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
