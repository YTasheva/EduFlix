
import React from "react";
import API from "../../utils/API";


 export default function EduCard({ key, card }) {

  const handleSearchClick = (event) => {
    // event.preventDefault();
    searchVideo(card.topic);
  }; 

  const searchVideo = (query) => {
    API.search(query)
    .then((response) => 
       
      {
        
      const data = response.data;
      
      // Check if there are any video results
      if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId; // Get the video ID of the first result
          const trailerSrc = `https://www.youtube.com/embed/${videoId}`;

          const videoModalLabel = document.getElementById('videoModalLabel');
          const videoModalIframe = document.getElementById('videoPlayer');
          videoModalLabel.textContent = card.topic;
          videoModalIframe.src = trailerSrc;
          // Show the modal
          const videoModal = document.getElementById('videoModal');
          videoModal.show(); 

          

      } else {
          console.error('No video for this search.');
          // Log error when there's no trailer available
      }
  })
    .catch((error) => console.log(error))
  
    }; 
  
  

  return (
    

    <div className="h-[550px] w-[320px]" key={key}>

<div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="videoModalLabel">The Creator (Video Name/Title)</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe id="videoPlayer" class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}"></iframe>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="myWatchlist">Add to Watchlist</button>
          </div>
        </div>
      </div>
    </div>


      <div className="relative rounded-xl overflow-hidden">
        <img src={card.image} alt="fund1" />
        <div className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[10px] text-center">
          {card.circleText}
        </div>
      </div>
      <div className="flex items-center gap-4 my-4 px-2">
        <h1 className="bg-[#5c807162] px-3 py-1 rounded-md text-[#6D9886] text-[17px] font-medium">
          € {card.price}
        </h1>
        <p className="text-xs font-bold text-[#6D9886]">
          <i className="fa fa-clock text-xs text-[14px]" /> {card.date}
        </p>
        <i className="fa fa-heart text-xs text-[#6D9886] text-[14px] ml-auto" />
      </div>
      <h2 className="font-bold text-[17px] px-2 hover:text-[#6D9886] transition-colors cursor-pointer" onClick={handleSearchClick}>
        {card.topic}
      </h2>
    </div>
  );
}   

/* import React from "react";
// import API from "../../utils/API";

export default function EduCard({ card }) {

  const handleSearchClick = () => {
    searchVideo(card.topic);
  }; 
/*
  const searchVideo = (query) => {
    API.search(query)
    .then((response) => {
      return response.json();
    }) 

    function searchVideo(query) {

      /* const apiKey = 'AIzaSyBzBmmP2hecqGCQDGiNYnq92Ea6foRIdms';
      const encodedTitle = encodeURIComponent(query); 
      // const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodedTitle}+trailer&key=${apiKey}`;

      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=query&key=AIzaSyA4yEGIBSEOaFSVznZV2CZ63py3QzAVbsY`;

      fetch(searchUrl)
          .then((response) => {
              return response.json();
          }) 
    .then((data) => {
      // Check if there are any video results
      if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId; // Get the video ID of the first result
          const trailerSrc = `https://www.youtube.com/embed/${videoId}`;
          // Set the trailer source and update modal title
          const videoModalLabel = document.getElementById('videoModalLabel');
          const videoModalIframe = document.getElementById('videoModalIframe');
          videoModalLabel.textContent = card.topic;
          videoModalIframe.src = trailerSrc;
          // Show the modal
          const videoModal = document.getElementById('videoModal');
          videoModal.show();
      } else {
          console.error('No video for this search.');
          // Log error when there's no trailer available
      }
    })
    .catch((error) => console.log(error));
  }; 
  
  return (
    <div className="h-[550px] w-[320px]">

      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="videoModalLabel">The Creator (Video Name/Title)</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe id="videoModalIframe" className="embed-responsive-item" src="https://www.youtube.com/embed/6MUcuqbGTxc" allowFullScreen></iframe>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" id="myWatchlist">Add to Watchlist</button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <img src={card.image} alt="fund1" />
        <div className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[10px] text-center">
          {card.circleText}
        </div>
      </div>
      <div className="flex items-center gap-4 my-4 px-2">
        <h1 className="bg-[#5c807162] px-3 py-1 rounded-md text-[#6D9886] text-[17px] font-medium">
          € {card.price}
        </h1>
        <p className="text-xs font-bold text-[#6D9886]">
          <i className="fa fa-clock text-xs text-[14px]" /> {card.date}
        </p>
        <i className="fa fa-heart text-xs text-[#6D9886] text-[14px] ml-auto" />
      </div>
      <h2 className="font-bold text-[17px] px-2 hover:text-[#6D9886] transition-colors cursor-pointer" onClick={handleSearchClick}>
        {card.topic}
      </h2>
    </div>
  );
}   
 */