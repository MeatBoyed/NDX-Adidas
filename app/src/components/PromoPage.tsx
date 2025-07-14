'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AdidasLogo from '@/components/AdidasLogo';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from './ui/card';
import Footer from './Footer';
import BrandingFooter from './BrandingFooter';

const PromoPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleBackToGame = () => {
        // Reset the game and go back to sign up
        router.push('/');
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !acceptTerms) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsRegistered(true);
        setIsSubmitting(false);
    };

    const containerVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const imageVariants: Variants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="min-h-screen animated-bg"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {/* Header */}
            <motion.header
                className="glossy-white text-black p-4 md:p-6 shadow-lg"
                variants={itemVariants}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-3 md:space-x-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <AdidasLogo size="md" className="text-black" animated={true} />
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-shimmer">Adidas Exclusives</h1>
                            <p className="text-xs md:text-sm text-gray-600">Event Collection</p>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={handleBackToGame}
                            variant="outline"
                            className="border-black text-black hover:bg-gray-100 button-press ripple text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
                        >
                            Back to Game
                        </Button>
                    </motion.div>
                </div>
            </motion.header>

            {/* Main Content */}
            <motion.main
                className="container mx-auto px-4 md:px-6 py-8 md:py-16"
                variants={itemVariants}
            >
                <div className="max-w-6xl mx-auto">
                    {/* Desktop Layout: Side by side, Mobile: Stacked */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                        {/* Image Section */}
                        <motion.div
                            className="order-1 lg:order-1"
                            variants={imageVariants}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1593287073863-c992914cb3e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Adidas exclusive event collection"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            className="order-2 lg:order-2 text-black space-y-6 md:space-y-8 lg:pt-0"
                            variants={itemVariants}
                        >
                            <div className="space-y-4 md:space-y-6">
                                <motion.h1
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    Exclusive Event
                                    <span className="block text-2xl md:text-3xl lg:text-4xl text-black/70 mt-2">
                                        Premium Collection
                                    </span>
                                </motion.h1>

                                <motion.p
                                    className="text-lg md:text-xl text-black/85 leading-relaxed"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    You&apos;ve unlocked access to our exclusive event collection.
                                    Register now to receive early access to limited drops,
                                    special discounts, and exclusive member-only releases.
                                </motion.p>

                                <motion.p
                                    className="text-base md:text-lg text-black/70"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    Join thousands of athletes and creators who are already part
                                    of the Adidas Exclusives community.
                                </motion.p>
                            </div>

                            {/* Registration Form */}
                            {!isRegistered ? (
                                <Card>

                                    <CardContent className="px-6 py-2 md:p-8 space-y-6">

                                        <motion.form
                                            onSubmit={handleRegister}
                                            className="space-y-4 md:space-y-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.9, duration: 0.6 }}
                                        >
                                            <div className="space-y-4">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email address"
                                                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg glossy-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 text-base md:text-lg"
                                                    required
                                                />

                                                <motion.div
                                                    className="flex items-start space-x-3"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="terms"
                                                        checked={acceptTerms}
                                                        onChange={(e) => setAcceptTerms(e.target.checked)}
                                                        className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black/30"
                                                        required
                                                    />
                                                    <label htmlFor="terms" className="text-sm md:text-base text-black/80 leading-relaxed">
                                                        I agree to the{' '}
                                                        <a href="#" className="text-black underline hover:text-black/70">
                                                            Terms & Conditions
                                                        </a>{' '}
                                                        and{' '}
                                                        <a href="#" className="text-black underline hover:text-black/70">
                                                            Privacy Policy
                                                        </a>
                                                        . I consent to receive marketing communications from Adidas.
                                                    </label>
                                                </motion.div>
                                            </div>

                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button
                                                    type="submit"
                                                    // disabled={!email || !acceptTerms || isSubmitting}
                                                    className="w-full glossy-black text-white py-6  hover:bg-black/20  text-lg md:text-xl font-semibold button-press ripple disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {isSubmitting ? (
                                                        <span className="flex items-center justify-center space-x-2">
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                            <span>Registering...</span>
                                                        </span>
                                                    ) : (
                                                        '🎯 Register for Exclusives'
                                                    )}
                                                </Button>
                                            </motion.div>
                                        </motion.form>
                                    </CardContent>
                                </Card>
                            ) : (
                                <motion.div
                                    className="text-center space-y-4 md:space-y-6 py-6 md:py-8"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="text-4xl md:text-6xl mb-4">🎉</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-black">You&apos;re In!</h3>
                                    <p className="text-lg md:text-xl text-black/85">
                                        Welcome to Adidas Exclusives. Check your email for confirmation
                                        and your exclusive member benefits.
                                    </p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            onClick={handleBackToGame}
                                            className="glossy-black text-white hover:opacity-80 px-6 md:px-8 py-3 md:py-4 text-lg font-semibold button-press"
                                        >
                                            Continue Playing
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.main>

            {/* Footer */}
            <Footer />
            <BrandingFooter />
        </motion.div>
    );
};

export default PromoPage;
