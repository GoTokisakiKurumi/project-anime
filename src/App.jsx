import './index.scss'
import HeaderSection from './components/ui/headerSection/HeaderSection'
import Navbar from './components/ui/navbar/Navbar'
import HeroSection from './components/ui/heroSection/HeroSection'
import ListAnimeSection from './components/ui/listAnimeSection/ListAnimeSection'

const App = () => {

  return (
    <>
      <HeaderSection>
        <Navbar/>
      </HeaderSection>
      <HeroSection/>
      <ListAnimeSection/>
    </>
  )
}

export default App
