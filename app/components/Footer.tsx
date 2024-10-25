import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <p className="text-center text-xl mb-6 text-slate-400">
            Powered by{' '}
            <motion.a
                href="https://onchainkit.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0052ff] transition-colors inline-block"
                whileHover={{ 
                    y: -5,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10
                    }
                }}
                whileTap={{ scale: 0.95 }}
            >
                OnchainKit
            </motion.a>
        </p>
    )
}
