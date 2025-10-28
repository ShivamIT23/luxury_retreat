import All from "./components/All"
import ContactButton from "./components/ContactButton"
import Hero from "./components/Hero"
import Last from "./components/Last"

function Destination() {
  return (
    <div className='w-full h-fit min-h-full'>
        <Hero />
        <All />
        <ContactButton />
        <Last />
    </div>
  )
}

export default Destination