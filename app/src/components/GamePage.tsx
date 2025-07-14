'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from './ui/button';
import AdidasLogo from './AdidasLogo';
import CardGrid from './CardGrid';
import PrizeModal from './PrizeModal';
import { GameService } from '@/lib/services';
import { User, Prize } from '@/lib/types';
import BrandingFooter from './BrandingFooter';
import { useRouter } from 'next/router';

interface GamePageProps {
    user: User;
    selectedCard: number | null;
    prize: Prize | null;
    hasPlayedGame: boolean;
    onResetGame: () => void;
}

const GamePage: React.FC<GamePageProps> = ({
    user,
    selectedCard: initialSelectedCard,
    prize: initialPrize,
    hasPlayedGame: initialHasPlayedGame,
    onResetGame
}) => {
    const [selectedCard, setSelectedCard] = useState<number | null>(initialSelectedCard);
    const [prize, setPrize] = useState<Prize | null>(initialPrize);
    const [hasPlayedGame, setHasPlayedGame] = useState(initialHasPlayedGame);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleCardClick = (cardNumber: number) => {
        if (hasPlayedGame || selectedCard !== null) return;

        const wonPrize = GameService.playCard(cardNumber);
        setSelectedCard(cardNumber);
        setPrize(wonPrize);
        setHasPlayedGame(true);

        // Show modal after animation completes
        setTimeout(() => {
            setShowModal(true);
        }, 1000);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        router.push("/promo")
    };

    const handlePlayAgain = () => {
        setShowModal(false);
        // Reset local state
        setSelectedCard(null);
        setPrize(null);
        setHasPlayedGame(false);
        // Reset session storage
        GameService.updateGameState({
            hasPlayedGame: false,
            selectedCard: null,
            prize: null
        });
    };

    const handleCompleteReset = () => {
        onResetGame();
    };

    const pageVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const sectionVariants: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <motion.div
            className="min-h-screen animated-bg text-white"
            variants={pageVariants}
            initial="initial"
            animate="animate"
        >
            {/* Header */}
            <motion.div
                className="glossy-white text-black p-4 shadow-lg "
                variants={sectionVariants}
            >
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-3"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <AdidasLogo size="md" className="text-black max-w-16" animated={true} />
                        <div>
                            {/* <motion.h1
                                className="text-xl font-bold text-shimmer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                 Rewards
                            </motion.h1> */}
                            <motion.p
                                className="text-sm text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                Welcome, <span className="font-semibold">{user.fullName}</span>!
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={handleCompleteReset}
                                variant="outline"
                                size="sm"
                                className="border-black text-black hover:bg-gray-100 button-press shine-effect"
                            >
                                Reset Game
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Main Game Area */}
            <motion.div
                className="max-w-4xl mx-auto pt-4 p-2"
                variants={sectionVariants}
            >
                <motion.div
                    className="text-center mb-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl font-bold mb-4 text-black"
                        animate={{
                            textShadow: [
                                "0 0 10px rgba(255,255,255,0.3)",
                                "0 0 20px rgba(255,255,255,0.5)",
                                "0 0 10px rgba(255,255,255,0.3)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {hasPlayedGame ? 'Game Complete!' : 'Choose Your Card'}
                    </motion.h2>
                    {!hasPlayedGame ? (
                        <motion.p
                            className="text-black/80 mb-6 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Select one card to have a change of winning {' '}
                            <motion.span
                                className="font-bold text-black"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                our vouchers and prizes.
                            </motion.span>{' '}
                            {/* of winning something amazing! */}
                        </motion.p>
                    ) : (
                        <motion.p
                            className="text-gray-300 mb-6 text-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            {prize?.isWin
                                ? '🎉 Congratulations! You won a fantastic prize! 🎉'
                                : '😔 Better luck next time! Feel free to play again.'
                            }
                        </motion.p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <CardGrid
                        selectedCard={selectedCard}
                        prize={prize}
                        onCardClick={handleCardClick}
                        hasPlayedGame={hasPlayedGame && prize?.isWin === true}
                    />
                </motion.div>

                {hasPlayedGame && !prize?.isWin && (
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={handlePlayAgain}
                                className="glossy-white text-black hover:bg-gray-200 button-press shine-effect px-8 py-3 text-lg font-semibold"
                            >
                                🎲 Try Again
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>

            {/* Prize Modal */}
            {prize && (
                <PrizeModal
                    prize={prize}
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    onPlayAgain={handlePlayAgain}
                />
            )}

            {/* Footer */}
            <motion.div
                className="glossy-white text-black p-4 mt-16"
                variants={sectionVariants}
            >
                <motion.div
                    className="max-w-4xl mx-auto text-center text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <p className="font-medium">© 2025 Adidas. This is a prototype demonstration.</p>
                    <p className="mt-1">Terms and conditions apply. Prizes are simulated for demo purposes.</p>
                </motion.div>
            </motion.div>
            <BrandingFooter />
        </motion.div>
    );
};

export default GamePage;