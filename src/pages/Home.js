import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MyNav from '@/components/MyNav'
import Reasons from '@/components/Reasons'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <MyNav />
        <Hero />
        <Reasons />
        <Footer />
      </div>
    </div>
  )
}

export default Home
