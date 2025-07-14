import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AdidasLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    animated?: boolean;
    glowing?: boolean;
    floating?: boolean;
}

const AdidasLogo: React.FC<AdidasLogoProps> = ({
    className = '',
    size = 'md',
    animated = true,
    glowing = false,
    floating = false
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    const logoVariants: Variants = {
        initial: { scale: 0.8, opacity: 0, rotateY: -90 },
        animate: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            scale: 1.15,
            rotateY: 10,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        floating: {
            y: [-2, 2, -2],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const stripeVariants: Variants = {
        initial: { scaleY: 0, opacity: 0, x: -10 },
        animate: (index: number) => ({
            scaleY: 1,
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 120
            }
        }),
        hover: {
            scaleY: 1.2,
            skewY: 2,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        pulse: {
            scaleY: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const shineVariants: Variants = {
        initial: { x: "-100%", opacity: 0 },
        animate: {
            x: "100%",
            opacity: [0, 1, 0],
            transition: {
                duration: 1.5,
                delay: 1,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        repeat: {
            x: ["100%", "-100%"],
            opacity: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <motion.div
            className={`${sizeClasses[size]} ${className} relative overflow-hidden shine-effect cursor-pointer ${glowing ? 'glow-white drop-shadow-2xl' : ''
                }`}
            variants={animated ? logoVariants : undefined}
            initial={animated ? "initial" : undefined}
            animate={animated ? (floating ? ["animate", "floating"] : "animate") : undefined}
            whileHover={animated ? "hover" : undefined}
        >
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-current drop-shadow-lg"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="stripe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                        <stop offset="30%" stopColor="currentColor" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="currentColor" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="shine-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="50%" stopColor="white" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glossy-effect">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                        <feOffset dx="0" dy="1" result="offset" />
                        <feFlood floodColor="white" floodOpacity="0.3" />
                        <feComposite in2="offset" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Adidas three stripes logo with enhanced animations */}
                <motion.polygon
                    points="20,80 40,20 50,20 30,80"
                    fill="url(#stripe-gradient)"
                    filter={`url(#${glowing ? 'glow' : 'glossy-effect'})`}
                    variants={animated ? stripeVariants : undefined}
                    custom={0}
                    initial={animated ? "initial" : undefined}
                    animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
                    whileHover={animated ? "hover" : undefined}
                    style={{ originY: "bottom" }}
                />
                <motion.polygon
                    points="35,80 55,20 65,20 45,80"
                    fill="url(#stripe-gradient)"
                    filter={`url(#${glowing ? 'glow' : 'glossy-effect'})`}
                    variants={animated ? stripeVariants : undefined}
                    custom={1}
                    initial={animated ? "initial" : undefined}
                    animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
                    whileHover={animated ? "hover" : undefined}
                    style={{ originY: "bottom" }}
                />
                <motion.polygon
                    points="50,80 70,20 80,20 60,80"
                    fill="url(#stripe-gradient)"
                    filter={`url(#${glowing ? 'glow' : 'glossy-effect'})`}
                    variants={animated ? stripeVariants : undefined}
                    custom={2}
                    initial={animated ? "initial" : undefined}
                    animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
                    whileHover={animated ? "hover" : undefined}
                    style={{ originY: "bottom" }}
                />

                {/* Animated shine effect overlay */}
                {animated && (
                    <motion.rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        fill="url(#shine-gradient)"
                        variants={shineVariants}
                        initial="initial"
                        animate="animate"
                        onAnimationComplete={() => {
                            // Trigger repeat animation
                        }}
                    />
                )}
            </svg>

            {/* Additional glossy overlay effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            />
        </motion.div>
    );
};

export default AdidasLogo;