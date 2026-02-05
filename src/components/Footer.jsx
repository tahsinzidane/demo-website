import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">
                            Gourmet Bistro
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Experience the finest culinary artistry with fresh, locally-sourced ingredients and exceptional service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400 text-sm">
                                <FaMapMarkerAlt className="mr-2 text-gold-400" />
                                123 Gourmet Street, Food City
                            </li>
                            <li className="flex items-center text-gray-400 text-sm">
                                <FaPhone className="mr-2 text-gold-400" />
                                +1 (234) 567-8900
                            </li>
                            <li className="flex items-center text-gray-400 text-sm">
                                <FaEnvelope className="mr-2 text-gold-400" />
                                info@gourmetbistro.com
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between text-gray-400">
                                <span>Mon - Fri</span>
                                <span>11:00 - 22:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Saturday</span>
                                <span>10:00 - 23:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Sunday</span>
                                <span>10:00 - 21:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social & Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2026 Gourmet Bistro. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gold-400 transition-colors text-xl"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gold-400 transition-colors text-xl"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gold-400 transition-colors text-xl"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
