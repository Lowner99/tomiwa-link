"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../public/images/node_logo.png";
import { IoMdClose } from "react-icons/io";
import Modal from "./Modal";

import other from "@/public/images/other.png"
import wallet from "@/public/image/walletconnect.png"
import metamask from "@/public/image/metamask.png"
import coinbase from "@/public/image/coinbase.png"
import phantom from "@/public/image/phantom.png"
import trust from "@/public/image/trust_wallet.png"
import safepal from "@/public/image/safepal.jpeg"
import ledger from "@/public/image/ledger.webp"


const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "#Roadmap",
  },
  {
    id: 2,
    name: "Resources",
    path: "#Hero",
  },
  {
    id: 3,
    name: "Wallets",
    path: "#Hero",
  },
  {
    id: 4,
    name: "Contact Us",
    path: "/contactUs",
  },
];
const Header = () => {
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'error'>('idle');
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
    setConnectionStatus('idle');
    setSelectedWallet(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setConnectionStatus('idle');
    setSelectedWallet(null);
  };

  const handleWalletClick = (walletName: string) => {
    setSelectedWallet(walletName);
    setConnectionStatus('connecting');
    setTimeout(() => {
      setConnectionStatus('error');
    }, 3000);
  };

  const walletData = [
    { name: "WalletConnect", image: wallet },
    { name: "Metamask", image: metamask },
    { name: "Coinbase", image: coinbase },
    { name: "Phantom", image: phantom },
    { name: "Trust Wallet", image: trust },
    // { name: "Ronin Wallet", image: ronin },
    { name: "Safepal", image: safepal },
    { name: "Ledger", image: ledger },
    { name: "Other wallets", image: other },
    // { name: "Fortmatic", image: fortmatic },
  ];
  
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu]);


  return (
    <nav className="fixed top-0  py-4  z-50  bg-[#0F1212] w-full max-w-[1440px] mx-auto px-4 md:px-16 flex items-center justify-between">
      <div className="flex items-center gap-2 leading-5">
        <Link href="/">
          <Image
            priority
            src={logo}
            width={35}
            height={35}
            alt={"streal logo"}
          />
        </Link>
      </div>
      <div
        className={`${
          openMenu ? "transform translate-y-0" : "-translate-y-96 hidden"
        }  w-full z-50 h-auto bg-[#0F1212] pt- transform -translate-y-full transition-all duration-500 ease-out absolute top-12 left-0 p-4 flex flex-col items-start justify-evenly lg:hidden`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={`${link.path}`}
            className="py-2  w-full md:w-10/12 mx-auto "
            onClick={() => setOpenMenu(!openMenu)}
          >
            {link.name}
          </Link>
        ))}
         <div className="block lg:hidden">
        <button
          onClick={toggleModal} 
          className="text-[#0F1212] px-1.5 py-1.5 bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]  w-full font-semibold text-base rounded-md"
        >
          Connect wallet
        </button>
      </div>
      </div>
      <div className="hidden lg:flex items-center  gap-8 xl:w-3/5">
        <Link
          href="#Roadmap"
          className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]"
        >
          Roadmap
        </Link>
        <Link
          href="#JoinPresales"
          className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]"
        >
          Join Presales
        </Link>
        <Link
          href="#LitePaper"
          className=" hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]"
        >
          Lite Paper
        </Link>
      </div>
      <div className="lg:hidden text-[#C1CFDA]">
        {openMenu ? (
          <span onClick={() => setOpenMenu(false)}>
            <IoMdClose size={25} className="cursor-pointer" />
          </span>
        ) : (
          <RxHamburgerMenu
            size={25}
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="hidden lg:block">
        <button
          onClick={toggleModal} 
          className="text-[#0F1212] px-1.5 py-1.5 bg-gradient-to-r from-[#20A4F3]  to-[#59F8E8]  w-full font-semibold text-base rounded-md"
        >
          Connect wallet
        </button>
      </div>
      <Modal isVisible={showModal} onClose={handleCloseModal}>
        <div className="">
          <div className=" modal left-0 top-0 flex justify-center items-center">
            <div className="rounded-3xl shadow-lg modal-content  w-[350px]">
              <div className="border-b py-4 px-2 modal-header">
                <h5 className="modal-title">Connect Wallet</h5>
              </div>
              <div className="p-3 modal-body">
                {connectionStatus === 'idle' && (
                  <>
                    <p>Connect with one of our available wallet providers.</p>
                    <div className="modal-wallets">
                      {walletData.map((wallet, index) => (
                        <Link href="#" key={index} onClick={() => handleWalletClick(wallet.name)}>
                          <Image src={wallet.image} width={30} height={35} alt="" />
                          {wallet.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
               {connectionStatus === 'connecting' && (
  <>
      <div className="justify-center items-center gap-5 flex flex-col">
      {selectedWallet && (
    <>
          <Image
            src={walletData.find(wallet => wallet.name === selectedWallet)?.image || ''}
            width={40}
            height={40}
            alt={selectedWallet}
            className="ml-2"
          />
          <p>
          Connecting to {selectedWallet}...
            </p>
            </>
      )}
        </div>
  </>
)}

                {connectionStatus === 'error' && (
                  <div className="justify-center items-center gap-5 flex flex-col">
                     {selectedWallet && (
    <>
          <Image
            src={walletData.find(wallet => wallet.name === selectedWallet)?.image || ''}
            width={40}
            height={40}
            alt={selectedWallet}
            className="ml-2"
          />
            </>
      )}
                    <p>Error connecting, connect manually</p>
                    <button className="text-[#0F1212] cursor-pointer px-[4.5px] py-[6px] md:px-1.5 md:py-1.5 bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] w-full font-semibold text-base rounded-md">
                      <Link href="/connect">
                      Connect manually
                      </Link>
                    </button>
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </Modal>

    </nav>
  );
};

export default Header;
