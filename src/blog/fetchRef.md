
```
const options = {}
fetch(url, options).then(response=>{
    if (response.status === 404) {
        return {}
    }
    return response.json()
}).then(data=>{
    console.log(data)
})
```


Headers
```
const url = https://httpbin.org/anything
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.strigify({})
}
fetch(url, options).then(response=>{
    if (response.status === 404) {
        return {}
    }
    return response.json()
}).then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})
```