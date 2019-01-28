import settings from './settings'
import path from 'path'

export const fetchResource = async (type, name) => {
  try {
    const { API_BASE_URL, API_QUERY_PARAMS } = settings;
    const url = API_BASE_URL + type + '/' + name + API_QUERY_PARAMS
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

const sampleTrailer = {
  "data": {
    "type": "streamings",
    "id": "37e7fd72-22f0-40e6-8b4e-f4d3c7e224a0",
    "heartbeat": {},
    "stream_infos": [
      {
        "player": "web:DASH-NONE",
        "display_aspect_ratio": "1.777777777777778",
        "cdn": "VERIZOBS",
        "url": "https://prod-kami.wuaki.tv/v1/delivery/dash/315a8b17-03e9-4603-97ff-9f6d8c7e1aca.mpd",
        "wrid": "315a8b17-03e9-4603-97ff-9f6d8c7e1aca",
        "video_quality": "FHD"
      }
    ]
  }
}

const trailerPayload = {
  audio_language: "SPA",
  audio_quality: "2.0",
  content_type: "movies",
  device_serial: "device_serial_1",
  device_stream_video_quality: "FHD",
  player: "web:PD-NONE",
  subtitle_language: "MIS",
  video_type: "trailer"
}

export const fetchTrailer = async (id) => {
  return sampleTrailer
  try {
    const { API_BASE_URL, API_QUERY_PARAMS } = settings;
    const url = API_BASE_URL + 'me/streamings' + API_QUERY_PARAMS
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({...trailerPayload, content_id: id})
    })
    const data = await response.json()
    if(data.errors) return sampleTrailer
    return data
  } catch (e) {
    console.log(e)
  }
}

export const fetchLists = (lists) => {
  return Promise.all(lists.map(list => fetchResource('lists', list)))
}

