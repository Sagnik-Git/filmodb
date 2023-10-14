import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/UseFetch";

const Upcoming = () => {
    const [endpoint, setEndpoint] = useState("en");

    const { data, loading } = useFetch(`/movie/upcoming?with_original_language=${endpoint}`);

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
