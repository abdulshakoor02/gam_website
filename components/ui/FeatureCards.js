import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCards() {
  const features = [
    {
      title: "Visa Consultation",
      description: "Expert advice on visa requirements and application processes",
      image: "/images/service/img_01.jpg"
    },
    {
      title: "Documentation",
      description: "Assistance with preparing and verifying all necessary documents",
      image: "/images/service/img_02.jpg"
    },
    {
      title: "Application Tracking",
      description: "Real-time tracking of your visa application status",
      image: "/images/service/img_03.jpg"
    },
    {
      title: "Post-Arrival Support",
      description: "Guidance and support after you arrive in your destination country",
      image: "/images/service/img_04.jpg"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive immigration solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}