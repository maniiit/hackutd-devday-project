import { Params } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {useState, useEffect} from 'react';
import {fetchVideoById} from '../api';
import { useParams } from 'react-router-dom';

function Video(){

    const params = useParams();
    const [video, setVideo] = useState();

   
    async function fetchData() {
      const data = await fetchVideoById(params.id)   
  
      setVideo(data);
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    if(!video) {
        return <h1>
            Loading...
        </h1>;
    }

return(
    <div className = "min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">

            <Navbar />  
            <div className = 'm-36'>
            <video controls>
             <source src = {video.videoUrl} />
             </video>     
            <h1 className = "text-3xl font-bold" > {video.title} </h1>
            </div>

           
          

            
            <h1 className = "text-3xl font-bold">One Piece</h1>  
            
            <h1 className = " px-8 py-6 text-3xl font-bold"> Anime List</h1>

            <ul className = "flex flex-wrap gap-32" > </ul>
            
</div>
);

}
export default Video
