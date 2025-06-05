import LogoSection from "./components/sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./components/sections/Hero"
import ShowCaseSection from "./components/sections/ShowCaseSection"
import FeatureCards from "./components/sections/FeatureCards"
import ExperienceSection from "./components/sections/ExperienceSection"
import TechStack from "./components/sections/TechStack"


const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
        </>
    )
}

export default App