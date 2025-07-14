'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AdidasLogo from '@/components/AdidasLogo';
import { useRouter } from 'next/navigation';

const PromoPage: React.FC = () => {
    const router = useRouter();

    const handleBackToGame = () => {
        // Reset the game and go back to sign up
        router.push('/');
    };

    const containerVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
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

    const productVariants: Variants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
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
                className="glossy-white text-black p-6 shadow-lg"
                variants={itemVariants}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <AdidasLogo size="md" className="text-black" animated={true} />
                        <div>
                            <h1 className="text-2xl font-bold text-shimmer">Adidas Exclusives</h1>
                            <p className="text-sm text-gray-600">Premium Collection</p>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={handleBackToGame}
                            variant="outline"
                            className="border-black text-black hover:bg-gray-100 button-press ripple"
                        >
                            Play Again
                        </Button>
                    </motion.div>
                </div>
            </motion.header>

            {/* Hero Section */}
            <motion.section
                className="relative py-20 px-6 text-center text-white"
                variants={itemVariants}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 text-glow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Exclusive Collection
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-white/80 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Discover premium athletic wear and limited edition releases
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className="glossy-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold button-press ripple">
                            Shop Now
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Background Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12"></div>
                </motion.div>
            </motion.section>

            {/* Featured Products */}
            <motion.section
                className="py-16 px-6"
                variants={itemVariants}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-center text-white mb-12 text-glow"
                        variants={itemVariants}
                    >
                        Featured Exclusives
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Product 1 */}
                        <motion.div
                            className="glossy-white rounded-lg overflow-hidden card-glow"
                            variants={productVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <AdidasLogo size="xl" className="text-black opacity-20" animated={true} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-2">Ultraboost 22</h3>
                                <p className="text-gray-600 mb-4">Premium running shoe with enhanced comfort</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-black">$180</span>
                                    <Button className="glossy-black text-white hover:opacity-80 button-press">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Product 2 */}
                        <motion.div
                            className="glossy-white rounded-lg overflow-hidden card-glow"
                            variants={productVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <AdidasLogo size="xl" className="text-black opacity-20" animated={true} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-2">Stan Smith Limited</h3>
                                <p className="text-gray-600 mb-4">Iconic sneaker in premium leather finish</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-black">$120</span>
                                    <Button className="glossy-black text-white hover:opacity-80 button-press">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Product 3 */}
                        <motion.div
                            className="glossy-white rounded-lg overflow-hidden card-glow"
                            variants={productVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <AdidasLogo size="xl" className="text-black opacity-20" animated={true} />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-2">NMD R1 V2</h3>
                                <p className="text-gray-600 mb-4">Street-ready with modern boost technology</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-black">$140</span>
                                    <Button className="glossy-black text-white hover:opacity-80 button-press">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Special Offers */}
            <motion.section
                className="py-16 px-6"
                variants={itemVariants}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Offer 1 */}
                        <motion.div
                            className="glossy-black text-white p-8 rounded-lg shine-effect"
                            variants={productVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-3xl font-bold mb-4 text-glow">Limited Time</h3>
                            <p className="text-xl mb-6 text-white/80">30% off on all premium footwear</p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="glossy-white text-black hover:bg-gray-200 button-press ripple">
                                    Shop Sale
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Offer 2 */}
                        <motion.div
                            className="glossy-white text-black p-8 rounded-lg shine-effect"
                            variants={productVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-3xl font-bold mb-4 text-shimmer">AdiClub Members</h3>
                            <p className="text-xl mb-6 text-gray-600">Free shipping on orders over $100</p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="glossy-black text-white hover:opacity-80 button-press ripple">
                                    Join Now
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Newsletter */}
            <motion.section
                className="py-16 px-6 text-center text-white"
                variants={itemVariants}
            >
                <div className="max-w-2xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold mb-6 text-glow"
                        variants={itemVariants}
                    >
                        Stay Updated
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/80 mb-8"
                        variants={itemVariants}
                    >
                        Get exclusive access to new releases and special offers
                    </motion.p>
                    <motion.div
                        className="flex gap-4 justify-center"
                        variants={itemVariants}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 max-w-md px-4 py-3 rounded-lg glossy-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="glossy-white text-black hover:bg-gray-200 px-6 py-3 button-press ripple">
                                Subscribe
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer */}
            <motion.footer
                className="glossy-white text-black p-8"
                variants={itemVariants}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <AdidasLogo size="md" className="text-black mx-auto mb-4" animated={true} />
                    <p className="text-gray-600 mb-4">© 2025 Adidas. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 text-sm">
                        <a href="#" className="hover:text-black/70 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-black/70 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-black/70 transition-colors">Contact Us</a>
                    </div>
                </div>
            </motion.footer>
        </motion.div>
    );
};

export default PromoPage;
