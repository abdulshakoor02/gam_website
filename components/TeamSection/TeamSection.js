import React from 'react';
import Teams from '../../api/team'
import Link from "next/link";
import Image from 'next/image';

const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="team pb-120">
            <div className="container">
                <div className="team-wrap pos-rel">
                    <div className="row mt-none-30">
                        <div className="col-xl-6 mt-30">
                            <div className="sec-title mb-45">
                                <h2 className="mb-40 wow skewIn">Our trusted immigration <br /> <span> support team</span>
                                </h2>
                                <p>At the heart of our commitment to providing exceptional immigration solutions
                                    stands</p>
                            </div>
                        </div>
                        {Teams.slice(0, 6).map((team, tm) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-30" key={tm}>
                                <div className="xb-team text-center">
                                    <div className="xb-item--inner" data-parallax='{"scale" : 1}'>
                                        <div className="xb-item--img">
                                            <Image src={team.tImg} alt="" />
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name"><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                            <span className="xb-item--designation">{team.title}</span>
                                        </div>
                                        <ul className="xb-item--social list-unstyled">
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xb-team-bg">
                        <div className="xb-bg xb-bg--1"></div>
                        <div className="xb-bg xb-bg--2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;