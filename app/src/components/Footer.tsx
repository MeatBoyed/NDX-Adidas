import { motion, Variants } from "framer-motion";
import AdidasLogo from "./AdidasLogo";

export default function Footer() {

    const itemVariants: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (

        <motion.footer
            className="glossy-white text-black p-6 md:p-8 mt-16"
            variants={itemVariants}
        >
            <div className="max-w-7xl mx-auto text-center">
                <AdidasLogo size="md" className="text-black mx-auto mb-4" animated={true} />
                <p className="text-gray-600 mb-4 text-sm md:text-base">© 2025 Adidas. All rights reserved.</p>
                <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-xs md:text-sm">
                    <a href="#" className="hover:text-black/70 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-black/70 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-black/70 transition-colors">Contact Us</a>
                    <a href="#" className="hover:text-black/70 transition-colors">Event Info</a>
                </div>
            </div>
        </motion.footer>
    )
}