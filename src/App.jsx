import { useState, useEffect } from 'react';

import { fetchDataFromApi } from "./utils/api";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/explore/Explore';
import Details from './pages/details/Details';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchResult from './pages/searchResult/SearchResult';


function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=> state.home);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "w1280",
        poster: res.images.secure_base_url + "w780",
        profile : res.images.secure_base_url + "h632", 
      }

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] =
        item))
    })
    dispatch (getGenres(allGenres));
  }

  return (
    // <div className="App">App 
    // {url?.total_pages}</div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
