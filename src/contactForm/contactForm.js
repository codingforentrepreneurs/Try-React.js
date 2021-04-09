import React, {useState, useRef} from 'react'

export const ContactForm = () => {
    const myFormRef = useRef(null)
    const myFirstNameInputRef = useRef(null)
    const [errors, setErrors] = useState({})
    const [isPasswordReady, setPasswordReady] = useState(false)
    const [passwordData, setPasswordData] = useState({
        password: '',
        passwordConfirm: ''
    }) 

    const handleInputChange = (event) => {
        const name = event.target.name
        const val = event.target.value ? event.target.value : ''
        
        if (name === 'passwordConfirm') {
            const currentPw = passwordData.password
            if (currentPw !== val) {
                setPasswordReady(false)
                setErrors({passwordConfirm: "Passwords must match"})
            } else {
                if (currentPw.length > 1) {
                    setPasswordReady(true)
                    setErrors({passwordConfirm: ""})
                }
                
            }
        }
        
        setPasswordData(prevState => {
            let newData = {...prevState}
            newData[name] = val
            return newData
        })
        // setData()
        // if (name === 'firstName') {
        //     setFirstName(val)
        // } else if (name=== 'lastName') {
        //     setLastName(val)
        // }
    }
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (myFormRef && isPasswordReady) {
            const fd = new FormData(myFormRef.current)
            const fdObject = Object.fromEntries(fd)
            const jsonData = JSON.stringify(fdObject)
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            const options = {
                method: "POST", 
                headers: headers,
                body: jsonData,
            }
            const url = "https://httpbin.org/anything"

            fetch(url, options).then(
                response=>response.json()).then(x=>{
                    console.log(x)}).catch(err=>console.log(err))

            // console.log(myFormRef.current, fdObject)
        }
    }

    return <form ref={myFormRef} onSubmit={handleSubmit}>
        <p>Hello</p>
        <p>{errors.passwordConfirm}</p>
        <input ref={myFirstNameInputRef} type='text' name='firstName' required placeholder='First name' />

        <input type='text' name='lastName'  placeholder='Last name'/>


        <input type='password' required name='password' onChange={handleInputChange} value={passwordData.password} placeholder='password'/>

<input type='password' required name='passwordConfirm' onChange={handleInputChange} value={passwordData.passwordConfirm} placeholder='password'/>


        <button type='submit' >Send</button>
    </form>
}