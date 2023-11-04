import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/UseFetch";

// Get the current date
const currentDate = new Date();

// Calculate the date after 7 days
const dateNxtWk = new Date(currentDate);
dateNxtWk.setDate(currentDate.getDate() + 7);

// Calculate the date after 30 days
const dateNxtMnth = new Date(currentDate);
dateNxtMnth.setDate(currentDate.getDate() + 30);

// Format the dates as strings (if needed)
const dateNxtWkString = dateNxtWk.toISOString().split('T')[0]; // Example: "2023-11-11"
const dateNxtMnthString = dateNxtMnth.toISOString().split('T')[0]; // Example: "2023-12-04"

//console.log("Date after 7 days:", dateAfter7DaysString);
//console.log("Date after 30 days:", dateAfter30DaysString);


const Upcoming = () => {
    const [endpoint, setEndpoint] = useState("en");

    const { data, loading } = 
    useFetch(`/movie/upcoming?primary_release_date.gte=currentDate&primary_release_date.lte=${}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "English" ? "en" : "hi");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Upcoming Titles</span>
                <SwitchTabs data={["English", "Hindi"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} 
            loading={loading} 
            endpoint="movie"
            />
        </div>
    );
};

export default Upcoming;
