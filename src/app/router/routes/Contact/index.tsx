import Form from "./components/Form"
import Hero from "./components/Hero"
import Last from "./components/Last"

function Contact() {
  return (
    <div className='w-full h-fit min-h-full'>
        <Hero />
        <Form />
        <Last />
    </div>
  )
}

export default Contact