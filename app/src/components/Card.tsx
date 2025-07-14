'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AdidasLogo from './AdidasLogo';
import { Prize } from '@/lib/types';
import AdidasOfficialLogo from './AdidasOfficialLogo';

interface GameCardProps {
    cardNumber: number;
    isFlipped: boolean;
    isSelected: boolean;
    prize: Prize | null;
    onCardClick: (cardNumber: number) => void;
    disabled: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
    cardNumber,
    isFlipped,
    isSelected,
    prize,
    onCardClick,
    disabled
}) => {
    const handleClick = () => {
        if (!disabled && !isSelected) {
            onCardClick(cardNumber);
        }
    };

    return (
        <motion.div
            className="perspective-1000"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: cardNumber * 0.1
                }
            }}
            whileHover={!disabled && !isSelected ? {
                scale: 1.08,
                y: -10
            } : undefined}
            whileTap={!disabled && !isSelected ? { scale: 0.95 } : undefined}
        >
            <motion.div
                className={`relative w-32 h-48 cursor-pointer transform-style-preserve-3d ${disabled && !isSelected ? 'cursor-not-allowed' : ''
                    }`}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    opacity: disabled && !isSelected ? 0.5 : 1
                }}
                transition={{
                    rotateY: { duration: 0.8 }
                }}
                onClick={handleClick}
            >
                {/* Card Back (Face Down) */}
                <motion.div
                    className="absolute inset-0 backface-hidden glossy-black border-2 border-white rounded-lg flex flex-col items-center justify-center p-4 shine-effect card-glow"
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: cardNumber * 0.1 + 0.3,
                            duration: 0.5,
                            type: "spring"
                        }}
                    >
                        {/* <AdidasLogo size="lg" className="text-white fill-white bg-white" animated={true} /> */}
                        {/* <AdidasOfficialLogo className="text-white fill-white bg-white" /> */}
                        <AdidasOfficialLogo
                            stripeColor="white"
                            textColor="white"
                            className="w-20 h-20"
                        />


                    </motion.div>
                    <motion.div
                        className="text-white text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: cardNumber * 0.1 + 0.5,
                            duration: 0.4
                        }}
                    >
                        <p className="text-xs font-bold text-shimmer-white">Adidas</p>
                        <p className="text-xs">vouchers</p>
                    </motion.div>

                    {/* Pulsing border effect */}
                    <motion.div
                        className="absolute inset-0 border-2 border-white rounded-lg pointer-events-none"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* Card Front (Face Up - Prize Revealed) */}
                <motion.div
                    className="absolute inset-0 backface-hidden rotate-y-180 glossy-white border-2 border-black rounded-lg flex flex-col items-center justify-center p-4"
                >
                    {prize && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                            className="text-center w-full"
                        >
                            <motion.div
                                className="text-center mb-2"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                <AdidasLogo size="md" className="text-black mx-auto mb-2" animated={true} />
                                {prize.isWin ? (
                                    <motion.div
                                        className="text-green-600 text-2xl font-bold"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0]
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        🎉
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        className="text-red-500 text-xl"
                                        animate={{ scale: [1, 0.9, 1] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        😔
                                    </motion.div>
                                )}
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                <h3 className="text-sm font-bold text-black mb-1">
                                    {prize.name}
                                </h3>
                                <p className="text-xs text-gray-600 mb-2">
                                    {prize.description}
                                </p>
                                {prize.voucherCode && (
                                    <motion.div
                                        className="glossy-black text-white px-2 py-1 rounded text-xs font-mono shine-effect"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1, duration: 0.4, type: "spring" }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {prize.voucherCode}
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default GameCard;
