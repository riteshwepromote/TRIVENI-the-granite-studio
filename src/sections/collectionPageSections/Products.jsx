import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample data (replace with actual data from your backend/CMS)
const collectionsData = [
  {
    id: 'granite',
    name: 'Granite',
    bestseller: true,
    products: 48,
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop', // Replace with actual images
    origin: 'India, Brazil, Scandinavia',
    description: 'Our granite collection spans 48+ varieties from quarries across India, Brazil, and Scandinavia. Each slab carries the unique character of its geological origin — ideal for flooring, countertops, and feature walls.'
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    products: 24,
    imageUrl: 'https://images.unsplash.com/photo-1620023641216-3a7a9228811d?q=80&w=600&auto=format&fit=crop',
    origin: 'Rajasthan, India',
    description: 'Sourced from the ancient quarries of Rajasthan, our sandstone collection brings natural warmth and texture to architectural projects. Ideal for wall cladding, landscaping, and exterior applications.'
  },
  {
    id: 'limestone',
    name: 'Limestone',
    premium: true,
    products: 20,
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tiles',
    name: 'Tiles',
    products: 120,
    imageUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'wooden-flooring',
    name: 'Wooden Flooring',
    products: 36,
    imageUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'quartz',
    name: 'Quartz',
    premium: true,
    products: 32,
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'onyx',
    name: 'Onyx',
    exclusive: true,
    products: 16,
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop',
    description: 'Rare translucency for statement spaces'
  },
  {
    id: 'wpc',
    name: 'WPC',
    products: 28,
    imageUrl: 'https://images.unsplash.com/photo-1599819665511-b0e6e737d25e?q=80&w=600&auto=format&fit=crop',
    description: 'Modern composite for every climate'
  },
  {
    id: 'thermopine',
    name: 'Thermopine',
    products: 18,
    imageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=600&auto=format&fit=crop',
    description: 'Heat-treated pine with lasting resilience'
  },
  {
    id: 'i-clad',
    name: 'I-Clad',
    new: true,
    products: 22,
    imageUrl: 'https://images.unsplash.com/photo-1582261494951-a20c3272d506?q=80&w=600&auto=format&fit=crop',
    description: 'Architectural cladding for bold facades'
  }
];

