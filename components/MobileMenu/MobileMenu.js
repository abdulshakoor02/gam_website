import React, { useState } from 'react';
import Link from 'next/link';

const menus = [
  { id: 'home', title: 'Home', link: '/' },
  {
    id: 'services',
    title: 'Services',
    submenu: [
      {
        id: 'canada',
        title: 'Canada Visa',
        submenu: [
          { id: 'express-entry', title: 'Express Entry', link: '/canada/Express-Entry' },
          {
            id: 'pilot',
            title: 'Pilot Program',
            submenu: [
              { id: 'aipp', title: 'AIPP', link: '/pilot/aipp' },
              { id: 'rnip', title: 'RNIP', link: '/pilot/rnip' },
              { id: 'mcdii', title: 'MCDII', link: '/pilot/mcdii' }
            ]
          },
          {
            id: 'pnp',
            title: 'Provincial Nomination Program',
            submenu: [
              { id: 'alberta', title: 'Alberta PNP', link: '/pnp/alberta' },
              { id: 'bc', title: 'British Columbia PNP', link: '/pnp/bc' },
              { id: 'manitoba', title: 'Manitoba PNP', link: '/pnp/manitoba' },
              { id: 'nb', title: 'New Brunswick PNP', link: '/pnp/nb' },
              { id: 'ns', title: 'Nova Scotia PNP', link: '/pnp/ns' },
              { id: 'ontario', title: 'Ontario PNP', link: '/pnp/ontario' },
              { id: 'pei', title: 'Prince Edward Island PNP', link: '/pnp/pei' },
              { id: 'sas', title: 'Saskatchewan PNP', link: '/pnp/sas' }
            ]
          },
          { id: 'student-visa', title: 'Student Visa', link: '/canada/Student-Visa' },
          { id: 'visit-visa', title: 'Visit Visa', link: '/canada/Visit-Visa' },
          { id: 'family-sponsorship', title: 'Family Sponsorship', link: '/canada/Family-Sponsorship' },
          {
            id: 'business',
            title: 'Business Program',
            submenu: [
              { id: 'ict', title: 'ICT Program', link: '/canada/ICT-Program' },
              { id: 'startup', title: 'Start-up Visa', link: '/canada/Start-up-Visa' }
            ]
          }
        ]
      },
      {
        id: 'australia',
        title: 'Australia Visa',
        submenu: [
          { id: 'skilled-189', title: 'Skilled Independent 189', link: '/australia/Skilled-Independent-189' },
          { id: 'skilled-190', title: 'Skilled Nominated 190', link: '/australia/Skilled-Nominated-190' },
          { id: 'regional-491', title: 'Skilled Work Regional Provisional 491', link: '/australia/Worked-Regional-Provisional' },
          { id: 'global-858', title: 'Global Talent Visa 858', link: '/australia/Global-Talent-Visa' },
          { id: 'spouse', title: 'Spouse Dependent Visa', link: '/australia/Spouse-Dependent-Visa' },
          { id: 'student', title: 'Student Visa', link: '/australia/Student-Visa' },
          { id: 'visit', title: 'Visit Visa', link: '/australia/Visit-Visa' }
        ]
      }
    ]
  },
  {
    id: 'nursing',
    title: 'Nursing',
    submenu: [
      { id: 'child-care', title: 'Child Care Support', link: '/nursing/Child-Care' },
      { id: 'home-care', title: 'Home Care Support', link: '/nursing/support-worker' }
    ]
  },
  { id: 'about', title: 'About us', link: '/about' },
  { id: 'testimonials', title: 'Testimonials', link: '/testimonial' },
  {
    id: 'blog',
    title: 'Blog',
    submenu: [
      { id: 'blog-main', title: 'Blog', link: '/blog' },
      { id: 'blog-details', title: 'Blog Details', link: '/blog-single/Cultural-adjustment-thriving-in-a-new-country' }
    ]
  },
  { id: 'contact', title: 'Contact', link: '/contact' }
];

const MobileMenu = () => {
  const [openMap, setOpenMap] = useState({});

  const toggle = (key) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const renderItems = (items) => {
    return (
      <ul className="xb-menu-primary clearfix" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.id} className={openMap[item.id] ? 'active' : ''} style={{ marginBottom: '5px' }}>
            {item.submenu ? (
              <>
                <button
                  type="button"
                  className="menu-toggle"
                  onClick={() => toggle(item.id)}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    background: 'linear-gradient(135deg, #AA236C 0%, #F28735 100%)',
                    border: 'none',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateX(5px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <span>{item.title}</span>
                  <i className={`fas ${openMap[item.id] ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '12px' }}></i>
                </button>
                {openMap[item.id] && (
                  <div className="subMenu" style={{
                    marginTop: '10px',
                    paddingLeft: '20px',
                    borderLeft: '2px solid #f0f0f0'
                  }}>
                    {renderItems(item.submenu)}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.link}
                onClick={ClickHandler}
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  borderLeft: '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.borderLeftColor = '#AA236C';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderLeftColor = 'transparent';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return renderItems(menus);
};

export default MobileMenu;
