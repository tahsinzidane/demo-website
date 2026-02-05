import { useState } from 'react';
import { motion } from 'framer-motion';
import FoodCard from '../components/FoodCard';
import { menuData } from '../data/data';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Items' },
        { id: 'appetizer', name: 'Appetizers' },
        { id: 'main', name: 'Main Course' },
        { id: 'dessert', name: 'Desserts' },
    ];

    const filteredMenu = activeCategory === 'all'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

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
                        Our Menu
                    </h1>
                    <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover our exquisite collection of carefully crafted dishes
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-8 py-3 rounded-lg font-semibold transition-all ${activeCategory === category.id
                                    ? 'bg-gold-500 text-black'
                                    : 'glass text-white hover:bg-white/10'
                                }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredMenu.map((food, index) => (
                        <FoodCard key={food.id} food={food} index={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Menu;