// Product data example (replace with actual data)
const productData = {
  granite: [
    { name: 'Kashmir White', origin: 'India', variant: 'Bestseller', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop' },
    { name: 'Tan Brown', origin: 'India', imageUrl: 'https://images.unsplash.com/photo-1599819665511-b0e6e737d25e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Emerald Pearl', origin: 'Norway', variant: 'Imported', imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=400&auto=format&fit=crop' },
  ],
  sandstone: [
    { name: 'Teak Sandstone', origin: 'Rajasthan', variant: 'Natural', finish: 'Sawn', imageUrl: 'https://images.unsplash.com/photo-1620023641216-3a7a9228811d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Mint Fossil', origin: 'India', finish: 'Sawn', imageUrl: 'https://images.unsplash.com/photo-1599819665511-b0e6e737d25e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Silver Sandstone', origin: 'India', finish: 'Bush Hammered', imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop' },
  ],
  // Add product lists for other categories
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="bg-[#FAF9F7] text-stone-900 font-sans">
      <nav className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-start space-x-1 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium ${
              activeCategory === 'all'
                ? 'bg-[#A88C61] text-white'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            All Collections
          </button>
          {collectionsData.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setActiveCategory(collection.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                activeCategory === collection.id
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="mb-6 md:mb-0">
            <p className="text-xs uppercase tracking-widest text-[#A88C61] font-semibold mb-2">Explore Categories</p>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-950">
              All 10 Collections
            </h1>
          </div>
          <p className="text-stone-600 max-w-md text-sm md:text-base md:text-right leading-relaxed">
            Click any category to explore its full range of products and finishes.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {collectionsData.map((collection) => (
            <motion.div
              key={collection.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveCategory(collection.id)}
            >
              <img
                src={collection.imageUrl}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                {collection.bestseller && (
                  <span className="absolute top-4 left-4 bg-[#A88C61] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
                {collection.premium && (
                  <span className="absolute top-4 left-4 bg-[#A88C61]/80 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    Premium
                  </span>
                )}
                 {collection.exclusive && (
                  <span className="absolute top-4 left-4 bg-[#A88C61]/90 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    Exclusive
                  </span>
                )}
                 {collection.new && (
                  <span className="absolute top-4 left-4 bg-emerald-700 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                {collection.exclusive && (
                  <div className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 group-hover:bg-white/30 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-stone-100 transition-colors">
                  {collection.name}
                </h3>
                <p className="text-stone-300 text-sm font-medium group-hover:text-white transition-colors">
                  {collection.products} products
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Collection Section */}
        <AnimatePresence mode="wait">
          {activeCategory !== 'all' && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-24 md:mt-32 pt-16 border-t border-stone-200"
            >
              {(() => {
                const collection = collectionsData.find((c) => c.id === activeCategory);
                if (!collection) return null;
                const products = productData[activeCategory];

                return (
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 md:mb-0">
                        <div className="w-1 h-12 bg-[#A88C61] mr-1"></div>
                        <h2 className="text-5xl font-serif text-stone-950 mr-4">
                          {collection.name}
                        </h2>
                        {collection.bestseller && (
                          <span className="bg-[#FFF8F0] text-[#A88C61] text-[11px] uppercase tracking-wider font-bold px-4 py-1.5 rounded-full border border-[#E9E1D5]">
                            Bestseller
                          </span>
                        )}
                        {/* Add other badges if needed */}
                      </div>
                      <a
                        href="#"
                        className="text-[#A88C61] text-sm font-semibold flex items-center gap-1.5 group hover:text-[#8f744f]"
                      >
                        View all {collection.products}
                        <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                    {collection.description && (
                      <p className="text-stone-600 max-w-3xl text-base leading-relaxed mb-16 pl-6">
                        {collection.description}
                      </p>
                    )}

                    {products && (
                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {products.map((product, idx) => (
                          <motion.div key={idx} className="group flex flex-col" variants={itemVariants}>
                            <div className="relative overflow-hidden rounded-xl aspect-[1.5/1] mb-5 cursor-pointer">
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                  <button className="bg-[#A88C61] text-white text-xs font-semibold px-6 py-2.5 rounded-md flex items-center gap-1.5 shadow-lg">
                                    View Details
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                               </div>
                              {product.variant && (
                                <span className={`absolute top-4 left-4 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                                  product.variant === 'Bestseller' ? 'bg-[#A88C61] text-white' :
                                  product.variant === 'Imported' ? 'bg-white text-stone-900 border border-stone-200' :
                                  'bg-stone-100 text-stone-700'
                                }`}>
                                  {product.variant}
                                </span>
                              )}
                            </div>
                            <h4 className="text-xl font-serif text-stone-950 mb-1.5 group-hover:text-[#A88C61] transition-colors">{product.name}</h4>
                            <p className="text-xs text-[#A88C61] font-semibold mb-1 uppercase tracking-wide">
                              {product.variant || product.finish} · {product.origin}
                            </p>
                            {activeCategory === 'sandstone' && product.finish && (
                               <p className="text-xs text-stone-500 mb-1">
                                60x30, 90x45 cm
                              </p>
                            )}
                             {activeCategory === 'sandstone' && product.name === 'Teak Sandstone' && (
                               <p className="text-xs text-stone-500">
                                Wall Cladding · Landscaping
                              </p>
                            )}
                             {activeCategory === 'sandstone' && product.name === 'Mint Fossil' && (
                               <p className="text-xs text-stone-500">
                                Flooring · Garden
                              </p>
                            )}
                              {activeCategory === 'sandstone' && product.name === 'Silver Sandstone' && (
                               <p className="text-xs text-stone-500">
                                Exterior · Paving
                              </p>
                            )}

                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;