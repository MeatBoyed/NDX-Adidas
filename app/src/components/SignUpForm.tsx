'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, Variants } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import AdidasLogo from './AdidasLogo';
import { User } from '@/lib/types';

const signUpSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    surname: z.string().min(2, 'Surname must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits')
});

type SignUpFormData = z.infer<typeof signUpSchema>;

interface SignUpFormProps {
    onSignUp: (user: User) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema)
    });

    const onSubmit = (data: SignUpFormData) => {
        onSignUp(data);
    };

    const containerVariants: Variants = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const inputVariants: Variants = {
        focused: {
            scale: 1.02,
            boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 }
        },
        unfocused: {
            scale: 1,
            boxShadow: "0 0 0 0px rgba(0, 0, 0, 0)",
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            className="max-h-screen animated-bg flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="w-full max-w-md"
            >
                <Card className="glossy-white text-black shadow-2xl border-0 card-glow">
                    <CardHeader className="text-center pb-2">
                        <motion.div
                            className="flex justify-center mb-4"
                            variants={itemVariants}
                        >
                            <AdidasLogo size="xl" className="text-black" animated={true} />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            {/* <CardTitle className="text-3xl font-bold text-shimmer mb-2">
                                Join AdiClub
                            </CardTitle> */}
                            <CardDescription className="text-gray-600 text-base">
                                Sign up to unlock exclusive rewards and play our card game
                            </CardDescription>
                        </motion.div>
                    </CardHeader>
                    <CardContent className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <motion.div
                                className="space-y-2"
                                variants={itemVariants}
                            >
                                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                                    Full Name
                                </Label>
                                <motion.div
                                    variants={inputVariants}
                                    animate={focusedField === 'fullName' ? 'focused' : 'unfocused'}
                                >
                                    <Input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        {...register('fullName')}
                                        onFocus={() => setFocusedField('fullName')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`transition-all duration-300 ${errors.fullName
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'focus:border-black focus:ring-1 focus:ring-black'
                                            }`}
                                    />
                                </motion.div>
                                {errors.fullName && (
                                    <motion.p
                                        className="text-sm text-red-500"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {errors.fullName.message}
                                    </motion.p>
                                )}
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                variants={itemVariants}
                            >
                                <Label htmlFor="surname" className="text-sm font-semibold text-gray-700">
                                    Surname
                                </Label>
                                <motion.div
                                    variants={inputVariants}
                                    animate={focusedField === 'surname' ? 'focused' : 'unfocused'}
                                >
                                    <Input
                                        id="surname"
                                        type="text"
                                        placeholder="Enter your last name"
                                        {...register('surname')}
                                        onFocus={() => setFocusedField('surname')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`transition-all duration-300 ${errors.surname
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'focus:border-black focus:ring-1 focus:ring-black'
                                            }`}
                                    />
                                </motion.div>
                                {errors.surname && (
                                    <motion.p
                                        className="text-sm text-red-500"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {errors.surname.message}
                                    </motion.p>
                                )}
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                variants={itemVariants}
                            >
                                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                    Email
                                </Label>
                                <motion.div
                                    variants={inputVariants}
                                    animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                                >
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        {...register('email')}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`transition-all duration-300 ${errors.email
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'focus:border-black focus:ring-1 focus:ring-black'
                                            }`}
                                    />
                                </motion.div>
                                {errors.email && (
                                    <motion.p
                                        className="text-sm text-red-500"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                variants={itemVariants}
                            >
                                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                                    Phone Number
                                </Label>
                                <motion.div
                                    variants={inputVariants}
                                    animate={focusedField === 'phone' ? 'focused' : 'unfocused'}
                                >
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        {...register('phone')}
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`transition-all duration-300 ${errors.phone
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'focus:border-black focus:ring-1 focus:ring-black'
                                            }`}
                                    />
                                </motion.div>
                                {errors.phone && (
                                    <motion.p
                                        className="text-sm text-red-500"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {errors.phone.message}
                                    </motion.p>
                                )}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full glossy-black text-white hover:bg-gray-800 button-press py-3 text-lg font-semibold relative overflow-hidden"
                                        disabled={isSubmitting}
                                    >
                                        <span className="relative z-10">
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <div className="loading-spinner mr-2"></div>
                                                    Signing Up...
                                                </span>
                                            ) : (
                                                'Signup to Play & Win'
                                            )}
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '100%' }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatDelay: 3
                                            }}
                                        />
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default SignUpForm;