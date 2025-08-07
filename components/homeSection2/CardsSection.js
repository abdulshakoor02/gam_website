import React from "react";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const CardsSection = () => {
    const cardsData = [
        {
            id: 1,
            title: "Canada Immigration",
            description: "Expert guidance for Canadian PR, study permits, and work visas with MARA-certified consultants.",
            image: "/images/cards/civil_engineer.jpg",
            alt: "Canada immigration services",
            overlayText: "Discover Canada",
            overlayColor: "from-blue-600 to-purple-600"
        },
        {
            id: 2,
            title: "Australia Migration",
            description: "Professional assistance for Australian visas including skilled migration and student visas.",
            image: "/images/cards/engineer.jpg",
            alt: "Australia migration services",
            overlayText: "Explore Australia",
            overlayColor: "from-green-600 to-teal-600"
        },
        {
            id: 3,
            title: "Student Visas",
            description: "Comprehensive support for student visas to top educational institutions worldwide.",
            image: "/images/cards/family.jpg",
            alt: "Student visa services",
            overlayText: "Study Abroad",
            overlayColor: "from-orange-600 to-red-600"
        },
        {
            id: 4,
            title: "Business Setup",
            description: "End-to-end business setup services in Canada, Australia, and other countries.",
            image: "/images/cards/express_entry.jpg",
            alt: "Business setup services",
            overlayText: "Grow Your Business",
            overlayColor: "from-indigo-600 to-blue-600"
        }
    ];

    return (
        <section className="cards-section pt-120 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center mb-80">
                            <Slide direction="up" triggerOnce={true} duration={1200}>
                                <h2 className="mb-20">
                                    Choose Your favourite <span>Program</span>
                                </h2>
                            </Slide>
                            <Slide direction="up" triggerOnce={true} duration={1400}>
                                <p className="text-lg">
                                    Professional immigration and visa services tailored to your needs
                                </p>
                            </Slide>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {cardsData.map((card, index) => (
                        <div
                            key={card.id}
                            className="col-lg-3 col-md-6 mb-30"
                            role="listitem"
                            aria-label={`${card.title} card`}
                        >
                            <Slide
                                direction="up"
                                triggerOnce={true}
                                duration={1200 + (index * 200)}
                                className="w-full"
                            >
                                <div
                                    className="card-item h-full"
                                    role="article"
                                    aria-labelledby={`card-title-${card.id}`}
                                >
                                    <div className="card-image-wrapper relative overflow-hidden rounded-lg mb-30 group">
                                        <div className="relative w-full h-64">
                                            <Image
                                                src={card.image}
                                                alt={card.alt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={index < 2}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                            {/* Modern Overlay Text */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="bg-white rounded-xl p-6 text-center shadow-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300">
                                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 tracking-tight">
                                                        {card.overlayText}
                                                    </h3>
                                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <h3
                                                    id={`card-title-${card.id}`}
                                                    className="text-white text-xl font-bold mb-2"
                                                >
                                                    {card.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            {card.description}
                                        </p>
                                        <button
                                            className="grd-btn"
                                            aria-label={`Learn more about ${card.title}`}
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsSection;