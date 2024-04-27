import React from 'react'
import Navbar from '../components/Navbar'
import FeaturedSections from '../components/FeaturedSections'
import FeedbackSection from '../components/FeedbackSection'
import ShowOffSection from '../components/ShowOffSection'
import KnowHowWeWork from '../components/KnowHowWeWork'
import FeaturesSection from '../components/FeaturesSection'
import FooterSection from '../components/FooterSection'
import CallOptions from '../components/CallOptions'

const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedSections />
      <FeedbackSection />
      <ShowOffSection />
      <KnowHowWeWork />
      <FeaturesSection />
      <FooterSection />
      {/* phone position fixed on left and whatsapp fixed on right */}
      <CallOptions />
    </div>
  )
}

export default Home
