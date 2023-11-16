"use client";
// Import komponen-komponen yang dibutuhkan
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import {
  Input,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";

export default function Home() {
  // Simulasikan data pekerjaan
  const jobData = [
    {
      title: "Frontend Developer",
      company: "Company A, ",
      location: "Jakarta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ...",
    },
    {
      title: "Job Title 2",
      company: "Company 2",
      location: "Location 2",
      description: "Description for Job 2",
    },
    // Tambahkan data pekerjaan lainnya sesuai kebutuhan
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Implementasi logika pencarian pekerjaan
    const results = jobData.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-5xl py-16 space-y-10">
          <h1 className="text-7xl">
            make <span className="font-bold">the job</span> come to you, with
            just <span className="font-bold">a click!</span>
          </h1>
          <form className="w-full flex flex-row mt-4">
            <TextField
              fullWidth
              placeholder="Search jobs, titles, vacancies, ..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ color: "white" }}
              className="ml-2"
              onClick={handleSearch}
            >
              Search
            </Button>
          </form>

          {searchResults.length > 0 && (
            <div className="mt-8">
              {searchResults.map((job, index) => (
                <Card key={index} className="mb-4">
                  <div className="flex">
                    {/* Bagian Kiri */}
                    <div className="flex-shrink-0">
                      <Image
                        src={`https://source.unsplash.com/user/coding`} // Ganti dengan lokasi gambar yang sesuai
                        alt={job.title}
                        width={350}
                        height={150}
                        objectFit="cover"
                      />
                    </div>
                    {/* Bagian Kanan */}
                    <div className="flex-grow p-4">
                      <Typography variant="h5" component="div" className="mb-2">
                        {job.title}
                      </Typography>
                      <Typography variant="subtitle1" className="mb-2">
                        {job.company}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        className="mb-2"
                      >
                        {job.location}
                      </Typography>
                      <Typography variant="body1" className="mb-2">
                        {job.description}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ color: "white" }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <Image
            src={"/hero.png"}
            alt="hero"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
