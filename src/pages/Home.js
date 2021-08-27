import React, {useState} from 'react'
import Body from '../components/body/Body'
import ResponsiveNav from '../components/navbar/ResponsiveNav'
import { BannerData } from '../data/bannerData'
import Banner from './../components/banner/Banner'
import Navbar from "./../components/navbar/Navbar"

const Home = () => {

    const[open, setOpen] = useState(false)

    const toggle = () =>  {
        setOpen(!open)
    }
    return (
        <>

        <Navbar toggle={toggle}/>
        <ResponsiveNav open={open} toggle={toggle}/>
        <Banner pictures={BannerData}/>
        <Body />
        </ >

    )
}

export default Home
