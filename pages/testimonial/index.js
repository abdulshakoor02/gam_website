import React, { Fragment, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';
import tsm1 from '/public/images/testimonial/avatar1.jpg'
import tsm2 from '/public/images/testimonial/avatar2.jpg'
import tsm3 from '/public/images/testimonial/avatar3.jpg'
import tsm4 from '/public/images/testimonial/avatar4.jpg'
import tsm5 from '/public/images/testimonial/avatar5.jpg'
import tsm6 from '/public/images/testimonial/avatar6.jpg'
import tsm7 from '/public/images/testimonial/avatar7.jpg'
import Image from 'next/image';
const MasonryWrapper = dynamic(() => import('../../components/MasonryWrapper/MasonryWrapper'), { ssr: false });

const TestimonialPage = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonial = [
    {
      id: '01',
      tImg: tsm1,
      Des: "Elisa Doward, a Canadian university student, embarked on a journey abroad with the help of E.visa Company Service. With their support, she successfully pursued her education overseas, gaining valuable experiences and knowledge.",
      Des2: 'Upon returning to Canada, Elisas determination and E.visa Company Services guidance led her to a thriving career in Seattle. She now excels in her field, serving as an inspiration for others seeking success in there life as well.',
      Des3: 'Elisas story showcases the power of determination and expert support in achieving ones dreams.',
      Title: 'Elisa Doward',
      sub: 'Canadian Student',
    },
    {
      id: '02',
      tImg: tsm2,
      Des: "Malinda Hira, a bright student from a Canadian university, embarked on an incredible journey with E.visa Company Service. She had a thirst for international experiences and sought to study abroad. With E.visa's expert assistance, Malinda's dream became a reality.",
      Des2: "Studying overseas expanded Malinda's horizons and allowed her to immerse herself in diverse cultures. Her commitment to learning and adapting to new environments paid off, and she graduated with honors. Armed with a global perspective, Malinda returned to Canada and is now making waves in Seattle, excelling in her chosen field.",
      Des3: "Her story is a testament to the transformative power of international education and determination.",
      Title: 'Malinda Hira',
      sub: 'UK Student',
      style: 'style-2',
    },
    {
      id: '03',
      tImg: tsm3,
      Des: "David Mia, a Canadian university student, turned to E.visa Company Service for assistance in navigating the complexities of studying abroad. With their support, David pursued his education in a foreign land, gaining valuable insights and experiences.",
      Des2: "Upon his return to Canada, David's international background set him apart in the job market. He secured a coveted position in Seattle and quickly rose through the ranks, making his mark in the industry. His journey illustrates the career opportunities that await those who embrace global experiences and seize them with determination.",
      Title: 'David Mia',
      sub: 'Autralian Student',
      style: 'style-3',
    },
    {
      id: '04',
      tImg: tsm4,
      Des: "Jordan Alvz, a Canadian university student, enlisted the help of E.visa Company Service to embark on an overseas academic adventure. With their guidance, Jordan smoothly transitioned to studying abroad, expanding his horizons and honing his skills.",
      Des2: "Back in Canada, Jordan leveraged his international experiences to secure a promising career in Seattle.",
      Des3: "His dedication and unique perspective have made him an asset to his industry. Jordan's story exemplifies how studying abroad can lead to unparalleled professional growth and personal development.",
      Title: 'Jordan Alvz',
      sub: 'Canadian Student',
      style: 'style-4',
    },
    {
      id: '05',
      tImg: tsm5,
      Des: "Akhil Hossien, a determined student from a Canadian university, sought E.visa Company Service's expertise to facilitate his journey abroad. His desire for international education led him to pursue his dreams with unwavering determination.",
      Des2: "Akhil returned to Canada armed with knowledge and skills that set him apart in the job market.",
      Des3: "He secured a rewarding career in Seattle, where he continues to thrive. Akhil's story highlights how international experiences can open doors to success, and E.visa Company Service played a pivotal role in his remarkable journey.",
      Title: 'Akhil Hossien',
      sub: 'Indian Student',
      style: 'style-5',
    },
    {
      id: '06',
      tImg: tsm6,
      Des: "Gomez Raha, a Canadian university student, entrusted E.visa Company Service to help him embark on a life-changing international journey. With their support, Gomez pursued his education abroad, broadening his horizons and gaining invaluable insights.",
      Des2: "Upon his return to Canada, Gomez's global perspective made him a standout candidate in the competitive job market. He secured a prestigious position in Seattle, where he continues to excel.",
      Des3: "Gomez's story serves as a testament to the transformative power of international education and the essential role E.visa Company Service played in his journey to success.",
      Des4: "Company Service to help him embark on a life-changing international journey. With their support, Gomez pursued his education abroad, broadening his horizons and gaining invaluable insights of the oscitation .",
      Des5: "He secured a rewarding career in Seattle, where he continues to thrive. Akhil's story highlights how international experiences .",
      Title: 'Gomez Raha',
      sub: 'Canadian Student',
      style: 'style-6',
    },
    {
      id: '03',
      tImg: tsm7,
      Des: "Makhacav Rim, a determined individual from a diverse background, embarked on a remarkable journey with the help of E.visa Company Service. Makhacav's dream was to pursue higher education in Canada, and E.visa became the.",
      Title: 'Makhacav Rim',
      sub: 'Japan Student',
      style: 'style-7',
    },
  ]

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={'Success stories'} pagesub={'Success stories'} />
      <section className="testimonial pt-180 pb-130">
        <div className="container">
          <div className="xb-testimonial__masonry">
            <div className="row grid mt-none-100">
              {/* Render masonry on client only; server renders fallback grid */}
              {isClient && MasonryWrapper ? (
                <MasonryWrapper>
                  {testimonial.map((item, index) => (
                    <div className="mt-100" key={item.id || index}>
                      <div className={`xb-testimonial3 ${item.style || ""}`}>
                        <div className="xb-item--inner">
                          <div className="xb-item--author-info ul_li mb-40">
                            <div className="xb-item--avatar">
                              <Image src={item.tImg} alt={item.Title || "avatar"} width={191} height={191} />
                            </div>
                            <div className="xb-item--author">
                              <h3 className="xb-item--name">{item.Title}</h3>
                              <span className="xb-item--desig">{item.sub}</span>
                            </div>
                          </div>
                          <div className="xb-item--content">
                            {item.Des ? <p>{item.Des}</p> : ''}
                            {item.Des2 ? <p>{item.Des2}</p> : ''}
                            {item.Des3 ? <p>{item.Des3}</p> : ''}
                            {item.Des4 ? <p>{item.Des4}</p> : ''}
                            {item.Des5 ? <p>{item.Des5}</p> : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </MasonryWrapper>
              ) : (
                <div className="row grid mt-none-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonial.map((item, index) => (
                      <div className="mt-100" key={item.id || index}>
                        <div className={`xb-testimonial3 ${item.style || ""}`}>
                          <div className="xb-item--inner">
                            <div className="xb-item--author-info ul_li mb-40">
                              <div className="xb-item--avatar">
                                <Image src={item.tImg} alt={item.Title || "avatar"} width={191} height={191} />
                              </div>
                              <div className="xb-item--author">
                                <h3 className="xb-item--name">{item.Title}</h3>
                                <span className="xb-item--desig">{item.sub}</span>
                              </div>
                            </div>
                            <div className="xb-item--content">
                              {item.Des ? <p>{item.Des}</p> : ''}
                              {item.Des2 ? <p>{item.Des2}</p> : ''}
                              {item.Des3 ? <p>{item.Des3}</p> : ''}
                              {item.Des4 ? <p>{item.Des4}</p> : ''}
                              {item.Des5 ? <p>{item.Des5}</p> : ''}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <NewsLatter />
      <ContactSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  )
};
export default TestimonialPage;