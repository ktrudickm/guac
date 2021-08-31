import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Sidebar from '../components/SideBar'

const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/> 
           <Navbar toggle={toggle}/>
           <HeroSection />
           <InfoSection {...homeObjOne}/>
           <Features />
           <InfoSection {...homeObjTwo}/>
        </>
    )
}

export default Home

