"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wallet, Lightning } from "phosphor-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-gray-300">Live on Solana Devnet</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:leading-[1.1]"
                >
                    Payments Reimagined <br /> for the <span className="text-blue-500">Modern World</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl text-lg text-gray-400 sm:text-xl"
                >
                    Experience lightning-fast, secure, and low-cost transactions.
                    CadPay brings the power of Solana to your fingertips.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <button className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        <Wallet size={20} weight="bold" />
                        Connect Wallet
                        <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                        <Lightning size={20} weight="fill" className="text-yellow-400" />
                        View Features
                    </button>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </section>
    );
}
