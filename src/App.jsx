import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CallToAction from './components/CallToAction'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import data from './assets/data.json'

function App() {

  const [sections, setSections] = useState(data)

  const renderComponent = (section, index) => {
    switch (section.type) {
      case "navbar":
        return <Navbar data={section.props} key={index} />
      case "hero":
        return <Hero data={section.props} key={index} />
      case "services":
        return <Services data={section.props} key={index} />
      case "cta":
        return <CallToAction data={section.props} key={index} />
      case "testimonials":
        return <Testimonials data={section.props} key={index} />
      default:
        return null
    }
  }
  return <>{sections.map(renderComponent)}</>
}

export default App
