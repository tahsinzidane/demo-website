import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <motion.h1
                            className="text-2xl md:text-3xl font-serif font-bold text-gold-400"
                            whileHover={{ scale: 1.05 }}
                        >
                            Gourmet Bistro
                        </motion.h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 hover:text-gold-400 ${location.pathname === link.path ? 'text-gold-400' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#FFD700' }}
                            className="text-white text-xl"
                        >
                            <FaFacebook />
                        </motion.a>
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#FFD700' }}
                            className="text-white text-xl"
                        >
                            <FaInstagram />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#FFD700' }}
                            className="text-white text-xl"
                        >
                            <FaWhatsapp />
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white text-2xl"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass-dark"
                >
                    <div className="px-4 pt-2 pb-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block py-2 text-base font-medium transition-colors duration-200 hover:text-gold-400 ${location.pathname === link.path ? 'text-gold-400' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex space-x-6 pt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gold-400">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gold-400">
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:text-gold-400">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
