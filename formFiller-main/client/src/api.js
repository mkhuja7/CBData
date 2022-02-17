import axios from 'axios'
const url = 'http://localhost:8000/api/v1/datastaff'

class API {
    async getAllPost() {
        console.log("data is here ");
        const res = await axios.get(url)
        console.log(res);
        return res.data
    }

    async getPost(id) {
        const res = await axios.get(`${url}/${id}`)
        console.log('AXIOS data' + res);
        return res.data
    }

    async createPost(post) {
        const res = await axios({
            method: "post",
            url,
            data: post,
            headers: { 'Content-Type': 'multipart/form-data' }
        })



        // .post(url, post, { headers: { 'Content-Type': 'multipart/form-data' } })
        console.log("From Crfeat++++++" + res);
        return res.data
    }

    async patchPost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post)
        return res.data
    }

    async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`)
        return res.data
    }
}

const api = new API()
export default api
