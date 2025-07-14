'use client';

import React, { useState, useEffect } from 'react';
import SignUpForm from '@/components/SignUpForm';
import GamePage from '@/components/GamePage';
import { GameService } from '@/lib/services';
import { User, GameState } from '@/lib/types';

export default function Home() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load game state from sessionStorage on component mount
    const savedState = GameService.getGameState();
    setGameState(savedState);
    setIsLoading(false);
  }, []);

  const handleSignUp = (user: User) => {
    GameService.saveUser(user);
    const newState = GameService.getGameState();
    setGameState(newState);
  };

  const handleResetGame = () => {
    GameService.resetGame();
    setGameState(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Show sign up form if user hasn't signed up yet
  if (!gameState?.hasSignedUp || !gameState?.user) {
    return <SignUpForm onSignUp={handleSignUp} />;
  }

  // Show game page if user has signed up
  return (
    <GamePage
      user={gameState.user}
      selectedCard={gameState.selectedCard}
      prize={gameState.prize}
      hasPlayedGame={gameState.hasPlayedGame}
      onResetGame={handleResetGame}
    />
  );
}
