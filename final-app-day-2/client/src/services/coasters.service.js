import axios from 'axios'

const coastersService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/coasters`
})

export function getAllCoasters() {
    return coastersService.get('/getAllCoasters')
}

export function getOneCoaster(coasterId) {
    return coastersService.get(`/getOneCoaster/${coasterId}`)
}

export function saveCoaster(coaster) {
    return coastersService.post(`/saveCoaster`, coaster)
}