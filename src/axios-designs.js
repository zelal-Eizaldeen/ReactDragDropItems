import axios from 'axios';
const instance = axios.create({
     baseURL: 'https://metra-2112d.firebaseio.com',
    //  headers: { 
    //     // "content-type": "application/json",
    //     // 'Content-Type': 'multipart/form-data'

       
    // },
     
   

})

export default instance;