import React from 'react';
import '../Styles/Form.css';
import Header from '../Components/Header';
import HomePageSection from '../Sections/HomePageSection';
import AboutPageSection from '../Sections/AboutPageSection';
import SkillsSection from '../Sections/SkillsSection';
import ProjectsSection from '../Sections/ProjectsSection';
import ContactPageSection from '../Sections/ContactPageSection';
import Footer from '../Components/Footer';

export default function CreatePortfolio() {
  return (
    <div>
    <Header/>
    <div className="form-container">
      <h1>Create your Portfolio</h1>
      <form>
        <HomePageSection />
        <AboutPageSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactPageSection />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

           <h1>Create your portfolio</h1>
        