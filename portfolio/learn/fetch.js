const requestURL = "https://jsonplaceholder.typicode.com/posts"

// для get
//function sendRequest(method, url, body = null) {
//    return fetch(url).then(response => {
//        return response.json()
//    })
//}
//
//sendRequest('GET', requestURL)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

// for post

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()}
        return response.json().then(error => {
            const e = new Error('oops..')
            e.data = error
            throw e
        })    
    })

}
const body = {
    name: 'dasha',
    age: 21
}
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
