"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import {
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import {
  Category as CategoryIcon,
  Schedule as ScheduleIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  AttachMoney as AttachMoneyIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";

const OpenVacancy = () => {
  const [vacancyTitle, setVacancyTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [expLevel, setExpLevel] = useState("");
  const [industries, setIndustries] = useState([]);
  const [minEducation, setMinEducation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [languages, setLanguages] = useState([]);
  const [aboutTheJob, setAboutTheJob] = useState("");

  const handleSaveClick = () => {
    // Tambahkan logika penyimpanan data open vacancy di sini
    // Misalnya, kirim data ke server atau lakukan operasi penyimpanan lainnya
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-5xl py-16">
          <Typography variant="h4" component="div" className="mb-10">
            Open Vacancy
          </Typography>

          <form className="space-y-5 mt-10">
            <TextField
              label="Vacancy Title"
              variant="outlined"
              fullWidth
              value={vacancyTitle}
              onChange={(e) => setVacancyTitle(e.target.value)}
              className="mb-4"
              InputProps={{
                startAdornment: (
                  <ScheduleIcon style={{ marginRight: "10px" }} />
                ),
              }}
            />

            <FormControl variant="outlined" fullWidth className="mb-4">
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
                startAdornment={<CategoryIcon />}
              >
                <MenuItem value="category1">Category 1</MenuItem>
                <MenuItem value="category2">Category 2</MenuItem>
                {/* Tambahkan lebih banyak opsi kategori jika diperlukan */}
              </Select>
            </FormControl>

            <FormControl variant="outlined" fullWidth className="mb-4">
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                label="Type"
                startAdornment={<WorkIcon />}
              >
                <MenuItem value="fullTime">Full Time</MenuItem>
                <MenuItem value="partTime">Part Time</MenuItem>
                {/* Tambahkan lebih banyak opsi tipe jika diperlukan */}
              </Select>
            </FormControl>

            <FormControl variant="outlined" fullWidth className="mb-4">
              <InputLabel>Experience Level</InputLabel>
              <Select
                value={expLevel}
                onChange={(e) => setExpLevel(e.target.value)}
                label="Experience Level"
                startAdornment={<WorkIcon />}
              >
                <MenuItem value="entryLevel">Entry Level</MenuItem>
                <MenuItem value="midLevel">Mid Level</MenuItem>
                <MenuItem value="seniorLevel">Senior Level</MenuItem>
              </Select>
            </FormControl>

            {/* Dropdown untuk Industries */}
            <FormControl variant="outlined" fullWidth className="mb-4">
              <InputLabel>Industries</InputLabel>
              <Select
                multiple
                value={industries}
                onChange={(e) => setIndustries(e.target.value)}
                label="Industries"
                startAdornment={<BusinessIcon />}
              >
                <MenuItem value="industry1">Industry 1</MenuItem>
                <MenuItem value="industry2">Industry 2</MenuItem>
                {/* Tambahkan lebih banyak opsi industri jika diperlukan */}
              </Select>
            </FormControl>

            {/* Dropdown untuk Min. Education */}
            <FormControl variant="outlined" fullWidth className="mb-4">
              <InputLabel>Min. Education</InputLabel>
              <Select
                value={minEducation}
                onChange={(e) => setMinEducation(e.target.value)}
                label="Min. Education"
                startAdornment={<SchoolIcon />}
              >
                <MenuItem value="highSchool">High School</MenuItem>
                <MenuItem value="associateDegree">Associate Degree</MenuItem>
                <MenuItem value="bachelorDegree">Bachelor's Degree</MenuItem>
                {/* Tambahkan lebih banyak opsi pendidikan jika diperlukan */}
              </Select>
            </FormControl>

            {/* Dropdown untuk Salary Range */}
            <FormControl variant="outlined" fullWidth className="mb-4">
              <InputLabel>Salary Range</InputLabel>
              <Select
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
                label="Salary Range"
                startAdornment={<AttachMoneyIcon />}
              >
                <MenuItem value="1-5M">1-5 million</MenuItem>
                <MenuItem value="6-10M">6-10 million</MenuItem>
                <MenuItem value="11-15M">11-15 million</MenuItem>
                {/* Tambahkan lebih banyak opsi rentang gaji jika diperlukan */}
              </Select>
            </FormControl>

            {/* Dropdown untuk Languages */}
            <FormControl variant="outlined" fullWidth className="mb-4">
              <InputLabel>Languages</InputLabel>
              <Select
                multiple
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                label="Languages"
                startAdornment={<LanguageIcon />}
              >
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="spanish">Spanish</MenuItem>
                {/* Tambahkan lebih banyak opsi bahasa jika diperlukan */}
              </Select>
            </FormControl>

            <TextareaAutosize
              minRows={5}
              placeholder="About The Job"
              className="w-full p-2 border rounded-md mb-4"
              value={aboutTheJob}
              onChange={(e) => setAboutTheJob(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              style={{ color: "white" }}
              onClick={handleSaveClick}
            >
              Save Vacancy
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OpenVacancy;
