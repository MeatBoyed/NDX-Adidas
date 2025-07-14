export interface User {
    fullName: string;
    surname: string;
    email: string;
    phone: string;
}

export interface Prize {
    id: string;
    name: string;
    description: string;
    voucherCode: string;
    isWin: boolean;
}

export interface GameState {
    hasSignedUp: boolean;
    hasPlayedGame: boolean;
    user: User | null;
    selectedCard: number | null;
    prize: Prize | null;
}

export const PRIZE_POOL: Prize[] = [
    {
        id: '1',
        name: '20% Off Sneakers',
        description: 'Get 20% off your next sneaker purchase',
        voucherCode: 'ADIDAS20',
        isWin: true
    },
    {
        id: '2',
        name: 'Free Shipping',
        description: 'Free shipping on your next order',
        voucherCode: 'FREESHIP',
        isWin: true
    },
    {
        id: '3',
        name: 'Adidas Water Bottle',
        description: 'Complimentary adidas sports water bottle',
        voucherCode: 'BOTTLE23',
        isWin: true
    },
    {
        id: '4',
        name: '15% Off Apparel',
        description: '15% discount on adidas apparel',
        voucherCode: 'APPAREL15',
        isWin: true
    },
    {
        id: '5',
        name: 'Adidas Cap',
        description: 'Free adidas branded cap',
        voucherCode: 'FREECAP',
        isWin: true
    },
    {
        id: '6',
        name: 'Try Again',
        description: 'Better luck next time!',
        voucherCode: '',
        isWin: false
    }
];