import Header from "./../components/Header/Header";
import Hero from "./../components/Hero/Hero";
import Services from "./../components/Services/Services";
import Clients from "components/Clients/Clients";
import BrandsSlider from "components/BrandsSlider/BrandsSlider";
import WorkSteps from "components/Stages/Worksteps";

function Home() {
    return (
        <>
        <Header/>
        <Hero/>
        <Services/>
        <Clients/>
        <BrandsSlider/>
        <WorkSteps/>
        </>
    );  

}

export default Home;