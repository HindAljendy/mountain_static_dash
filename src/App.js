import {  Route , Routes  } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore'; 
import Food from './pages/Food/Food';
import Inbox from './pages/Inbox/Inbox';
import NewArticle from './componnents/NewArticle/NewArticle';
import EditArticle from './componnents/EditArticle/EditArticle';
import PopUp from './componnents/PopUp/PopUp';
import Sidebar from './componnents/Sidebar/Sidebar';
import DeletedArticles from './componnents/DeletedArticles/DeletedArticles';
import DetailsArticles from './componnents/DetailsArticles/DetailsArticles';
import Restaurant from './pages/Explore/Restaurant/Restaurant';
import Chalet from './pages/Explore/Chalet/Chalet';
import Activity from './pages/Explore/Activity/Activity';
import Nature from './pages/Explore/Nature/Nature';
import Pool from './pages/Explore/Pool/Pool';
import Events from './pages/Explore/Events/Events';
import NewArticle_Explore from './componnents/NewArticle_Explore/NewArticle_Explore';
import GalleryDash from './pages/GalleryDash/GalleryDash';
import Restaurant_Gallery from './pages/GalleryDash/Restaurant/Restaurant_Gallery';
import Chalet_Gallery from './pages/GalleryDash/Chalet/Chalet_Gallery';
import Activity_Gallery from './pages/GalleryDash/Activity/Activity_Gallery';
import Nature_Gallery from './pages/GalleryDash/Nature/Nature_Gallery';
import Events_Gallery from './pages/GalleryDash/Events/Events_Gallery';
import Rooms from './pages/Rooms/Rooms';
import AD_NewRoom from './componnents/AD_NewRoom/AD_NewRoom';
import AD_DeletedRooms from './componnents/AD_DeletedRooms/AD_DeletedRooms';
import Western_Food from './pages/Food/Western_Food/Western_Food';
import Oriental_Food from './pages/Food/Oriental_Food/Oriental_Food';
import Traditional_Food from './pages/Food/Tranditional_Food/Traditional_Food';
import NewFood from './componnents/NewFood/NewFood';



function App() {
  return (
      <div className='App'>
        <Sidebar/>
        {/* Routes the pages */}
        <Routes>
          {/* Routes of the Blogs page */}
          <Route path='/' element={< Blogs />}/>
          <Route path='/new' element={< NewArticle />}/>
          <Route path='/edit_article' element={< EditArticle />}/>
          <Route path='/delete_article' element={< DeletedArticles />}/>
          <Route path='/pop_up' element={< PopUp />}/>
          <Route path='/details_article' element={< DetailsArticles />}/>
          <Route path='/gallery' element={< GalleryDash />}/>

            {/* Routes of the Gallery page */}
          <Route path='/gallery' element={< GalleryDash />}>
            <Route index element={<Restaurant_Gallery/>} /> 
            <Route path='/gallery/restaurant' element={< Restaurant_Gallery />} />
            <Route path='/gallery/chalet' element={<Chalet_Gallery />} />
            <Route path='/gallery/activity' element={<  Activity_Gallery/>} />
            <Route path='/gallery/nature' element={< Nature_Gallery/>} />
            <Route path='/gallery/events' element={< Events_Gallery/>} />
          </Route>

            {/* Routes of the Rooms  page */}
          <Route path='/room' element={< Rooms />}/>
          <Route path='/New_Room' element={<AD_NewRoom />}/>
          <Route path='/delete_room' element={<AD_DeletedRooms />}/>

            {/* Routes of the Booking page */}
          <Route path='/booking' element={< Booking />}/>

            {/* Routes of the Explore page */}
          <Route path='/explore' element={< Explore />}>
            <Route index element={<Restaurant/>} /> 
            <Route path='/explore/restaurant' element={< Restaurant />} />
            <Route path='/explore/chalet' element={< Chalet/>} />
            <Route path='/explore/activity' element={< Activity />} />
            <Route path='/explore/nature' element={<Nature />} />
            <Route path='/explore/pool' element={<Pool/>} />
            <Route path='/explore/events' element={<Events />} />
          </Route>
          <Route path='/new_ArticleExplore' element={<NewArticle_Explore />} />


            {/* Routes of the Food page */}
          <Route path='/food' element={< Food />}>
            <Route index element={<Western_Food/>} /> 
            <Route path='/food/Western_Food' element={<Western_Food/>}/>
            <Route path='/food/Oriental_Food' element={<Oriental_Food/>}/>
            <Route path='/food/Traditional_Food' element={<Traditional_Food/>}/>
          </Route>
          <Route path='/new_Food' element={<NewFood/>}/>


            {/* Routes of the Inbox page */}
          <Route path='/inbox' element={< Inbox />}/>
        </Routes>
        
        
      </div>

  );
}

export default App;
