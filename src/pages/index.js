import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Reasons from '@/components/Reasons'
import MyNav from '@/components/MyNav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Betting App</title>
        <meta name='description' content='Betting Helper by Chauncey Plummer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'
        />
      </Head>
      <main>
        <div>
          <Login />
        </div>
      </main>
    </>
  )
}
