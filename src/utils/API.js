import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="
        const apikey = '&key=AIzaSyBzBmmP2hecqGCQDGiNYnq92Ea6foRIdms';
        

// Export an object containing methods we'll use for accessing the Youtube APi

export default {
  search: function(query) {
    return axios.get(BASEURL + query + apikey);

  }
};

