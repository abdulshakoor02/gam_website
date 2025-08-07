import React from "react";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

const CardsSection = () => {
    const cardsData = [
        {
            id: 1,
            title: "Canada Immigration",
            description: "The Subclass 190 visa is a points-tested permanent residency visa for skilled workers nominated by an Australian state or territory. It allows you to live and work in Australia as a permanent resident.",
            image: "/images/cards/civil_engineer.jpg",
            alt: "Canada immigration services",
            overlayText: "Subclass 190 - skilled Nominated Visa",
            overlayColor: "from-blue-600 to-purple-600",
            href: "/australia/Skilled-Nominated-190"
        },
        {
            id: 2,
            title: "Australia Migration",
            description: "The Subclass 491 visa is a temporary, points-tested visa for skilled workers nominated by a regional area in Australia. It allows you to live, work, and study in designated regional areas for up to 5 years, with a pathway to permanent residency.",
            image: "/images/cards/engineer.jpg",
            alt: "Australia migration services",
            overlayText: "Australia - Subclass 491",
            overlayColor: "from-green-600 to-teal-600",
            href: "/australia/Worked-Regional-Provisional"
        },
        {
            id: 3,
            title: "Student Visas",
            description: "The Canada Family Sponsorship Visa allows Canadian citizens and permanent residents to sponsor eligible family members to immigrate to Canada. It helps reunite families by granting permanent residency to sponsored relatives.",
            image: "/images/cards/family.jpg",
            alt: "Student visa services",
            overlayText: "Canada - Family Sponsorship",
            overlayColor: "from-orange-600 to-red-600",
            href: "/canada/Family-Sponsorship"
        },
        {
            id: 4,
            title: "Business Setup",
            description: "The Canada Express Entry Visa is a points-based immigration system for skilled workers seeking permanent residency. It manages applications through programs like the Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades.",
            image: "/images/cards/express_entry.jpg",
            alt: "Business setup services",
            overlayText: "Canada Express Entry",
            overlayColor: "from-indigo-600 to-blue-600",
            href: "/canada/Express-Entry"
        }
    ];

    return (
        <section className="cards-section pt-80 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center mb-60">
                            <Slide direction="up" triggerOnce={true} duration={1200}>
                                <h2 style={{
                                    fontSize: "clamp(28px, 4vw, 36px)",
                                    fontWeight: "700",
                                    color: "#333",
                                    lineHeight: "1.3"
                                }}>
                                    Choose Your Favourite <span>Program</span>
                                </h2>
                            </Slide>
                            <Slide direction="up" triggerOnce={true} duration={1400}>
                                <p style={{
                                    fontSize: "clamp(16px, 2.2vw, 18px)",
                                    lineHeight: "1.6",
                                    color: "#666",
                                    maxWidth: "600px",
                                    margin: "0 auto"
                                }}>
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
                            className="col-lg-3 col-md-6 col-sm-12 mb-30"
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
                                    style={{
                                        background: "white",
                                        borderRadius: "15px",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                        overflow: "hidden",
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        height: "100%"
                                    }}
                                >
                                    <div className="card-image-wrapper relative overflow-hidden rounded-t-lg mb-30 group" style={{ height: "250px" }}>
                                        <div className="relative w-full h-full">
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
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-100 transition-all duration-500">
                                                <div className="bg-white rounded-xl p-4 text-center shadow-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300" style={{ maxWidth: "90%" }}>
                                                    <h3 style={{
                                                        fontSize: "clamp(14px, 2.5vw, 18px)",
                                                        fontWeight: "600",
                                                        color: "#333",
                                                        marginBottom: "8px",
                                                        lineHeight: "1.3"
                                                    }}>
                                                        {card.overlayText}
                                                    </h3>
                                                    <div style={{ width: "12px", height: "2px", background: "linear-gradient(to right, #AA236C, #F28735)", margin: "0 auto", borderRadius: "1px" }}></div>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <h3
                                                    id={`card-title-${card.id}`}
                                                    style={{
                                                        fontSize: "clamp(16px, 2.5vw, 20px)",
                                                        fontWeight: "600",
                                                        color: "white",
                                                        marginBottom: "5px",
                                                        textShadow: "0 1px 2px rgba(0,0,0,0.5)"
                                                    }}
                                                >
                                                    {card.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-content" style={{ padding: "20px" }}>
                                        <b style={{
                                            fontSize: "clamp(14px, 2vw, 16px)",
                                            color: "#AA236C",
                                            display: "block",
                                            marginBottom: "10px"
                                        }}>
                                            {card.overlayText}
                                        </b>
                                        <p style={{
                                            fontSize: "clamp(13px, 2vw, 15px)",
                                            lineHeight: "1.5",
                                            color: "#666",
                                            marginBottom: "20px"
                                        }}>
                                            {card.description}
                                        </p>
                                        <Link
                                            style={{
                                                display: "inline-block",
                                                padding: "10px 20px",
                                                background: "linear-gradient(90deg,#AA236C 0%, #F28735 100%)",
                                                color: "white",
                                                textDecoration: "none",
                                                borderRadius: "25px",
                                                fontSize: "clamp(14px, 2vw, 16px)",
                                                fontWeight: "500",
                                                textAlign: "center",
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                boxShadow: "0 4px 15px rgba(170, 35, 108, 0.3)"
                                            }}
                                            className="grd-btn"
                                            aria-label={`Learn more about ${card.title}`}
                                            href={card.href}
                                        >
                                            Learn More
                                        </Link>
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