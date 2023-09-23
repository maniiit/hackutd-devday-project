function VideoCard (props) {
    return(
    <a href={'/video' + '/' + props.id}>

       
        <div className = "relative m-8 h-[299px] w-[180px] bg-secondary rounded-md overflow-hidden">
            <img 
            src={props.thumbnailURL} alt={props.title} 
            
            />
            <div className = "absolute bottom-0 w-full h-2/5 rounded-md bg-gradient-to-t from-black to -transparent"></div>
            <h1 className = "absolute bottom-4 font-semibold">
               {props.title} 
                </h1>
        </div>
        </a>
    )
      
}

export default VideoCard;