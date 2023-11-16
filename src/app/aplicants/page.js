"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { Typography, Button, TextField } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Link from "next/link";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { FacebookOutlined, Person2Outlined } from "@mui/icons-material";
import Email from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const JobDetail = () => {
  return (
    <div className="flex">
      {/* Sidebar Kiri */}
      <div className="flex-shrink-0 w-1/4 p-4 overflow-y-auto">
        {/* Tampilkan beberapa job di sini */}
        <div className="mb-4 bg-green-100 p-5">
          <h6 className="text-lg font-semibold">John Doe</h6>
          <p className="text-gray-500">+6285701803349</p>
          <p className="text-gray-500 text-sm">Banjarmasin</p>
        </div>
        <div className="mb-4 p-5">
          <h6 className="text-lg font-semibold">Wahyu Triono</h6>
          <p className="text-gray-500">+6285701803349</p>
          <p className="text-gray-500 text-sm">Banjarmasin</p>
        </div>
        <div className="mb-4 p-5">
          <h6 className="text-lg font-semibold">Andi Malarangeng</h6>
          <p className="text-gray-500">+6285701803349</p>
          <p className="text-gray-500 text-sm">Banjarmasin</p>
        </div>
        <div className="mb-4 p-5">
          <h6 className="text-lg font-semibold">Sujatmiko</h6>
          <p className="text-gray-500">+6285701803349</p>
          <p className="text-gray-500 text-sm">Banjarmasin</p>
        </div>
        {/* Tambahkan lebih banyak pekerjaan jika diperlukan */}
      </div>

      {/* Konten Detail Pekerjaan (Bagian Kanan) */}
      <div className="flex-grow p-4">
        <Image src="/person.jpeg" alt="Logo" width={150} height={30}></Image>
        <h1 className="text-2xl font-bold mb-2">John Doe</h1>
        <p className="text-gray-500 mb-2">
          <LocalPhoneIcon></LocalPhoneIcon>+6281234567890 <AddLocationAltIcon />
          Teluk, Purwokerto, Central Java
        </p>
        <div className="flex flex-col  space-y-2 mb-4">
          <div className="flex items-center space-x-3">
            <FacebookOutlined />
            <Typography variant="subtitle2">facebook_username</Typography>
          </div>
          <div className="flex items-center space-x-3">
            <InstagramIcon />
            <Typography variant="subtitle2">instagram_username</Typography>
          </div>
          <div className="flex items-center space-x-3">
            <Person2Outlined />
            <Typography variant="subtitle2">www.johndoe.com</Typography>
          </div>
          <div className="flex items-center space-x-3">
            <Email />
            <Typography variant="subtitle2">johndoe@gmail.com</Typography>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">About The Job</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button variant="contained" color="secondary">
          REFUSE
        </Button>
        <Button
          variant="contained"
          marginLeft={1}
          color="primary"
          style={{ color: "white" }}
        >
          ACCEPT
        </Button>
      </div>
    </div>
  );
};

const SeekingJob = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-5xl py-16">
          <div className="w-full flex justify-between">
            <h1 className="text-2xl font-bold">Frontend Developer</h1>
            <Link href="vacancy">
              <Button
                variant="contained"
                color="primary"
                style={{ color: "white" }}
              >
                Select Vacancy
              </Button>
            </Link>
          </div>
          <JobDetail />
        </div>
      </div>
    </>
  );
};

export default SeekingJob;
