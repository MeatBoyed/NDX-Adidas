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
    // const sizeClasses = {
    //     sm: 'w-20 h-8',
    //     md: 'w-24 h-10',
    //     lg: 'w-32 h-14',
    //     xl: 'w-40 h-18'
    // };

    // const logoVariants: Variants = {
    //     initial: { scale: 0.8, opacity: 0, rotateY: -90 },
    //     animate: {
    //         scale: 1,
    //         opacity: 1,
    //         rotateY: 0,
    //         transition: {
    //             duration: 0.8,
    //             ease: [0.4, 0, 0.2, 1],
    //             type: "spring",
    //             stiffness: 100
    //         }
    //     },
    //     hover: {
    //         scale: 1.15,
    //         rotateY: 10,
    //         transition: {
    //             duration: 0.3,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     },
    //     floating: {
    //         y: [-2, 2, -2],
    //         transition: {
    //             duration: 3,
    //             repeat: Infinity,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     }
    // };

    // const stripeVariants: Variants = {
    //     initial: { scaleY: 0, opacity: 0, x: -10 },
    //     animate: (index: number) => ({
    //         scaleY: 1,
    //         opacity: 1,
    //         x: 0,
    //         transition: {
    //             duration: 0.8,
    //             delay: index * 0.15,
    //             ease: [0.4, 0, 0.2, 1],
    //             type: "spring",
    //             stiffness: 120
    //         }
    //     }),
    //     hover: {
    //         scaleY: 1.2,
    //         skewY: 2,
    //         transition: {
    //             duration: 0.3,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     },
    //     pulse: {
    //         scaleY: [1, 1.1, 1],
    //         opacity: [1, 0.8, 1],
    //         transition: {
    //             duration: 2,
    //             repeat: Infinity,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     }
    // };

    // const textVariants: Variants = {
    //     initial: { opacity: 0, x: -20 },
    //     animate: (index: number) => ({
    //         opacity: 1,
    //         x: 0,
    //         transition: {
    //             duration: 0.6,
    //             delay: 0.5 + index * 0.1,
    //             ease: [0.4, 0, 0.2, 1],
    //             type: "spring",
    //             stiffness: 120
    //         }
    //     }),
    //     hover: {
    //         scale: 1.05,
    //         transition: {
    //             duration: 0.2,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     },
    //     pulse: {
    //         opacity: [1, 0.8, 1],
    //         transition: {
    //             duration: 2,
    //             repeat: Infinity,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     }
    // };

    // const shineVariants: Variants = {
    //     initial: { x: "-100%", opacity: 0 },
    //     animate: {
    //         x: "100%",
    //         opacity: [0, 1, 0],
    //         transition: {
    //             duration: 1.5,
    //             delay: 1,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     },
    //     repeat: {
    //         x: ["100%", "-100%"],
    //         opacity: [0, 1, 0],
    //         transition: {
    //             duration: 3,
    //             repeat: Infinity,
    //             repeatDelay: 2,
    //             ease: [0.4, 0, 0.2, 1]
    //         }
    //     }
    // };

    return (

        <img src="/logo.svg" className="max-w-28 h-full" />
        // <motion.div
        //     className={`${sizeClasses[size]} ${className} relative overflow-hidden shine-effect cursor-pointer ${glowing ? 'glow-white drop-shadow-2xl' : ''
        //         }`}
        //     variants={animated ? logoVariants : undefined}
        //     initial={animated ? "initial" : undefined}
        //     animate={animated ? (floating ? ["animate", "floating"] : "animate") : undefined}
        //     whileHover={animated ? "hover" : undefined}
        // >
        //     <svg
        //         viewBox="0 0 300 120"
        //         className="w-full h-full fill-current drop-shadow-lg"
        //         xmlns="http://www.w3.org/2000/svg"
        //     >
        //         <defs>
        //             <linearGradient id="stripe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        //                 <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        //                 <stop offset="30%" stopColor="currentColor" stopOpacity="0.9" />
        //                 <stop offset="70%" stopColor="currentColor" stopOpacity="0.9" />
        //                 <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        //             </linearGradient>
        //             <linearGradient id="shine-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        //                 <stop offset="0%" stopColor="white" stopOpacity="0" />
        //                 <stop offset="50%" stopColor="white" stopOpacity="0.6" />
        //                 <stop offset="100%" stopColor="white" stopOpacity="0" />
        //             </linearGradient>
        //             <filter id="glow">
        //                 <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        //                 <feMerge>
        //                     <feMergeNode in="coloredBlur" />
        //                     <feMergeNode in="SourceGraphic" />
        //                 </feMerge>
        //             </filter>
        //             <filter id="glossy-effect">
        //                 <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        //                 <feOffset dx="0" dy="1" result="offset" />
        //                 <feFlood floodColor="white" floodOpacity="0.3" />
        //                 <feComposite in2="offset" operator="in" />
        //                 <feMerge>
        //                     <feMergeNode />
        //                     <feMergeNode in="SourceGraphic" />
        //                 </feMerge>
        //             </filter>
        //         </defs>

        //         {/* Three Adidas stripes */}
        //         <motion.path
        //             d="M15 80 L50 10 L85 30 L50 100 Z"
        //             fill="url(#stripe-gradient)"
        //             filter={`url(#${glowing ? 'glow' : 'glossy-effect'})`}
        //             variants={animated ? stripeVariants : undefined}
        //             custom={0}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //             style={{ originY: "bottom" }}
        //         />
        //         <motion.path
        //             d="M65 70 L100 5 L135 25 L100 95 Z"
        //             fill="url(#stripe-gradient)"
        //             filter={`url(#${glowing ? 'glow' : 'glossy-effect'})`}
        //             variants={animated ? stripeVariants : undefined}
        //             custom={1}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //             style={{ originY: "bottom" }}
        //         />
        //         <motion.path
        //             d="M115 60 L150 0 L185 20 L150 90 Z"
        //             fill="url(#stripe-gradient)"
        //             filter={`url(#${glowing ? 'glow' : 'glossy-effect'})`}
        //             variants={animated ? stripeVariants : undefined}
        //             custom={2}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //             style={{ originY: "bottom" }}
        //         />

        //         {/* Letter 'a' */}
        //         <motion.path
        //             d="M25 85 C10 85 5 95 5 105 C5 115 10 120 22 120 C30 120 35 117 40 112 L40 118 L50 118 L50 90 C50 85 45 82 35 82 C25 82 15 85 10 90 L15 95 C18 92 25 90 30 90 C35 90 40 92 40 95 L40 100 C35 103 30 105 22 105 C15 105 12 102 12 98 C12 94 15 92 22 92 C27 92 32 93 35 95 L38 90 C34 87 28 85 22 85 Z M22 98 C18 98 15 100 15 103 C15 106 18 108 22 108 C30 108 40 105 40 100 C35 99 28 98 22 98 Z"
        //             fill="currentColor"
        //             variants={animated ? textVariants : undefined}
        //             custom={0}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //         />

        //         {/* Letter 'd' */}
        //         <motion.path
        //             d="M70 70 L70 75 C75 72 82 70 90 70 C105 70 115 80 115 95 C115 110 105 120 90 120 C82 120 75 118 70 115 L70 135 L60 135 L60 72 L70 72 Z M90 78 C80 78 70 83 70 95 C70 107 80 112 90 112 C100 112 105 105 105 95 C105 85 100 78 90 78 Z"
        //             fill="currentColor"
        //             variants={animated ? textVariants : undefined}
        //             custom={1}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //         />

        //         {/* Letter 'i' */}
        //         <motion.path
        //             d="M130 72 L130 118 L140 118 L140 72 L130 72 Z M130 55 L130 65 L140 65 L140 55 L130 55 Z"
        //             fill="currentColor"
        //             variants={animated ? textVariants : undefined}
        //             custom={2}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //         />

        //         {/* Letter 'd' (second) */}
        //         <motion.path
        //             d="M160 70 L160 75 C165 72 172 70 180 70 C195 70 205 80 205 95 C205 110 195 120 180 120 C172 120 165 118 160 115 L160 135 L150 135 L150 72 L160 72 Z M180 78 C170 78 160 83 160 95 C160 107 170 112 180 112 C190 112 195 105 195 95 C195 85 190 78 180 78 Z"
        //             fill="currentColor"
        //             variants={animated ? textVariants : undefined}
        //             custom={3}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //         />

        //         {/* Letter 'a' (second) */}
        //         <motion.path
        //             d="M225 85 C210 85 205 95 205 105 C205 115 210 120 222 120 C230 120 235 117 240 112 L240 118 L250 118 L250 90 C250 85 245 82 235 82 C225 82 215 85 210 90 L215 95 C218 92 225 90 230 90 C235 90 240 92 240 95 L240 100 C235 103 230 105 222 105 C215 105 212 102 212 98 C212 94 215 92 222 92 C227 92 232 93 235 95 L238 90 C234 87 228 85 222 85 Z M222 98 C218 98 215 100 215 103 C215 106 218 108 222 108 C230 108 240 105 240 100 C235 99 228 98 222 98 Z"
        //             fill="currentColor"
        //             variants={animated ? textVariants : undefined}
        //             custom={4}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //         />

        //         {/* Letter 's' */}
        //         <motion.path
        //             d="M270 85 C265 82 258 80 250 80 C240 80 235 85 235 90 C235 95 240 98 250 100 L260 102 C270 104 275 108 275 115 C275 122 268 127 255 127 C245 127 235 123 230 118 L225 125 C232 130 242 132 255 132 C272 132 280 125 280 115 C280 105 275 100 265 98 L255 96 C245 94 240 91 240 85 C240 80 245 78 250 78 C258 78 265 80 270 83 L275 78 Z"
        //             fill="currentColor"
        //             variants={animated ? textVariants : undefined}
        //             custom={5}
        //             initial={animated ? "initial" : undefined}
        //             animate={animated ? (glowing ? ["animate", "pulse"] : "animate") : undefined}
        //             whileHover={animated ? "hover" : undefined}
        //         />

        //         {/* Animated shine effect overlay */}
        //         {animated && (
        //             <motion.rect
        //                 x="0"
        //                 y="0"
        //                 width="300"
        //                 height="120"
        //                 fill="url(#shine-gradient)"
        //                 variants={shineVariants}
        //                 initial="initial"
        //                 animate="animate"
        //                 onAnimationComplete={() => {
        //                     // Trigger repeat animation
        //                 }}
        //             />
        //         )}
        //     </svg>

        //     {/* Additional glossy overlay effect */}
        //     <motion.div
        //         className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-sm"
        //         initial={{ opacity: 0 }}
        //         animate={{ opacity: 1 }}
        //         transition={{ delay: 0.5, duration: 0.5 }}
        //     />
        // </motion.div>
    );
};

export default AdidasLogo;