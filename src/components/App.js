import React,{Fragment} from 'react' 

import Header from '../components/ui/Header'
import CategoryBlock from './Home/CategoryBlock'
import SearchBarBlock from './Home/SearchBarBlock'
import LatestListingBlock from './Home/LatestListingBlock'
import NotificationBlock from './Home/NotificationBlock'
import Footer from './ui/Footer'

function App() {
  return (
    <Fragment>
        <Header/>
        <SearchBarBlock/>
        <CategoryBlock/>
        <LatestListingBlock/>
        <NotificationBlock/>
        <Footer/>
    </Fragment>
  );
}

export default App;
