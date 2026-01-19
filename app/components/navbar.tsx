"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { List, X, Wallet, CaretRight } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useUser } from "@civic/auth/react";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(inputs.filter(Boolean).join(" "));
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { signIn, user } = useUser();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Features", href: "/#features" },
        { name: "About", href: "/#about" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-white/5 backdrop-blur-md border-white/10 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                                C
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                CadPay
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>


                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            {!user ? (
                                <button
                                    onClick={() => signIn()}
                                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-sm"
                                >
                                    <Wallet className="w-4 h-4" weight="fill" />
                                    Create Account
                                </button>
                            ) : (
                                <button className="px-5 py-2.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                                    <Wallet className="w-4 h-4" weight="fill" />
                                    Connected
                                </button>
                            )}
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden backdrop-blur-xl"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between text-2xl font-medium text-zinc-300 border-b border-white/10 pb-4"
                                    >
                                        {link.name}
                                        <CaretRight className="w-5 h-5 opacity-50" />
                                    </Link>
                                </motion.div>
                            ))}
                            {!user ? (
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => signIn()}
                                    className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
                                >
                                    <Wallet size={20} weight="fill" />
                                    Create Account
                                </motion.button>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="w-full mt-4 py-4 rounded-xl bg-white/10 text-white font-bold text-lg flex items-center justify-center gap-2"
                                >
                                    <Wallet size={20} weight="fill" />
                                    Connected
                                </motion.div>
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
