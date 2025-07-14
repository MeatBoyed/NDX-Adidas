'use client';

import React from 'react';
import GameCard from './Card';
import { Prize } from '@/lib/types';

interface CardGridProps {
    selectedCard: number | null;
    prize: Prize | null;
    onCardClick: (cardNumber: number) => void;
    hasPlayedGame: boolean;
}

const CardGrid: React.FC<CardGridProps> = ({
    selectedCard,
    prize,
    onCardClick,
    hasPlayedGame
}) => {
    const cardNumbers = [1, 2, 3, 4, 5];

    return (
        <div className="flex flex-wrap justify-center gap-6 max-w-md mx-auto">
            {cardNumbers.map((cardNumber) => (
                <GameCard
                    key={cardNumber}
                    cardNumber={cardNumber}
                    isFlipped={selectedCard === cardNumber}
                    isSelected={selectedCard === cardNumber}
                    prize={selectedCard === cardNumber ? prize : null}
                    onCardClick={onCardClick}
                    disabled={hasPlayedGame}
                />
            ))}
        </div>
    );
};

export default CardGrid;