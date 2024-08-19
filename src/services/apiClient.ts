import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5b455a535fcc4f469a7599086453359e'
    }
})