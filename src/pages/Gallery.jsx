import { motion } from 'framer-motion';
import { galleryImages } from '../data/data';

const Gallery = () => {
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
                        Gallery
                    </h1>
                    <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A visual journey through our culinary creations
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.03 }}
                            className="break-inside-avoid mb-6 group relative overflow-hidden rounded-xl cursor-pointer"
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                loading="lazy"
                                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                                <p className="text-white font-semibold text-lg">Gourmet Dish #{index + 1}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
