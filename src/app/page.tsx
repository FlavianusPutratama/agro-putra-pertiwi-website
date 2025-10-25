import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import Products from '@/components/Products'
import ExportServices from '@/components/ExportServices'
import Sustainability from '@/components/Sustainability' // Import komponen baru
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <ExportServices />
      <Sustainability /> 
      <CTA />
    </>
  )
}