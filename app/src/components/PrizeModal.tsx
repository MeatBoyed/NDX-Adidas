'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import AdidasLogo from './AdidasLogo';
import { Prize } from '@/lib/types';

interface PrizeModalProps {
    prize: Prize;
    isOpen: boolean;
    onClose: () => void;
    onPlayAgain: () => void;
}

const PrizeModal: React.FC<PrizeModalProps> = ({
    prize,
    isOpen,
    onClose,
    onPlayAgain
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.7, opacity: 0, y: 50 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }
                        }}
                        exit={{ scale: 0.8, opacity: 0, y: -50 }}
                        className="w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Card className="glossy-white text-black border-0 shadow-2xl card-glow relative overflow-hidden">
                            {prize.isWin && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-transparent to-green-200/20"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}

                            <CardHeader className="text-center relative z-10">
                                <motion.div
                                    className="flex justify-center mb-4"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                >
                                    <AdidasLogo size="lg" className="text-black" animated={true} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <CardTitle className="text-2xl font-bold mb-2">
                                        {prize.isWin ? (
                                            <span className="text-shimmer">
                                                You won 🎉
                                            </span>
                                        ) : (
                                            '😔 Better Luck Next Time!'
                                        )}
                                    </CardTitle>
                                </motion.div>
                            </CardHeader>

                            <CardContent className="text-center space-y-6 relative z-10">

                                <motion.div
                                    className="space-y-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-xl font-bold">{prize.name}</h3>
                                    <p className="text-gray-600 ">{prize.description}</p>
                                </motion.div>

                                {prize.isWin && prize.voucherCode && (
                                    <motion.div
                                        className="glossy-black p-6 rounded-lg shine-effect"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.6, type: "spring" }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <p className="text-white text-sm font-medium mb-3">Your Voucher Code has been delivered.</p>
                                        <div className="bg-white text-black px-2 py-2 rounded font-mono  tracking-wider font-bold">
                                            {/* {prize.voucherCode} */} * * * *
                                        </div>
                                        <p className="text-white text-xs mt-3">
                                            {/* 📱 Screenshot this code to use it later! */}
                                            📨 Check your Email / SMS for your Voucher Code.
                                        </p>
                                    </motion.div>
                                )}

                                <motion.div
                                    className="space-y-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            onClick={onClose}
                                            className="w-full glossy-black text-white hover:bg-gray-800 button-press py-3 text-lg font-semibold"
                                        >
                                            {prize.isWin ? '🎯 Awesome!' : 'Close'}
                                        </Button>
                                    </motion.div>
                                    {!prize.isWin && (
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                onClick={onPlayAgain}
                                                variant="outline"
                                                className="w-full border-black text-black hover:bg-gray-100 button-press py-3 text-lg font-semibold"
                                            >
                                                🎲 Play Again
                                            </Button>
                                        </motion.div>
                                    )}
                                </motion.div>

                                {prize.isWin && (
                                    <motion.p
                                        className="text-xs text-gray-500 italic"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        ✨ Thank you for being part of ! Check your email for more exclusive offers.
                                    </motion.p>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PrizeModal;
