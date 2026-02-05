import { motion } from 'framer-motion';

const About = () => {
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
                        About Us
                    </h1>
                    <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
                </motion.div>

                {/* Restaurant Story */}
                <section className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-serif font-bold text-white mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Established in 2015, Gourmet Bistro has been serving exceptional cuisine with a passion for culinary excellence. Our journey began with a simple vision: to create an unforgettable dining experience that combines premium ingredients, innovative techniques, and warm hospitality.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Every dish we serve tells a story of dedication, creativity, and love for food. We believe in sourcing only the finest local and international ingredients to bring authentic flavors to your table.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Our commitment to quality and innovation has made us a destination for food enthusiasts and casual diners alike. We invite you to be part of our story.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop"
                                alt="Restaurant interior"
                                className="rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Chef Section */}
                <section className="mb-20 glass rounded-2xl p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop"
                                alt="Chef"
                                className="rounded-xl shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl font-serif font-bold text-white mb-6">
                                Meet Our Chef
                            </h2>
                            <h3 className="text-2xl text-gold-400 font-semibold mb-4">
                                Chef Marco Rossi
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                With over 20 years of culinary experience across Europe and Asia, Chef Marco brings a unique fusion of flavors and techniques to Gourmet Bistro.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Trained in the finest culinary schools of Paris and Milan, Chef Marco specializes in contemporary cuisine with a touch of traditional elegance.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                His philosophy is simple: "Respect the ingredients, honor the craft, and create memories on every plate."
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Restaurant Interior Images */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-serif font-bold text-white mb-4">
                            Our Ambiance
                        </h2>
                        <div className="w-20 h-1 bg-gold-400 mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop',
                            'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop',
                            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop',
                        ].map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="overflow-hidden rounded-xl shadow-2xl"
                            >
                                <img
                                    src={image}
                                    alt={`Interior ${index + 1}`}
                                    className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
