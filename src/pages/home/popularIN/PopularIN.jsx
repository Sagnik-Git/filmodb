import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/UseFetch";

const PopularIN = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/discover/${endpoint}?with_original_language=hi&sort_by=vote_count.desc`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Indian Hits</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} 
            loading={loading} 
            endpoint={endpoint}
            />
        </div>
    );
};

export default PopularIN;
