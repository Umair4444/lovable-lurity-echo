import { useState } from "react";
import {
  Mail,
  MapPin,
  InstagramIcon,
  Heart,
  MessageCircle,
  MoveRightIcon,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
    privacyConsent: false,
    newsletter: false,
  });

  const tabs = [
    "All Members",
    "Board",
    "Sales",
    "Developers",
    "Technical Support",
  ];

  const teamMembers = {
    0: [
      // All Members
      { name: "Tomáš Tiefenbach", role: "CEO", img: "/team/image_tomas.png" },
      {
        name: "František Farenzena",
        role: "Country Director SR/CR",
        img: "/team/image_frantisek.png",
      },
      { name: "Jozef Jaššo", role: "CTO", img: "/team/image_jozef.png" },
      {
        name: "Adriana Tiefenbach",
        role: "Head of Support Team",
        img: "/team/image_adriana.png",
      },
      { name: "Petra Svetik", role: "CMO", img: "/team/image_petra_s.png" },
      {
        name: "Petra Mertlová",
        role: "Account Manager SR",
        img: "/team/image_petra_m.png",
      },
      {
        name: "Katja Janečková",
        role: "Account Manager CZ",
        img: "/team/image_katja.png",
      },
      {
        name: "Slavomíra Uhrínková",
        role: "Account Manager SR",
        img: "/team/image_slavomira.png",
      },
      {
        name: "Alena Ležovičová",
        role: "Account Manager SR",
        img: "/team/image_alena.png",
      },
      {
        name: "Marián Baňák",
        role: "App Developer",
        img: "/team/image_marian.png",
      },
      {
        name: "Martin Breier",
        role: "Backend Developer",
        img: "/team/image_martin.png",
      },
      {
        name: "Vladimír Čamaj",
        role: "Fullstack Developer",
        img: "/team/image_vladimir.png",
      },
      {
        name: "Volodymyr Dethiarenko",
        role: "Onsite Technician",
        img: "/team/image_volodymyr.png",
      },
    ],
    1: [
      // Board
      { name: "Tomáš Tiefenbach", role: "CEO" },
      { name: "František Farenzena", role: "Country Director SR/CR" },
      { name: "Jozef Jaššo", role: "CTO" },
      { name: "Adriana Tiefenbach", role: "Head of Support Team" },
      { name: "Petra Svetik", role: "CMO" },
    ],
    2: [
      // Sales
      { name: "Petra Mertlová", role: "Account Manager SR" },
      { name: "Katja Janečková", role: "Account Manager CZ" },
      { name: "Slavomíra Uhrínková", role: "Account Manager SR" },
      { name: "Alena Ležovičová", role: "Account Manager SR" },
    ],
    3: [
      // Developers
      { name: "Marián Baňák", role: "App Developer" },
      { name: "Martin Breier", role: "Backend Developer" },
      { name: "Vladimír Čamaj", role: "Fullstack Developer" },
    ],
    4: [
      // Technical Support
      { name: "Volodymyr Dethiarenko", role: "Onsite Technician" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      <Topbar />
      <Navigation />
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row pl-4 md:pl-32 min-h-[400px] lg:min-h-[760px] relative pt-10 pb-20">
        <div className="flex flex-1 flex-col justify-center z-30 pr-4 md:pr-8 py-10 ">
          <h1 className="text-[28px] md:text-[38px] lg:text-[58px] font-bold leading-none mb-6">
            Contact us
          </h1>
          <p className="text-[16px] lg:text-[18px] leading-relaxed mb-8 pr-8">
            Would you like to know more? Write to us or call us.
          </p>

          <div className="flex flex-col gap-6">
            {/* Email */}
            <a href="mailto:hello@lurity.com" className="group">
              <div className="flex items-center cursor-pointer transition-transform hover:translate-x-2">
                <div className="w-14 h-14 mr-4 bg-[#CCF2A4] rounded-lg flex items-center justify-center group-hover:bg-[#b8e389] transition-colors">
                  <Mail className="w-6 h-6 text-[#152B08]" />
                </div>
                <p className="font-medium text-[18px]">hello@lurity.com</p>
              </div>
            </a>

            {/* Location 1 */}
            <div className="flex items-center">
              <div className="w-14 h-14 mr-4 bg-[#CCF2A4] rounded-md flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#152B08]" />
              </div>
              <p className="text-[18px] leading-tight">
                <span className="font-medium block">Vlárska 1746/32</span>
                <span className="text-gray-600">
                  831 01 Bratislava, Slovak Republic
                </span>
              </p>
            </div>

            {/* Location 2 */}
            <div className="flex items-center">
              <div className="w-14 h-14 mr-4 bg-[#CCF2A4] rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#152B08]" />
              </div>
              <p className="text-[18px] leading-tight">
                <span className="font-medium block">Korunní 2569/108</span>
                <span className="text-gray-600">
                  101 00 Prague 10, Czech Republic
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative flex-1 mr-8 py-2">
          {/* Floating Image */}
          <div
            className="absolute top-2 left-0 w-72 h-72 rounded overflow-hidden border-4 border-white shadow-lg"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="/1.png"
              alt="Person"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute bottom-0 right-14 w-72 h-72 rounded overflow-hidden border-4 border-white shadow-lg"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="/1.png"
              alt="Person"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Stats Box with Ripple Effect */}
          <div className="w-full h-full  rounded-2xl relative">
            {/* Stats Box with Ripple Effect */}

            {/* Ripple border effect */}
            <div className="absolute z-30 top-6 left-[240px]">
              <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute z-30 top-0 left-1/3 bg-magenta px-10 py-6 rounded-3xl shadow-lg shadow-pink-700/40">
              <div className="flex flex-col items-center justify-around h-24">
                <div className="text-xs font-semibold mb-1 uppercase">
                  headquarters
                </div>
                <div className="text-4xl font-black">SK</div>
              </div>
            </div>

            {/* Ripple border effect */}
            <div className="absolute z-30 bottom-6 left-[240px]">
              <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute z-30 bottom-0 left-1/3 bg-yellow px-10 py-6 rounded-3xl shadow-lg shadow-pink-700/40">
              <div className="flex flex-col items-center justify-around h-24">
                <div className="text-xs font-semibold mb-1 uppercase">
                  headquarters
                </div>
                <div className="text-4xl font-black">CZ</div>
              </div>
            </div>
          </div>
          {/* Decorative Dots */}
          <div
            className="absolute bottom-1/4 left-20 w-10 h-10 bg-cyan rounded animate-float"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="absolute z-30 top-32 right-24 w-10 h-10 bg-lime rounded animate-float"
            style={{ animationDelay: "0.8s" }}
          ></div>
          <div
            className="absolute z-30 bottom-20 left-40 w-5 h-5 bg-magenta rounded animate-float"
            style={{ animationDelay: "1.1s" }}
          ></div>
          <div
            className="absolute z-30 top-44 right-64 w-5 h-5 bg-yellow rounded animate-float"
            style={{ animationDelay: "0.6s" }}
          ></div>{" "}
        </div>
      </section>

      {/* Contact Form */}
      <section className="flex flex-col items-center justify-center py-16 px-4 bg-[#F3F7f9]">
        <div className="w-full max-w-4xl">
          <h2 className="text-center font-bold text-[32px] md:text-[36px] mb-10">
            Contact form
          </h2>

          <div className="bg-transparent p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="relative w-full">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="peer bg-transparent w-full px-4 pt-5 pb-2 text-gray-900 border-2 border-gray-300 rounded focus:border-[#626364] focus:outline-none transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute left-4 text-black text-base bg-[#F3F7F9] px-1 transition-all duration-200 
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-black 
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#626364]"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer bg-transparent w-full px-4 pt-5 pb-2 text-gray-900 border-2 border-gray-300 rounded focus:border-[#626364] focus:outline-none transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 text-black text-base bg-[#F3F7F9] px-1 transition-all duration-200 
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-black 
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#626364]"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="relative w-full">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="peer bg-transparent w-full px-4 pt-5 pb-2 text-gray-900 border-2 border-gray-300 rounded focus:border-[#626364] focus:outline-none transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="companyName"
                    className="absolute left-4 text-black text-base bg-[#F3F7F9] px-1 transition-all duration-200 
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-black 
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#626364]"
                  >
                    Company Name
                  </label>
                </div>

                {/* Phone Number */}
                <div className="relative w-full">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="peer bg-transparent w-full px-4 pt-5 pb-2 text-gray-900 border-2 border-gray-300 rounded focus:border-[#626364] focus:outline-none transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute left-4 text-black text-base bg-[#F3F7F9] px-1 transition-all duration-200 
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-black 
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#626364]"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative w-full">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="peer bg-transparent w-full px-4 pt-5 pb-2 text-gray-900 border-2 border-gray-300 rounded focus:border-[#626364] focus:outline-none transition-all resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 text-black text-base bg-[#F3F7F9] px-1 transition-all duration-200 
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-black 
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#626364]"
                >
                  Your Message
                </label>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 border-2 border-gray-300 rounded accent-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    By providing contact details in this form, I consent to
                    LURITY s.r.o. contacting me, sending relevant information,
                    and storing my contact details for this purpose.{" "}
                    <a
                      href="/terms-conditions"
                      className="underline text-blue-600 hover:text-blue-800"
                    >
                      More information about privacy.
                    </a>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 border-2 border-gray-300 rounded accent-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    Subscribe to our newsletter and stay updated!
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-[#1FC9FF] hover:bg-[#1FC9FF]/80 text-black font-bold py-4 px-6 rounded uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span>Send message</span>
                  <MoveRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col justify-center py-20 px-4">
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex gap-2 min-w-max px-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-sm uppercase font-semibold transition-all whitespace-nowrap ${
                  activeTab === index
                    ? "bg-[#CCF2A4] text-black shadow-lg transform scale-105"
                    : "bg-transparent text-gray-700 hover:bg-gray-50 hover:shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full mx-auto">
          {teamMembers[activeTab].map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-32 h-32 md:w-60 md:h-60 gap-4 mx-2 rounded-xl overflow-hidden bg-gradient-to-br from-blue-200 to-purple-200 mb-4 shadow-lg group-hover:shadow-2xl transition-all">
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-3xl bg-gradient-to-br from-blue-500 to-purple-500">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className=" w-10/12 ">
                <h3 className="font-bold text-left text-sm md:text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-[#4D6068] uppercase text-xs md:text-sm text-left leading-tight">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Section */}
      <div>
        <div className="flex flex-wrap items-center justify-center gap-8 p-5 bg-white rounded-2xl shadow-md">
          {/* Logo */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl">
            L
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left">
            <h1 className="text-lg font-semibold text-gray-800 uppercase leading-snug">
              Lucrity
            </h1>
            <h2 className="text-gray-400 text-[12px] -mt-1">@lucritycom</h2>
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-center">
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                222
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Posts</h3>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                856
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Followers</h3>
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-800 leading-snug">
                1k
              </h2>
              <h3 className="text-[12px] text-gray-400 -mt-1">Following</h3>
            </div>
          </div>

          {/* Follow Button */}
          <div>
            <button className="flex  gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium shadow-sm transition-all duration-300">
              <InstagramIcon />
              Follow
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* Box 1 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Box 2 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Box 3 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Box 4 */}
          <div className="group relative w-full sm:w-1/2 lg:w-1/4 h-72 overflow-hidden shadow-lg transform transition-all duration-300 ">
            {/* Background Image or Color */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600"></div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-6 items-center justify-center text-white text-2xl font-semibold">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">15</h2>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h2 className="text-base font-normal">2</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tempora doloribus rem. Error, aperiam nobis! Labore fugit,
                voluptates explicabo ex neque soluta voluptatibus earum iusto
                blanditiis nostrum quasi delectus consectetur!
              </p>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <Footer />
    </div>
  );
}
