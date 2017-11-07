import axios from 'axios';

export const FILTER_SELECTED = 'filter_selected';
export const FETCH_ICOS = 'fetch_icos';

const ROOT_URL = 'http://localhost:8888/api/icos';

export function selectFilter(filter = 'live') {

  return {
    type: FILTER_SELECTED,
    payload: filter
  }
}

export function fetchIcos(filter = 'live') {
  
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/${filter}`
  });

  return {
    type: FETCH_ICOS,
    payload: request
  }
}