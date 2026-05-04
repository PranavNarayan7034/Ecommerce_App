import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
    const categories = ['Trending', 'Most Reviewed', 'New Collection', 'Best Offers'];
    const [activeTab, setActiveTab] = useState('Trending');
    const [expandedProductId, setExpandedProductId] = useState(null);
    const sliderRef = useRef(null);

    const productsData = [
        {
            id: 1,
            name: "Premium Noise-Cancelling Headphones",
            price: 24999,
            originalPrice: 29999,
            category: ["Trending", "Most Reviewed"],
            image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
            rating: 4.9,
            reviews: 1432,
            badge: "Top Seller"
        },
        {
            id: 2,
            name: "Minimalist Smartwatch Series 7",
            price: 32999,
            originalPrice: 39999,
            category: ["Trending", "New Collection"],
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
            rating: 4.7,
            reviews: 856,
            badge: "New"
        },
        {
            id: 3,
            name: "Ergonomic Mechanical Keyboard",
            price: 12499,
            originalPrice: 14699,
            category: ["Trending", "Most Reviewed", "Best Offers"],
            image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
            rating: 4.8,
            reviews: 2105,
            badge: "-15%"
        },
        {
            id: 4,
            name: "Ultra-Thin Laptop 15\"",
            price: 108999,
            originalPrice: 124999,
            category: ["Most Reviewed"],
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&auto=format&fit=crop",
            rating: 4.6,
            reviews: 3241,
        },
        {
            id: 5,
            name: "Professional Camera Toolkit",
            price: 74999,
            originalPrice: 89999,
            category: ["New Collection", "Trending"],
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
            rating: 5.0,
            reviews: 12,
            badge: "Exclusive"
        },
        {
            id: 6,
            name: "Wireless Charging Pad",
            price: 3799,
            originalPrice: 7599,
            category: ["Best Offers", "Most Reviewed"],
            image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=600&auto=format&fit=crop",
            rating: 4.4,
            reviews: 512,
            badge: "Half Price"
        },
        {
            id: 7,
            name: "Designer Sunglasses",
            price: 15499,
            originalPrice: 18999,
            category: ["Trending", "New Collection"],
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop",
            rating: 4.5,
            reviews: 89,
        },
        {
            id: 8,
            name: "Eco-Friendly Backpack",
            price: 6299,
            originalPrice: 8999,
            category: ["Best Offers", "Trending"],
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
            rating: 4.8,
            reviews: 320,
            badge: "-30%"
        }
    ];

    const filteredProducts = productsData.filter(product => product.category.includes(activeTab));

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full mx-auto md:px-0 py-16 mt-8 relative overflow-hidden">
            <div className="flex flex-col items-center mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Collection</h2>
                <p className="text-gray-500 text-center max-w-2xl">Discover top-tier products meticulously crafted for performance, style, and unmatched quality. Find your next favorite item today.</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === cat
                            ? 'bg-gray-900 text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] transform -translate-y-0.5 border-transparent'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-[1400px] mx-auto group">

                {/* Scroll Left Button */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-800 hover:text-orange-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:block border border-gray-100"
                    aria-label="Scroll left"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                </button>

                {/* Products Slider */}
                <motion.div
                    layout
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-6 sm:gap-8 snap-x snap-mandatory px-4 md:px-16 pt-4 pb-12 w-full custom-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .custom-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                    `}} />

                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -50 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                key={product.id}
                                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-center bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all duration-300 group/card flex flex-col shrink-0"
                            >
                                {/* Product Image */}
                                <div className="relative h-64 overflow-hidden bg-gray-50 rounded-t-3xl border-b border-gray-50/50">
                                    {product.badge && (
                                        <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                                            {product.badge}
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md p-2.5 rounded-full cursor-pointer hover:bg-white hover:text-orange-500 transition-colors shadow-sm text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center transform group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    {/* Hover gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 hover:text-orange-500 transition-colors cursor-pointer">{product.name}</h3>

                                    <div className="flex items-center gap-2 mb-6 mt-auto">
                                        <div className="flex items-center text-yellow-400 bg-yellow-50 px-2 py-0.5 rounded-md">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <span className="text-yellow-700 text-sm font-bold ml-1">{product.rating}</span>
                                        </div>
                                        <span className="text-gray-400 text-sm font-medium">({product.reviews} reviews)</span>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto h-12 relative w-full overflow-hidden">
                                        <AnimatePresence mode="popLayout">
                                            {expandedProductId === product.id ? (
                                                <motion.div
                                                    key="expanded"
                                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                    className="flex items-center justify-between w-full h-full gap-2"
                                                >
                                                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-3 py-3 rounded-xl text-xs transition-colors whitespace-nowrap shadow-xs">Add to Cart</button>
                                                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 py-3 rounded-xl text-xs transition-colors whitespace-nowrap shadow-xs">Buy Now</button>
                                                    <button onClick={(e) => { e.stopPropagation(); setExpandedProductId(null); }} className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="collapsed"
                                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                    className="flex items-center justify-between w-full h-full"
                                                >
                                                    <div className="flex flex-col justify-end">
                                                        {product.originalPrice && (
                                                            <span className="text-xs text-gray-400 font-medium line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                                        )}
                                                        <span className="text-2xl font-black text-gray-900 leading-none mt-0.5">₹{product.price.toLocaleString('en-IN')}</span>
                                                    </div>
                                                    <button onClick={(e) => { e.stopPropagation(); setExpandedProductId(product.id); }} className="bg-gray-900 hover:bg-orange-500 text-white p-3.5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-orange-500/40 hover:-translate-y-1" aria-label="Add to cart">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Scroll Right Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-800 hover:text-orange-500 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden md:block border border-gray-100"
                    aria-label="Scroll right"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </button>

            </div>
        </div>
    );
};

export default Products;
