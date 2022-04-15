import axios from 'axios'
const baseUrl = 'https://srsoja-server-db.herokuapp.com'
const source = axios.CancelToken.source()

export default class Database {
    
    async getProdutor(prd_id){
        const url = `${baseUrl}/produtor/get?prd_id=${prd_id}`
        await axios.get(url, { cancelToken: source.token }).then((response) => {
            if(response.status === 200) {
                console.log(JSON.stringify(response.data))
                return JSON.stringify(response.data)
            }
            else {
                console.log(response.error)
            }
        })
    }
}