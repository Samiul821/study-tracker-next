"use client";
import { motion } from "framer-motion";
import { FaBook, FaGoogle, FaFacebookF, FaUpload } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    image: null,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-600 to-violet-600 p-6">
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="flex items-center space-x-2">
            <FaBook className="text-white text-3xl" />
            <h1 className="text-white text-3xl font-semibold tracking-wide">
              Study Tracker
            </h1>
          </div>
          <p className="text-white/80 mt-2 text-sm">
            Join now and organize your study journey.
          </p>
        </motion.div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div>
            <label className="text-white/90 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div>
            <label className="text-white/90 text-sm">Phone Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="+880 1XXX-XXXXXX"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div>
            <label className="text-white/90 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-white/90 text-sm">Profile Image</label>
            <div className="mt-1 flex items-center justify-between bg-white/20 rounded-lg px-4 py-2 cursor-pointer border border-white/30 hover:bg-white/30 transition">
              <label
                htmlFor="image"
                className="flex items-center gap-2 text-white cursor-pointer"
              >
                <FaUpload />
                <span>
                  {formData.image ? formData.image.name : "Upload from imgbb"}
                </span>
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </div>
          </div>

          <div>
            <label className="text-white/90 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-lg bg-white/90 text-indigo-700 font-medium shadow-md hover:bg-white transition"
          >
            Register
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/30"></div>
          <span className="px-3 text-white/70 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg shadow"
          >
            <FaGoogle />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg shadow"
          >
            <FaFacebookF />
          </motion.button>
        </div>

        {/* Footer */}
        <p className="text-center text-white/70 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
