import React from 'react'
import Body from '../components/body/Body'
import { BannerData } from '../data/bannerData'
import { BodyDataOne } from '../data/bodyData'
import Banner from './../components/banner/Banner'

const Home = () => {

   
    return (
        <>

        <Banner pictures={BannerData}/>
        <Body {...BodyDataOne} />

        </ >

    )
}

export default Home
