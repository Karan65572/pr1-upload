import ApekshaPlaySchoolArticle from "./assets/ApekshaPlaySchoolArticle";
import HeroSlider from "./assets/HeroSlider";
import ImageGallery from "./assets/lmageGallery";
import NutritiousFoodSection from "./assets/NutritiousFoodSection";
import ProgramsOfferedSection from "./assets/ProgramsOfferedSection";

import './Home.css';

export default function Home(){
    return(
        <>
        <br /><br /><br />
       
        <HeroSlider /><br /><br />
        <hr />
        <ApekshaPlaySchoolArticle />
        <br /><br />
        <NutritiousFoodSection /><br /><br />
        <ProgramsOfferedSection />
        <ImageGallery />
        </>
        
    )
}