import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./components/sections/Hero"
import ShowCaseSection from "./components/sections/ShowCaseSection"


const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
        </>
    )
}

export default App