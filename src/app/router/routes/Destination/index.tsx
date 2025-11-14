import All from "./components/All"
import ContactButton from "./components/ContactButton"
import Hero from "./components/Hero"
import Last from "./components/Last"
import WellnessRetreat from "./components/WellnessRetreat"

function Destination() {
  return (
    <div className='w-full h-fit min-h-full'>
        <Hero />
        <All />
        <ContactButton />
        <Last />
        <WellnessRetreat />
    </div>
  )
}

export default Destination