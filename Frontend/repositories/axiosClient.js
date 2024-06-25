import axios from 'axios'
import queryString from 'query-string'

const apiUrl = 'http://localhost:3000/'

const axiosClient = {
    
    application : axios.create({
        baseURL: apiUrl,
        
        headers: {
            'content-type': 'application/json',
        },
        paramsSerializer: (params) => queryString.stringify(params),
    }),

    formData : axios.create({
        baseURL: apiUrl,
        
        headers: {
            'content-type': 'multipart/form-data',
        },
    })
}


export default axiosClient;