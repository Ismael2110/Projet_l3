import axios from 'axios'
import queryString from 'query-string'

const apiUrl = 'http://192.168.43.61:8000'

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