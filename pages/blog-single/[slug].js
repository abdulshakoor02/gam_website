import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';


const BlogDetails = (props) => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle/>
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;