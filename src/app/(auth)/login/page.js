"use client";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaBook } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-600 to-violet-600 p-6">
      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        {/* Logo + Title */}
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
            Track your learning. Stay consistent.
          </p>
        </motion.div>

        {/* Login Form */}
        <form className="flex flex-col space-y-5">
          <div>
            <label className="text-white/90 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div>
            <label className="text-white/90 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Forgot Password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-lg bg-white/90 text-indigo-700 font-medium shadow-md hover:bg-white transition"
          >
            Log In
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
          Don’t have an account?{" "}
          <Link href="/register" className="text-white hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
