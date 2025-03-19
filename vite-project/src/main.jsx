import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/NavBar.jsx'
import FlightSearch from './components/Search.jsx'
import TravelSearch from './components/TravelSearch.jsx'
import PopularDestinations from './components/PopularDestinations.jsx'
import PopularStays from './components/PopularStays.jsx'
import NewsLetter from './components/WeeklyUpdates.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

<Header></Header>

<FlightSearch></FlightSearch>

<TravelSearch></TravelSearch>

<PopularDestinations></PopularDestinations>

<PopularStays></PopularStays>

<NewsLetter></NewsLetter>

<Footer></Footer>

  </StrictMode>,
)
