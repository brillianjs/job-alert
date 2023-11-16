"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { Typography, Button, TextField } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const JobDetail = () => {
  return (
    <div className="flex">
      {/* Sidebar Kiri */}
      <div className="flex-shrink-0 w-1/4 p-4 overflow-y-auto">
        {/* Tampilkan beberapa job di sini */}
        <div className="mb-4">
          <h6 className="text-lg font-semibold">Job Title 1</h6>
          <p className="text-gray-500">Company A</p>
        </div>
        <div className="mb-4">
          <h6 className="text-lg font-semibold">Job Title 2</h6>
          <p className="text-gray-500">Company B</p>
        </div>
        {/* Tambahkan lebih banyak pekerjaan jika diperlukan */}
      </div>

      {/* Konten Detail Pekerjaan (Bagian Kanan) */}
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-2">Frontend Developer</h1>
        <p className="text-gray-500 mb-2">
          Company A · East Jakarta, Jakarta, Indonesia
        </p>
        <div className="flex flex-col  space-y-2 mb-4">
          <div className="flex items-center space-x-3">
            <WorkIcon />
            <Typography variant="subtitle2">
              Frontend Developer · Full Time · Mid-Level
            </Typography>
          </div>
          <div className="flex items-center space-x-3">
            <BusinessIcon />
            <Typography variant="subtitle2">
              Technology, Information and Internet
            </Typography>
          </div>
          <div className="flex items-center space-x-3">
            <SchoolIcon />
            <Typography variant="subtitle2">Bachelor Degree</Typography>
          </div>
          <div className="flex items-center space-x-3">
            <AttachMoneyIcon />
            <Typography variant="subtitle2">
              Rp 5-10 millions per month
            </Typography>
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
        <Button variant="contained" color="primary" style={{ color: "white" }}>
          Apply Job
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
          <form className="w-full flex flex-row mt-4">
            <TextField
              fullWidth
              placeholder="Search jobs, titles, vacancies, ..."
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ color: "white" }}
              className="ml-2"
            >
              Search
            </Button>
          </form>
          <JobDetail />
        </div>
      </div>
    </>
  );
};

export default SeekingJob;
