import { useState } from "react"
import Hero from "./components/Hero"
import Story from "./components/Story"
import OurValues from "./components/OurValues"
import Partners from "./components/Partners"
import Last from "./components/Last"

function About() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className='w-full h-fit min-h-full'>
      <Hero onVideoLoaded={handleVideoLoaded} />
      {videoLoaded && (
        <>
          <Story />
          <OurValues />
          <Last />
          <Partners />
        </>
      )}
    </div>
  )
}

export default About