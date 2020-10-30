/*
Modification Log:

10/28/2020 - Created initial documents from Next.js tutorial
             Used this completed tutorial as a template
10/29/2020 - Filled in existing sections with personalized content
10/30/2020 - Added Projects, and Contact sections
             Added Carousel to Projects
             Added Form to Contact
             Added Navbar and footer
             Added CSS stylings to global CSS

*/

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi there! My name is Brandon, and I am a first
          year Software Development Student at The College
          of Western Idaho. This project was made using 
          Next.js as its JS framwork and Bootstrap 4 as its
          CSS framework. It uses Date-fns, Gray-matter,
          Remark, and Paths as its JS libraries.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 id="blog" className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 id="projects" className={utilStyles.headingLg}>Projects</h2>
        <div id="demo" class="carousel slide" data-ride="carousel">

          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/images/warlocks3.jpg" alt="Warlock's Beard"></img>
            </div>
            <div class="carousel-item">
              <img src="/images/warlocks4.jpg" alt="Warlock's Beard"></img>
            </div>
            <div class="carousel-item">
              <img src="/images/kiesel1.jpg" alt="Kiesel Guitars"></img>
            </div>
            <div class="carousel-item">
              <img src="/images/kiesel2.jpg" alt="Kiesel Guitars"></img>
            </div>
            <div class="carousel-item">
              <img src="/images/trustedFriends.jpg" alt="Trusted Friends"></img>
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>

        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 id="contact" className={utilStyles.headingLg}>Contact</h2>
        <p class="w-responsive mx-auto mb-5"> Do you have any comments or questions?
        Please do not hesitate to contact me. I will get back to you within 48 business hours.</p>
        <section class="mb-4">
          <div class="row">

                <div class="col-md-9 mb-md-0 mb-5">
                    <form action="mailto:bmiethe90@gmail.com" method="post" enctype="text/plain">

                        <div class="row">

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control"></input>
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control"></input>
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control"></input>
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>

                    </form>

                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </div>

            </div>

        </section>
      </section>
      <footer class="w-100">
            <p>Thank you for taking the time to view my portfolio!<br></br>
              Please visit me on <a href="https://www.facebook.com/profile.php?id=100006746625985" target="_blank">Facebook</a>
              and <a href="https://www.instagram.com/miethered/" target="_blank">Instagram</a>
            </p>
      </footer>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
