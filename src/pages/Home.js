import React from 'react'
import { BannerData } from '../data/bannerData'
import Banner from './../components/banner/Banner'
import Navbar from "./../components/navbar/Navbar"

const Home = () => {
    return (
        <>

        <Navbar />
        <Banner pictures={BannerData}/>

        </ >

    )
}

export default Home
