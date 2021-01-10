import axios from 'axios';
import querystring from 'querystring';
import qs from 'qs'
import SpotifyWebApi from 'spotify-web-api-node';

const SPOTTY_BASE = 'https://spottydata-api.herokuapp.com'

export const fetchSpotifyData = async (refreshToken, playlist_id) => {
  // set body and headers
  let data = qs.stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  })
  let hdrs = {
    Authorization: `Basic ${btoa(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET)}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  // make request
  let res = await axios.post(`https://accounts.spotify.com/api/token`, data, {headers: hdrs})
  if (res.status === 200) {
    let data = await res.data
    let sp = new SpotifyWebApi({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      accessToken: data.access_token
    })
    let playlist_data = await sp.getPlaylist(playlist_id)
    let analysis = await axios.get(`${SPOTTY_BASE}/${playlist_id}/analysis`, {headers: {access_token: data.access_token}})
    let return_data = {
      playlist_data: playlist_data, 
      analysis: analysis
    }
    return return_data
  }
}
