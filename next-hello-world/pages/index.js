import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm a backend web developer, passionate at Go, Python, Elixir (Phoenix), PHP (Laravel) and of course [a must] Javascript (React.js Next.js, Vue.js Nuxt.js, Node.js Express.js Nest.js), </p>
        <p>
          (Programming is a long journey - it's a marathon not a sprint{' '}
          <a href="https://nextjs.org/learn">
            another Next.js tutorial check out here
          </a>.)
        </p>
      </section>
        <div className={styles.backToHome}>
          <Link href="/posts/first-post">
            <a>←Post</a>
          </Link>
        </div>
    </Layout>
  
  )
}
