import { User, GameState, Prize, PRIZE_POOL } from './types';

const STORAGE_KEYS = {
    GAME_STATE: 'adidas_game_state',
    USER_DATA: 'adidas_user_data'
} as const;

export class GameService {
    static saveUser(user: User): void {
        sessionStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));

        const gameState: GameState = {
            hasSignedUp: true,
            hasPlayedGame: false,
            user,
            selectedCard: null,
            prize: null
        };

        sessionStorage.setItem(STORAGE_KEYS.GAME_STATE, JSON.stringify(gameState));
    }

    static getGameState(): GameState | null {
        const stored = sessionStorage.getItem(STORAGE_KEYS.GAME_STATE);
        return stored ? JSON.parse(stored) : null;
    }

    static updateGameState(updates: Partial<GameState>): void {
        const currentState = this.getGameState();
        if (!currentState) return;

        const newState = { ...currentState, ...updates };
        sessionStorage.setItem(STORAGE_KEYS.GAME_STATE, JSON.stringify(newState));
    }

    static generateRandomPrize(): Prize {
        // 75% chance of winning (3:1 ratio)
        const isWin = Math.random() < 0.75;

        if (isWin) {
            // Select a random winning prize
            const winningPrizes = PRIZE_POOL.filter(prize => prize.isWin);
            const randomIndex = Math.floor(Math.random() * winningPrizes.length);
            return winningPrizes[randomIndex];
        } else {
            // Return the "Try Again" prize
            return PRIZE_POOL.find(prize => !prize.isWin)!;
        }
    }

    static playCard(cardNumber: number): Prize {
        const prize = this.generateRandomPrize();

        this.updateGameState({
            hasPlayedGame: true,
            selectedCard: cardNumber,
            prize
        });

        return prize;
    }

    static resetGame(): void {
        sessionStorage.removeItem(STORAGE_KEYS.GAME_STATE);
        sessionStorage.removeItem(STORAGE_KEYS.USER_DATA);
    }
}