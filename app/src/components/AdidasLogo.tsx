import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AdidasLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    animated?: boolean;
    glowing?: boolean;
    floating?: boolean;
}

const AdidasLogo: React.FC<AdidasLogoProps> = ({
    className = '',
}) => {

    return (
        <img src="/logo.svg"
            className={cn("max-w-28 h-full", className)} />
    );
};

export default AdidasLogo;