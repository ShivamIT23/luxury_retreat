import Feature from './components/Feature'
import Hero from './components/Hero'
import Last from './components/Last'
import Market from './components/Market'
import Represent from './components/Represent'
import WhatWeDo from './components/WhatWeDo'

function Home() {
    return (
        <div className='w-full h-fit min-h-full'>
            <Hero />
            <Feature />
            <WhatWeDo />
            <Represent />
            <Market />
            <Last />
        </div>
    )
}

export default Home