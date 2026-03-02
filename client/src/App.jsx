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

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        "https://script.google.com/macros/s/AKfycbzyu8uKrge6GzG2h9AQS15uRP_V2yVVZK5g9Isg36d4bBFosncVauRiGvlXlSjyS54A/exec",
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

  return (
    <div className="font-poppins bg-gradient-to-b from-white via-blue-50 to-purple-50 text-gray-900 scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
              Neuro<span className="text-purple-700">Science</span>
            </h1>
          </div>

          <button onClick={toggleMenu} className="md:hidden flex flex-col space-y-1">
            <span
              className={`h-0.5 w-6 bg-slate-900 transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-slate-900 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-slate-900 transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          <ul
            className={`absolute md:static top-16 right-6 bg-white md:bg-transparent shadow-lg md:shadow-none rounded-xl p-5 md:p-0 md:flex md:space-x-10 text-gray-800 font-semibold transition-all duration-300 ${
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
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}

      {/* MISSION SECTION */}
      <MissionSection />

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <video src={videoabout} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:col-span-1 lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
              About <span className="text-purple-700">NeuroScience</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We empower the next generation of innovators to explore the brain
              and human-computer interfaces through affordable, open hardware
              and software. Our goal is to make neuroscience education accessible
              and inspiring.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <video src={videoabout2} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Have questions or want to collaborate? We’d love to hear from you!
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/40 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["name", "email", "phone", "age", "occupation"].map((field) => (
                <div key={field} className={field === "occupation" ? "md:col-span-2" : ""}>
                  <label className="block text-gray-700 font-medium mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : field === "age" ? "number" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>
            </div>

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
                and{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>.
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
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
