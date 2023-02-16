import React from "react";
import Client from "../parts/Client";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";

export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Client />
            <Sitemap />
            <Footer />
        </div>
    );
}
