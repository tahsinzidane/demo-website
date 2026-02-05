import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const FoodCard = ({ food, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-xl overflow-hidden group relative"
        >
            {food.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gold-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                </div>
            )}

            <div className="relative h-64 overflow-hidden">
                <img
                    src={food.image}
                    alt={food.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gold-400 transition-colors">
                        {food.name}
                    </h3>
                    <span className="text-gold-400 font-bold text-lg">${food.price}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{food.description}</p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-2 rounded-lg transition-colors"
                >
                    Order Now
                </motion.button>
            </div>
        </motion.div>
    );
};

export default FoodCard;
