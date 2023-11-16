// components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "white" }}>
      <Toolbar>
        <div className="w-full  flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-3">
            <Link href="/">
              <Image
                src="/logo.png" // Lokasi logo di dalam folder "public"
                alt="Logo"
                width={150}
                height={30}
              />
            </Link>

            <div>
              <Link href="/">
                <span style={{ margin: "0 10px", color: "black" }}>Home</span>
              </Link>
              <Link href="/about">
                <span style={{ margin: "0 10px", color: "black" }}>
                  About Us
                </span>
              </Link>
            </div>
          </div>
          <div>
            <Link href="/login-as-company">
              <span style={{ margin: "0 10px", color: "black" }}>
                Login As Company
              </span>
            </Link>
            <Link href="/login">
              <span style={{ margin: "0 10px", color: "black" }}>Login</span>
            </Link>
            <Link href={"/register"}>
              <Button
                variant="contained"
                color="primary"
                style={{ color: "white" }}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
