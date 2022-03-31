import Head from "next/head";
import About from "../components/About/About.js";
import Contact from "../components/Contact/Contact.js";
import Services from "../components/Services/Services.js";
import Skills from "../components/Skills/Skills.js";
import Testimonials from "../components/Testimonials/Testimonials.js";
import Works from "../components/Works/Works.js";
import { getContentFromMarkdown } from "../utils/getContentFromMarkdown";
import { getAllServices } from "../utils/getServicesFromMarkdown";
import { getFeaturedProjects } from "../utils/getProjectsFromMarkdown";
import { getAllTestimonials } from "../utils/getCommentsFromMarkdown";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          charSet="utf-8"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About contactInfo={props.contact} content={props.about} />
        <Skills content={props.skills} />
        <Services data={props.services} />
        <Works data={props.works} />
        <Testimonials data={props.testimonials} />
        <Contact content={props.contact} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const contactInfo = getContentFromMarkdown("contact");
  const aboutContent = getContentFromMarkdown("about");
  const mySkills = getContentFromMarkdown("skills");
  const allServices = getAllServices();
  const featuredWorks = getFeaturedProjects();
  const testimonials = getAllTestimonials();
  return {
    props: {
      contact: contactInfo,
      about: aboutContent,
      skills: mySkills,
      services: allServices,
      works: featuredWorks,
      testimonials: testimonials,
    },
  };
}
