"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChess } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { AiOutlineFileSearch } from "react-icons/ai";
import Modal from "./Modal";

import other from "@/public/images/other.png"
import wallet from "@/public/image/walletconnect.png"
import metamask from "@/public/image/metamask.png"
import coinbase from "@/public/image/coinbase.png"
import phantom from "@/public/image/phantom.png"
import trust from "@/public/image/trust_wallet.png"
import safepal from "@/public/image/safepal.jpeg"
import ledger from "@/public/image/ledger.webp"


const HowItWork = () => {
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
    { name: "Other  wallets", image: other },
    // { name: "Fortmatic", image: fortmatic },
  ];
  
  interface howItWorksCardProps {
    id: string;
    title: string;
    content: string | number;
    icon: React.ReactNode;
  }

  const howItWorksCard: howItWorksCardProps[] = [
    {
      id: "1",
      title: "VALIDATIONS & APPROVALS",
      content:
        "Access portfolio and transactions across multiple hardware wallets, portfolio changes and all connected dapps.",
      icon: <FaChess />,
    },
    {
      id: "2",
      title: "RECOVERY",
      content:
        "See where your assets move to and revoke access to malicious contracts and interactions.",
      icon: <FaChartBar />,
    },
    {
      id: "3",
      title: "STAKING AND NFT REVIEW",
      content:
        "Having complete control of your staking portfolio, staking rewards and NFT portfolio across all chains. ",
      icon: <VscLaw />,
    },
    {
      id: "4",
      title: "CROSS BRIDGE",
      content:
        "Utilizing Cosmos SDK for secure cross-chain asset bridging between Later 1s and Layer 2s. Bridge assets multichain and check status of all bridge assets.",
      icon: <AiOutlineFileSearch />,
    },
  ];
  return (
    <div className="mt-28 z-50 lg:mt-60  bg-[#0F1212] px-4 md:px-16">
      <div className="">
        
        <div className="flex flex-col sm:grid grid-cols-2 xl:grid-cols-4 gap-5 py-10 ">
          {howItWorksCard.map(({ id, title, content, icon }) => (
            <div
              key={id}
              className="flex flex-col bg-[#C1CFDA]/5 md:min-h-[280px] px-6 py-4 font-semibold rounded-lg justify-center items-center"
              onClick={toggleModal}   
            >
              <span className=" text-3xl opacity-50 p-3 rounded-full bg-[#2f887f] text-white">
                {icon}
              </span>
              <div className="flex items-center gap-1 text-base leading-4 md:block">
                <h1 className="md:text-xl my-3 tracking-wider leading-6">
                  {title}
                </h1>
              </div>
              <p className="text-sm text-[#F9F9F9]/90 md:text-base font-normal">
                {content}
              </p>
            </div>
          ))}
        </div>
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

    </div>
  );
};

export default HowItWork;
