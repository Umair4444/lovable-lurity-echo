import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    setError("");
    console.log("Subscribed:", email);
  };

  return (
    <footer className="bg-black text-white px-6 sm:px-12 lg:px-24 py-16">
      {/* Upper Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
        {/* Left Text */}
        <div className="lg:w-1/2">
          <h1 className="font-semibold text-[36px] sm:text-[46px] leading-[54px] pr-10 sm:pr-24">
            Build your brand effectively. Sign up for our newsletter.
          </h1>
        </div>

        {/* Right Email Form */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="E-mail address"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 text-lg focus:ring-2 focus:ring-black outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:scale-110 transition-transform"
              >
                ➜
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <label className="flex items-center gap-2 text-[14px] sm:text-[16px]">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4 border-gray-400"
              />
              <span>
                I agree with the{" "}
                <a href="/terms-conditions" className="underline">
                  personal data usage rules*
                </a>
              </span>
            </label>
          </form>
        </div>
      </div>

      <div className="h-px bg-[#181818] w-full mb-16"></div>

      {/* Lower Section */}
      <div className="flex flex-col lg:flex-row py-10 gap-16 lg:gap-0">
        {/* Menu */}
        <div className="w-full lg:w-3/5">
          <h2 className="font-medium text-2xl mb-4">Menu</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 text-gray-600">
            {[
              "How it works",
              "Clients",
              "Contact",
              "Portal",
              "Download",
              "Price",
              "Formats",
              "Blog",
              "Cookies",
              "GDPR",
            ].map((item, i) => (
              <a key={i} href="#" className="hover:text-black">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="w-full lg:w-2/4">
          <h2 className="font-medium text-2xl mb-4">Adresa</h2>
          <div className="text-gray-600">
            <div className="mb-8">
              <p>Lurity SK s.r.o.,</p>
              <p>Vlárska 1746/32, 831 01 Bratislava</p>
              <p>Slovak republic</p>
            </div>
            <div>
              <p>Lurity CZ s.r.o.,</p>
              <p>Korunní 2569/108, 101 00, Praha 10</p>
              <p>Czech republic</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="w-full lg:w-1/4">
          <h2 className="font-medium text-2xl mb-4">Kontakt</h2>
          <a
            href="mailto:hello@lurity.com"
            className="block mb-4 text-gray-600 hover:text-black"
          >
            hello@lurity.com
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6 text-gray-500">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">© Lurity SK s.r.o., 2024</div>
    </footer>
  );
};

export default Footer;
