import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-8"
        >
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={`${i < review.rating ? 'text-gold-400' : 'text-gray-600'
                            } text-xl`}
                    />
                ))}
            </div>

            <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{review.comment}"
            </p>

            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ReviewCard;
