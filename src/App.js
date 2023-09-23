import logo from './assets/react-logo.png';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Dashboard from './components/Dashboard';
import { createBrowserRouter,BrowserRouter, RouterProvider } from 'react-router-dom';
import Video from './pages/Video';
import Home from "./pages/Home";
const router = createBrowserRouter([
    {
        path: "/video/:id",
        element: <Video />
    },
    {
        path: "/",
        element: <Home />
    }
])
function App() {
    return (
        <RouterProvider router ={router} />

    //    <div className = "min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">

    //         <Navbar/>
            
    //         <h1 className = " px-8 py-6 text-3xl font-bold"> Anime List</h1>

    //         <ul className = "flex flex-wrap gap-32">
            
    //         <Dashboard/>

    //         <VideoCard
    //         title = "Spongebob Squarepants"
    //         thumbnailURL = "https://m.media-amazon.com/images/M/MV5BNTk2NzEyNTQtZTQ5MS00MjAyLTgzMDMtNDNkYTBkM2M2OTU3XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg"
    //         />
    //         <VideoCard
    //         title = "Peppa Pig"
    //         thumbnailURL = "https://m.media-amazon.com/images/M/MV5BNDUyODQ0NjAtYTZjMS00MzBjLWI1ZjYtMzBhYzgyYzdjMTE4XkEyXkFqcGdeQXVyMzU5OTE2NTI@._V1_.jpg"
        
    //         />
    //         <VideoCard
    //         title = "Avatar: The Last Airbender"
    //         thumbnailURL = "https://m.media-amazon.com/images/I/916XiNKSc6L._AC_UF1000,1000_QL80_.jpg"
    //         />
    //         <VideoCard/>

    //         </ul>


    //     </div>
    );
}

export default App;
