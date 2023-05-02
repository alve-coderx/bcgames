import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import logo from '../assets/logo.webp';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sticky drop-shadow-xl border border-black shadow-black top-0 z-50 bg-[#24262B]">
      <div className="py-5 px-5 container mx-auto">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div>
              <img src={logo} alt="logo" className="w-28"/>
            </div>
            <div className="flex items-center gap-x-5">
              <button
                onClick={() => setShowModal(true)}
                className="text-md cursor-pointer font-[400] text-slate-300 shadow-[#E8296F]"
              >
                Sign in
              </button>
              {showModal && (
                <Modal showModal={showModal} setShowModal={setShowModal} />
              )}
              <button
                onClick={() => setShowModal(true)}
                className="text-md cursor-pointer font-[400] ui-button-sports px-8 rounded-sm py-3 text-white shadow-[#E8296F]"
              >
                Sign Up
              </button>
              {showModal && (
                <Modal showModal={showModal} setShowModal={setShowModal} />
              )}
              <AiOutlineShoppingCart className="text-xl cursor-pointer font-[500] text-white shadow-[#E8296F]" />
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="mt-6 p-5 flow-root glass rounded-lg">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <NavLink
                      to="/"
                      className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-white hover:bg-gray-400/10"
                    >
                      Home
                    </NavLink>
                    <p className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-white hover:bg-gray-400/10">
                      Chart
                    </p>
                    <NavLink
                      to="/"
                      className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-white hover:bg-gray-400/10"
                    >
                      Staking
                    </NavLink>
                    <p className="-mx-3 block rounded-lg py-6 px-3 text-5xl font-semibold leading-7 text-white hover:bg-gray-400/10">
                      Whitepaper
                    </p>
                    <NavLink to="/connectwallet">
                      <button className="custom-btn btn-3 w-44 p-2">
                        <span>Connect Wallet</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
