import SectionTitle from '../components/SectionTitle';
import aboutSvg from '../assets/about.svg';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className='w-full h-64' />
        <article>
            <SectionTitle text='Build Confidence' />
            <p className="text-slate-600 mt-8 leading-loose">
            Crafting small web projects is a powerful way to build confidence and refine your skills. Each project offers a unique challenge, allowing you to apply your knowledge and discover new techniques. By continuously working on diverse projects, you gain practical experience and a sense of accomplishment that fuels your growth as a developer. These hands-on experiences not only enhance your technical abilities but also empower you with the confidence to tackle more complex projects and innovate with greater assurance.

                </p> 
        </article>
      </div>
    </section>
  )
}

export default About
