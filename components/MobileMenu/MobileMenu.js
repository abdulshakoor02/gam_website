import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Immigration',
                link: '/home'
            },
            {
                id: 12,
                title: 'Studient Visa',
                link: '/home-studient-visa'
            },
            {
                id: 13,
                title: 'Travel Agency',
                link: '/home-travel-agency'
            }
        ]
    },
    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'Services',
                link: '/services'
            },
            {
                id: 3222,
                title: 'Service Details',
                link: '/service-single/Tourist-Visa'
            },
            {
                id: 322,
                title: 'Coaching',
                link: '/coaching'
            },
            {
                id: 323,
                title: 'Coaching Details',
                link: '/coaching-single/Take-IELTS'
            },
            {
                id: 33,
                title: 'Visa',
                link: '/visa'
            },
            {
                id: 34,
                title: 'Visa Details',
                link: '/visa-single/Commercial-Visa'
            },
            {
                id: 345,
                title: 'Team',
                link: '/team'
            },
            {
                id: 3454,
                title: 'Team Details',
                link: '/team-single/Esther-Howard'
            },
            {
                id: 35,
                title: 'Testimonials',
                link: '/testimonial'
            },
            {
                id: 36,
                title: 'FAQ',
                link: '/faq'
            },
            {
                id: 37,
                title: '404',
                link: '/404'
            }
        ]
    },
    {
        id: 4,
        title: 'About Us',
        link: '/about',
    }, {
        id: 5,
        title: 'Country',
        link: '/country',
        submenu: [
            {
                id: 51,
                title: 'Country',
                link: '/country'
            },
            {
                id: 52,
                title: 'Country Details',
                link: '/country-single/Australia'
            }
        ]
    },
    {
        id: 6,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 61,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 62,
                title: 'Blog Details',
                link: '/blog-single/Cultural-adjustment-thriving-in-a-new-country'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="xb-menu-primary clearfix">
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="subMenu">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <Link onClick={ClickHandler} className="active"
                                                            href={submenu.link}>{submenu.title}</Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <Link className="active"
                                href={item.link}>{item.title}</Link>
                        }
                    </ListItem>
                )
            })}
        </ul>
    )
}

export default MobileMenu;