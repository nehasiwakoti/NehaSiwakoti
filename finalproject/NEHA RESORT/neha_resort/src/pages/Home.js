import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home(){
    return (
        <>
        <Hero>
            <Banner title="WELCOME TO OUR RESORT" subtitle="Experience true hospitality">
                <Link to ="/rooms/" className="btn-primary">
                    Our Rooms
                </Link>
                

            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
};