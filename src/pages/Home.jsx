import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import FoodCard from '../components/FoodCard';
import ReviewCard from '../components/ReviewCard';
import { menuData, reviews } from '../data/data';

const Home = () => {
    const popularDishes = menuData.filter(item => item.popular).slice(0, 4);
    const menuPreview = menuData.slice(0, 6);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroCarousel />

            {/* Popular Dishes Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            Most Popular Dishes
                        </h2>
                        <div className="w-20 h-1 bg-gold-400 mx-auto mb-4"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Handpicked favorites loved by our guests
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularDishes.map((food, index) => (
                            <FoodCard key={food.id} food={food} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Preview Section */}
            <section className="py-20 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            Our Menu
                        </h2>
                        <div className="w-20 h-1 bg-gold-400 mx-auto mb-4"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Explore our carefully curated selection of gourmet dishes
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {menuPreview.map((food, index) => (
                            <FoodCard key={food.id} food={food} index={index} />
                        ))}
                    </div>

                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-10 py-4 rounded-lg transition-colors"
                        >
                            View Full Menu
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            What Our Guests Say
                        </h2>
                        <div className="w-20 h-1 bg-gold-400 mx-auto mb-4"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Testimonials from our satisfied customers
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reviews.map((review, index) => (
                            <ReviewCard key={review.id} review={review} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-4 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&auto=format&fit=crop"
                        alt="Restaurant interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Reserve Your Table Today
                        </h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Experience unforgettable dining in an elegant atmosphere
                        </p>
                        <div className="flex gap-6 justify-center flex-wrap">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-10 py-4 rounded-lg transition-colors"
                            >
                                Book a Table
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass border border-white/20 text-white font-semibold px-10 py-4 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Order Online
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
