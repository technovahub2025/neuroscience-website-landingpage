import React, { useState } from "react";
import { motion } from "framer-motion";
import videoabout from "./assets/demo.mp4";
import videoabout2 from "./assets/demo2.mp4";

import logo from "./assets/logo.png";
import MissionSection from "./components/MissionSection";

const App = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  age: "",
  occupation: "",
  message: "",
  terms: false,
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((s) => ({ ...s, [name]: value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!form.terms) {
    alert("Please agree to the Terms & Conditions before submitting.");
    return;
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyHz6FjGHzEs0fCPnvzrt_zquj4NBVK1vu4izT1lRPsum4GCtORs69ZVTnXdGNFNMxQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: new FormData(e.target),
      }
    );

    alert(`✅ Thanks ${form.name || "there"}! Your message was sent successfully.`);
    setForm({
      name: "",
      email: "",
      phone: "",
      age: "",
      occupation: "",
      message: "",
      terms: false,
    });
  } catch (error) {
    alert("❌ Error connecting to Google Sheet!");
    console.error(error);
  }
};


  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="font-poppins text-slate-900 bg-gray-50 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-10">
          <div className=" text-2xl md:text-4xl font-bold text-blue-800 tracking-tight">
            Neuro<span className="text-purple-700">Science</span>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1"
          >
            <span
              className={`h-0.5 w-6 bg-slate-900 transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-slate-900 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-slate-900 transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Nav Links */}
          <ul
            className={`absolute md:static top-16 right-4 md:right-auto bg-white md:bg-transparent shadow-lg md:shadow-none rounded-xl p-4 md:p-0 space-y-4 md:space-y-0 md:flex md:space-x-8 font-medium transition-all duration-300 ${
              menuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-indigo-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
          <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden "
    >

       {/* Decorative shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96  bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply opacity-60 animate-pulse"></div>
      

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto text-white px-4"
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="w-52 h-52 md:w-84 md:h-84 mx-auto rounded-full border-4 border-white/30 backdrop-blur-sm shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

      <div className="text-center px-4 md:px-8">
  <h2 className="text-2xl md:text-5xl font-bold mt-8 text-gray-900 leading-snug">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
      TechnovaHub&nbsp;
    </span>
    <span className="text-gray-800">| Empowering Innovation in Neuroscience |</span>
  </h2>

  <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
    Innovating neuroscience and human-computer interaction through
    accessible technology.
  </p>
</div>

        <div className="mt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>

      {/* Mission Section */}
      <MissionSection />

      {/* About Section */}
    <section
  id="about"
  className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
    {/* Left Video */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[90vh]  aspect-video rounded-3xl overflow-hidden shadow-2xl"
    >
      <video
        src={videoabout}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      ></video>

      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-purple-600/10 to-transparent"></div>
    </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[90vh]  aspect-video rounded-3xl overflow-hidden shadow-2xl"
    >
      <video
        src={videoabout2}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      ></video>

      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-purple-600/10 to-transparent"></div>
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
        About <span className="text-purple-700">NeuroScience</span>
      </h2>
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
        We empower the next generation of innovators to explore the brain
        and human-computer interfaces through affordable, open hardware and
        software. Our goal is to make neuroscience education accessible to
        all — inspiring curiosity, creativity, and innovation.
      </p>

      <a
        href="#contact"
        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        Get in Touch
      </a>
    </motion.div>
  </div>
</section>








      {/* Contact Section */}
  <section
  id="contact"
  className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
>
  {/* Decorative Gradient Blobs */}
  <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative max-w-3xl mx-auto text-center px-6 z-10"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 mb-6">
      Get in Touch
    </h2>

    <p className="text-gray-600 mb-10 text-lg">
      Have questions or want to collaborate? We’d love to hear from you!
    </p>

   <form
  onSubmit={handleSubmit}
  className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/40 space-y-8"
>
  {/* Two-Column Grid for Inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Name */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Full Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        placeholder="Enter your full name"
        required
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        placeholder="Enter your email"
        required
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        placeholder="Enter your phone number"
        required
      />
    </div>

    {/* Age */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Age</label>
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        placeholder="Enter your age"
        min="10"
        max="100"
        required
      />
    </div>

    {/* Occupation */}
    <div className="md:col-span-2">
      <label className="block text-gray-700 font-medium mb-2">Occupation</label>
      <input
        type="text"
        name="occupation"
        value={form.occupation}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        placeholder="Student / Researcher / Engineer"
        required
      />
    </div>

    {/* Message */}
    <div className="md:col-span-2">
      <label className="block text-gray-700 font-medium mb-2">Message</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        placeholder="Write your message here..."
        required
      />
    </div>
  </div>

  {/* Terms Checkbox */}
  <div className="flex items-start space-x-3">
    <input
      type="checkbox"
      name="terms"
      checked={form.terms}
      onChange={(e) => setForm((f) => ({ ...f, terms: e.target.checked }))}
      className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
      required
    />
    <label className="text-gray-700 text-sm text-left">
      I agree to the{" "}
      <a href="#" className="text-indigo-600 hover:underline">
        Terms & Conditions
      </a>{" "}
      and the{" "}
      <a href="#" className="text-indigo-600 hover:underline">
        Privacy Policy
      </a>.
    </label>
  </div>

  {/* Submit Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    type="submit"
    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all shadow-lg"
  >
    Send Message
  </motion.button>
</form>

  </motion.div>
</section>














      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-6 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} NeuroScience — Powered by{" "}
          <span className="font-semibold text-purple-300">Technovahub</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
