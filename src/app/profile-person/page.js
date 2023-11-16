"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { Button, TextField, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Image from "next/image";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-5xl py-16">
          <div className="flex ">
            {/* Bagian Kiri: Foto Profil dan Nama Lengkap */}
            <div className="flex-shrink-0 w-1/4 pr-8">
              <Image
                src="/person.jpeg" // Ganti dengan lokasi gambar profil Anda
                alt="Profile Picture"
                width={250}
                height={250}
                // objectFit="cover"
                // className="rounded-full"
              />
              {edit ? (
                <Typography variant="h5" className="mt-4" fontWeight={"bold"}>
                  John Doe
                </Typography>
              ) : (
                <TextField value={"John Doe"}></TextField>
              )}
            </div>

            {/* Bagian Kanan: Deskripsi, Kontak, Media Sosial, dan lainnya */}
            <div className="flex-grow">
              {/* Deskripsi */}
              <div className="mb-6 w-full ">
                <Typography variant="h6" className="mb-2">
                  Description
                </Typography>
                {edit ? (
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                ) : (
                  <TextareaAutosize
                    style={{ border: "1px solid gray", width: "100%" }}
                    value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.`}
                  ></TextareaAutosize>
                )}
              </div>

              {/* Kontak */}
              <div className="mb-6">
                <Typography variant="h6" className="mb-2">
                  Contact
                </Typography>
                <div className="flex">
                  <div className="mr-4">
                    <Typography variant="subtitle2">Phone Number</Typography>
                    {edit ? (
                      <Typography variant="body1">+6281234567890</Typography>
                    ) : (
                      <TextField value={`+6281234567890`}></TextField>
                    )}
                  </div>
                  <div>
                    <Typography variant="subtitle2">Province</Typography>
                    {edit ? (
                      <Typography variant="body1">Central Java</Typography>
                    ) : (
                      <TextField value={`Central Java`}></TextField>
                    )}
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="mr-4">
                    <Typography variant="subtitle2">Regency</Typography>
                    {edit ? (
                      <Typography variant="body1">Purwokerto</Typography>
                    ) : (
                      <TextField value={`Purwokerto`}></TextField>
                    )}
                  </div>
                  <div>
                    <Typography variant="subtitle2">Village</Typography>
                    {edit ? (
                      <Typography variant="body1">Jatisari</Typography>
                    ) : (
                      <TextField value={`Jatisari`}></TextField>
                    )}
                  </div>
                </div>
              </div>

              {/* Media Sosial */}
              <div className="mb-6">
                <Typography variant="h6" className="mb-2">
                  Social Media
                </Typography>
                <div className="flex">
                  <div className="mr-4">
                    <Typography variant="subtitle2">Facebook</Typography>
                    {edit ? (
                      <Typography variant="body1">facebook_username</Typography>
                    ) : (
                      <TextField value={`facebook_username`}></TextField>
                    )}
                  </div>
                  <div className="mr-4">
                    <Typography variant="subtitle2">Instagram</Typography>
                    {edit ? (
                      <Typography variant="body1">
                        instagram_username
                      </Typography>
                    ) : (
                      <TextField value={`instagram_username`}></TextField>
                    )}
                  </div>
                  <div>
                    <Typography variant="subtitle2">Tiktok</Typography>
                    {edit ? (
                      <Typography variant="body1">tiktok_username</Typography>
                    ) : (
                      <TextField value={`tiktok_username`}></TextField>
                    )}
                  </div>
                </div>
              </div>

              {/* Bahasa dan Website */}
              <div className="mb-6">
                <Typography variant="h6" className="mb-2">
                  Language
                </Typography>
                {edit ? (
                  <Typography variant="body1">English</Typography>
                ) : (
                  <TextField value={`English`}></TextField>
                )}
              </div>
              <div className="mb-6">
                <Typography variant="h6" className="mb-2">
                  Website
                </Typography>
                {edit ? (
                  <Typography variant="body1">
                    <a
                      href="http://my.website.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://my.website.com
                    </a>
                  </Typography>
                ) : (
                  <TextField value={`http://my.website.com`}></TextField>
                )}
              </div>

              {/* Tombol Edit Profile */}
              <Button
                onClick={() => setEdit(!edit)}
                variant="contained"
                color="primary"
                style={{ color: "white" }}
              >
                {!edit ? "Save" : "Edit Profile"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
