import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get in touch with us for reservations or inquiries
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass rounded-2xl p-8"
                    >
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">
                            Send us a Message
                        </h2>
                        <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                                    placeholder="+1 (234) 567-8900"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors resize-none"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-4 rounded-lg transition-colors"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="glass rounded-xl p-6">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-gold-400 text-2xl mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">Address</h3>
                                        <p className="text-gray-400">123 Gourmet Street, Food City, FC 12345</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6">
                                <div className="flex items-start">
                                    <FaPhone className="text-gold-400 text-2xl mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                                        <p className="text-gray-400">+1 (234) 567-8900</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6">
                                <div className="flex items-start">
                                    <FaEnvelope className="text-gold-400 text-2xl mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                                        <p className="text-gray-400">info@gourmetbistro.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-xl p-6">
                                <div className="flex items-start">
                                    <FaClock className="text-gold-400 text-2xl mr-4 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-2">Opening Hours</h3>
                                        <div className="space-y-1 text-gray-400">
                                            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                                            <p>Saturday: 10:00 AM - 11:00 PM</p>
                                            <p>Sunday: 10:00 AM - 9:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <motion.a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
                            >
                                <FaWhatsapp className="text-2xl mr-3" />
                                Contact us on WhatsApp
                            </motion.a>
                        </motion.div>

                        {/* Google Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass rounded-xl overflow-hidden h-96"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8981614315894!2d90.38751831498114!3d23.750894384588595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1644307234567!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Restaurant Location"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
