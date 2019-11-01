import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Reservations = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="Reserve a room">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Reservations;
