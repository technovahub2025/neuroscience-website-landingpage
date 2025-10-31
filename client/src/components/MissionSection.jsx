import React from "react";
import {
  Brain,
  Puzzle,
  Accessibility,
  BookOpen,
  Laptop,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const floatAnim = {
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: "Education",
    desc: "Interactive learning kits designed to bring neuroscience and HCI/BCI concepts to life.",
  },
  {
    icon: <Puzzle className="w-10 h-10 text-purple-600" />,
    title: "Customizability",
    desc: "Fully modular — expand your ideas by integrating your own sensors and hardware.",
  },
  {
    icon: <Accessibility className="w-10 h-10 text-pink-600" />,
    title: "Accessibility",
    desc: "Affordable, open, and user-friendly tools built for students, makers, and researchers.",
  },
  {
    icon: <Brain className="w-10 h-10 text-green-600" />,
    title: "All-in-One Solution",
    desc: "Everything you need — hardware, software, tutorials, and community — all in one place.",
  },
  {
    icon: <Laptop className="w-10 h-10 text-orange-600" />,
    title: "Practical Application",
    desc: "Turn theory into action through projects in robotics, wearables, and neuroscience tech.",
  },
  {
    icon: <Users className="w-10 h-10 text-cyan-600" />,
    title: "Community",
    desc: "Join a global network of innovators who share, learn, and grow together.",
  },
];

const MissionSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative background blur */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            We’re on a mission to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              democratize Neuroscience
            </span>
          </h2>
          <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Making neuroscience tools accessible, affordable, and inspiring for
            everyone — from curious learners to groundbreaking researchers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group bg-white/70 backdrop-blur-lg border border-gray-200 hover:border-blue-200 transition-all duration-500 rounded-3xl shadow-sm hover:shadow-2xl p-8 flex flex-col items-start"
            >
              <motion.div
                variants={floatAnim}
                initial="initial"
                animate="animate"
                className="mb-5"
              >
                {f.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {f.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-700 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
