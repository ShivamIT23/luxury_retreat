import Hero from "./components/Hero"
import Story from "./components/Story"
import OurValues from "./components/OurValues"
import Partners from "./components/Partners"
import Last from "./components/Last"

function About() {
  return (
    <div className='w-full h-fit min-h-full'>
      <Hero />
      <Story />
      <OurValues />
      <Last />
      <Partners />
    </div>
  )
}

export default About