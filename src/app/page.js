"use client";
import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LovePage() {
  const [page, setPage] = useState("intro1");
  const [yesSize, setYesSize] = useState(1);
  const [noTextIndex, setNoTextIndex] = useState(0);
  const [password, setPassword] = useState("");

  const containerRef = useRef(null);
  const SECRET_EMOJI = "🐤";

  const noTexts = [
    "No",
    "Thambi enna thimira",
    "hello",
    "plijjj ",
    "pleeeeeej 😭",
    "anniayaym 😭",
    "alooooooooo 😭",
    "plsplsplsplsplspls 😭",
    "na paavammmmmmm 😭",
    "na paavamm 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
    "na paavam 😭",
  ];

  const hearts = useMemo(() => Array.from({ length: 10 }), []);

  const pageAnim = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const triggerShake = () => {
    const el = containerRef.current;
    if (!el) return;
    el.classList.remove("shake");
    void el.offsetWidth;
    el.classList.add("shake");
  };

  const handleNo = () => {
    setYesSize((s) => s + 0.35);
    setNoTextIndex((i) => (i + 1) % noTexts.length);
    triggerShake();
  };

  const handleYes = () => setPage("done");

  const checkPassword = () => {
    if (password === SECRET_EMOJI) {
      setPassword("");
      setPage("wholesome1");
    } else {
      triggerShake();
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center relative"
    >
      <motion.div
        className="pointer-events-none absolute w-[120vw] h-[120vw] rounded-full bg-pink-300/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="pointer-events-none absolute inset-0">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-2xl"
            style={{ left: `${5 + i * 9}%`, bottom: -40 }}
            animate={{ y: [-20, -140], opacity: [0, 1, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.6 }}
          >
            💗
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {page === "intro1" && (
          <motion.div key="intro1" {...pageAnim} className="text-center px-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Heyy Malarvizhiii !!
            </h1>
            <button
              onClick={() => setPage("intro2")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}

        {page === "intro2" && (
          <motion.div key="intro2" {...pageAnim} className="text-center px-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Ennada idhu nu paakuriya 😂😂
            </h1>
            <button
              onClick={() => setPage("intro3")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}

        {page === "intro3" && (
          <motion.div key="intro3" {...pageAnim} className="text-center px-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              I thought I'll do something special for you today 
            </h1>
            <button
              onClick={() => setPage("intro4")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}

        {page === "intro4" && (
          <motion.div key="intro4" {...pageAnim} className="text-center px-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              I hope you'll like it 🥰🥰
            </h1>
            <button
              onClick={() => setPage("intro5")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}

        {page === "intro5" && (
          <motion.div key="intro5" {...pageAnim} className="text-center px-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Modhalla nee than link use panriya nu check pananum 👹👹👹👹👹 
            </h1>
            <button
              onClick={() => setPage("password")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}
        
        {page === "password" && (
          <motion.div key="password" {...pageAnim} className="text-center px-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Unakkum enakkum mattum therinja emoji type pannu parpom 💗
            </h2>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkPassword()}
              placeholder="emoji ah inga type pannu once"
              className="text-center text-2xl px-4 py-3 rounded-2xl border border-pink-200 shadow-inner outline-none mb-4"
            />

            <button
              onClick={checkPassword}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Unlock 💗
            </button>
          </motion.div>
        )}

        {page === "wholesome1" && (
          <motion.div key="wholesome1" {...pageAnim} className="text-center px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Paravaillayaeeee, ok ippo nee than nu verify panniyaachu 😎😎
            </h2>
            <button
              onClick={() => setPage("wholesome2")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}

        {page === "wholesome2" && (
          <motion.div key="wholesome2" {...pageAnim} className="text-center px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              unakaaga edhaachu na indha mathri special ah pananum nu yosichu iruken so spent some time to do this for you 🫶
            </h2>
            <button
              onClick={() => setPage("wholesome3")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}

        {page === "wholesome3" && (
          <motion.div key="wholesome3" {...pageAnim} className="text-center px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              I know i'm very late, I tried to get this done early, but anyways suthi valaikaama point ku varen 💖
            </h2>
            <button
              onClick={() => setPage("ask")}
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-lg"
            >
              Next 💗
            </button>
          </motion.div>
        )}

        {page === "ask" && (
          <motion.div key="ask" {...pageAnim} className="text-center px-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">
              Will you be my Valentine? 💖
            </h2>

            <div className="flex gap-6 items-center justify-center">
              <motion.button
                animate={{ scale: yesSize }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                onClick={handleYes}
                className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg shadow-xl"
              >
                Yes 💗
              </motion.button>

              <motion.button
                onClick={handleNo}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6 }}
                className="px-5 py-2 rounded-2xl border border-gray-400 text-gray-600 text-lg bg-white/70 backdrop-blur"
              >
                {noTexts[noTextIndex]}
              </motion.button>
            </div>
          </motion.div>
        )}

        {page === "done" && (
          <motion.div key="done" {...pageAnim} className="text-center px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-semibold text-gray-800"
            >
              Thank you for choosing me as your Valentine, I will try to do everything I can in my power to keep you happy 🥰 Looking forward to our date tomorrow... Happy Valentine's Day Malarvizhiiiiiiiii  💗
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .shake { animation: shake 0.35s ease; }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
