import AboutSection from "./components/portfolio/AboutSection"
import ContactSection from "./components/portfolio/ContactSection"
import FeatureProjectSection from "./components/portfolio/FeatureProjectSection"
import { FooterSection } from "./components/portfolio/FooterSection"
import HeroSection from "./components/portfolio/HeroSection"
import Navbar from "./components/portfolio/Navbar"
import ServiceSection from "./components/portfolio/ServiceSection"
import SkillSection from "./components/portfolio/SkillSection"



function App() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Navbar/>

      <main>
        {/* Hero Section */}
        <HeroSection/>

        {/* About Section */}
        <AboutSection/>

        {/* Service Section */}
        <ServiceSection/>
        
        {/* Feature Project Section */}
        <FeatureProjectSection/>
        
        {/* Skills Section */}
        <SkillSection/>
        
        {/* Contact Section */}
        <ContactSection/>

        <FooterSection/>

      </main>
      
    </div>
  )
}

export default App
