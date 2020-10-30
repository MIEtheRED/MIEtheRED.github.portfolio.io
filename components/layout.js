import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Brandon Miethe'
export const siteTitle = 'Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <nav class="navbar navbar-expand-sm bg-light w-100 sticky" >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            <p>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </p>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
