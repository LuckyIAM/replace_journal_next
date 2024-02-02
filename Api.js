
class Api{
    constructor(tkn){
        // this.path = 'http://localhost:5000';
        this.path = 'http://192.168.1.238:5000';
        this.token = tkn;
    }

    logIn(body){ 
        return fetch(`${this.path}/api/v1/user/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        
    }
    registration(body){
        return fetch(`${this.path}/api/v1/user/registration`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
    uploadFile(body){
        return fetch(`${this.path}/api/v1/importfile`, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                // 'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${this.token}`
            },
            body: body,
            // redirect: 'follow'
        })
    }
    parsing(body){
        return fetch(`${this.path}/api/v1/contentdata/parse`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(body),
        })
    }
    find(body){
        return fetch(`${this.path}/api/v1/contentdata/search`, {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(body),
        })
    }
    findOne(boxId){
        return fetch(`${this.path}/api/v1/contentdata/${boxId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            }
        })
    }
    getDataFromNumberBox(body){
        return fetch(`${this.path}/api/v1/idbox`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }
}

export default Api;