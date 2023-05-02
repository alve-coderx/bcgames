import React, { useState } from "react";
import playerimg from "../assets/playerimg.webp";
import login from "../assets/login.PNG";
import { AiOutlineClose } from "react-icons/ai";
import walletConnect from "../assets/walletConnect.svg";
import coinbase from "../assets/coinbase.svg";
import wall4 from "../assets/wall14.svg";
import trezor from "../assets/trezor.PNG";
import ledger from "../assets/ledger.png";
import metamask from "../assets/metamask.png";
import WalletConnectModal from "./WalletConnectModal";
import ImportWallet from "./ImportWallet";

const SignInModal = ({ exsistAcc, setExsistAcc, setUser }) => (
  <div className="bg-[#1C1E22] z-10 rounded-sm lg:mt-20 border border-[#1c1d20] drop-shadow-xl">
    <div className="grid grid-cols-2 overflow-y-auto lg:w-[850px]">
      <div>
        <img src={playerimg} alt="playerimg" className="" />
      </div>
      <div className="loginbg relative">
        <div className=" p-5 flex flex-col items-start space-y-5">
          <p className="text-white text-xl font-[600]">
            {exsistAcc ? "Sign up" : "Sign in"}
          </p>
          <div className="text-white w-full flex flex-col items-start space-y-5 ">
            <div className="flex items-center">
              <p>Email</p>
              <p>phone</p>
            </div>
            <input
              placeholder="Email / Phone Number"
              className="p-3 w-full bg-[#1A1C20] outline-none"
            />
            <input placeholder="Email" className="p-3 w-full bg-[#1A1C20]" />
          </div>
          <div className="w-full">
            {exsistAcc ? (
              <p className="text-left text-white font-[500]">
                Enter Referral/Promo Code
              </p>
            ) : (
              <p className="text-right text-white font-[500]">
                Forgot your password?
              </p>
            )}
          </div>
          <button
            onClick={() => {
              setUser(true);
            }}
            className={`ui-button-sports w-full p-3 text-md font-[600]`}
          >
            {exsistAcc ? " Sign up" : " Sign in"}
          </button>
          <div>
            <p className="text-gray-500 font-[500]">
              {exsistAcc ? "New to BC.GAME?" : "Already have an account?"}

              <span
                onClick={() => setExsistAcc((prev) => !prev)}
                className="text-[#3BC117] cursor-pointer px-2 text-lg"
              >
                {exsistAcc ? "Create account" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
        <img
          src={login}
          alt="login"
          className="w-full absolute bottom-0  px-10"
        />
      </div>
    </div>
  </div>
);

const WalletModal = ({
  setImportWallet,
  setWalletCn,
  setUser,
  importWallet,
  walletCn,
}) => (
  <div className="lg:w-[420px] w-[22.6rem]  py-4 lg:px-4 md:px-9 px-4 rounded-3xl  bg-white drop-shadow-2xl">
    <>
      <div className="flex items-center justify-between text-white font-[600] text-lg ">
        <p className="text-black ">Connect a wallet</p>
        <AiOutlineClose
          onClick={() => setUser(false)}
          className="font-[700] cursor-pointer text-black "
        />
      </div>
      <div className="my-4">
        <div
          className="flex my-4 items-center bg-[#EBEFFF] text-black hover:opacity-80 p-4 space-x-5 rounded-xl cursor-pointer"
          onClick={() => setImportWallet(true)}
        >
          <img src={wall4} alt="dakjdga" className="w-6" />
          <p className="lg:text-lg text-sm font-[600]">Browser Wallet</p>
        </div>
        <div
          className="flex my-4 items-center bg-[#EBEFFF] text-black hover:opacity-80 p-4 space-x-5 rounded-xl cursor-pointer"
          onClick={() => setWalletCn(true)}
        >
          <img src={walletConnect} alt="dakjdga" className="w-6" />
          <p className="lg:text-lg text-sm font-[600]">WalletConnet </p>
        </div>
        <div
          className="flex my-4 items-center bg-[#EBEFFF] text-black hover:opacity-80 p-4 space-x-5 rounded-xl cursor-pointer"
          onClick={() => setImportWallet(true)}
        >
          <img className="w-6" src={metamask} alt="dakjdga" />
          <p className="lg:text-lg text-sm font-[600]">Metamask Wallet</p>
        </div>

        <div
          className="flex my-4 items-center bg-[#EBEFFF] text-black hover:opacity-80 p-4 space-x-5 rounded-xl cursor-pointer"
          onClick={() => setImportWallet(true)}
        >
          <img src={ledger} alt="dakjdga" className="w-6" />
          <p className="lg:text-lg text-sm font-[600]">Ledger Wallet</p>
        </div>
        <div
          className="flex my-4 items-center bg-[#EBEFFF] text-black hover:opacity-80 p-4 space-x-5 rounded-xl cursor-pointer"
          onClick={() => setImportWallet(true)}
        >
          <img src={trezor} alt="dakjdga" className="w-6" />
          <p className="lg:text-lg text-sm font-[600]">Trezor Wallet</p>
        </div>
        <div
          className="flex my-4 items-center bg-[#EBEFFF] text-black hover:opacity-80 p-4 space-x-5 rounded-xl cursor-pointer"
          onClick={() => setImportWallet(true)}
        >
          <img src={coinbase} alt="dakjdga" className="w-6" />
          <p className="lg:text-lg text-sm font-[600]">Coinbase Wallet</p>
        </div>

        <p className="text-black font-[500] lg:text-lg text-xs">
          By connecting a wallet, you agree to Uniswap Labs’{" "}
          <span className=" text-[#F73397] mx-2">Terms of Service</span>
          and consent to its{" "}
          <span className=" text-[#F73397]">Privacy Policy</span>.
        </p>
      </div>
      {walletCn && (
        <WalletConnectModal
          importWallet={importWallet}
          setImportWallet={setImportWallet}
          setWalletCn={setWalletCn}
        />
      )}
      {importWallet && (
        <ImportWallet
          importWallet={importWallet}
          setImportWallet={setImportWallet}
        />
      )}
    </>
  </div>
);

const Modal = () => {
  const [exsistAcc, setExsistAcc] = useState(true);
  const [user, setUser] = useState(null);
  const [importWallet, setImportWallet] = useState(false);
  const [walletCn, setWalletCn] = useState(false);

  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed inset-0 top-96 outline-0 ">
      {user ? (
        <WalletModal
          setWalletCn={setWalletCn}
          setImportWallet={setImportWallet}
          walletCn={walletCn}
          importWallet={importWallet}
          setUser={setUser}
        />
      ) : (
        <SignInModal
          setUser={setUser}
          exsistAcc={exsistAcc}
          setExsistAcc={setExsistAcc}
        />
      )}
    </div>
  );
};

export default Modal;
