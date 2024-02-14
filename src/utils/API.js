import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="
const APIKEY = "&key=AIzaSyA4yEGIBSEOaFSVznZV2CZ63py3QzAVbsY"

// Export an object containing methods we'll use for accessing the Youtube APi

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);

  }
};

