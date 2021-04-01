import React, {useState} from 'react'

export const ContactForm = () => {
    const [firstName, setFirstName] = useState("Justin")
    const [lastName, setLastName] = useState("")
    const [errors, setErrors] = useState({})
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: ''
    }) 

    const handleInputChange = (event) => {
        const name = event.target.name
        const val = event.target.value ? event.target.value : ''
        
        if (name === 'passwordConfirm') {
            const currentPw = data.password
            if (currentPw !== val) {
                setErrors({passwordConfirm: "Passwords must match"})
            } else {
                setErrors({passwordConfirm: ""})
            }
        }
        
        setData(prevState => {
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

    const handleSendBtn = (event) => {
        if (event) {event.preventDefault()}
    }
    return <form>
        <p>Hello {data.firstName} {data.lastName}</p>
        <p>{errors.passwordConfirm}</p>
        <input type='text' name='firstName' onChange={handleInputChange} value={data.firstName} required placeholder='First name' />

        <input type='text' name='lastName' onChange={handleInputChange} value={data.lastName} placeholder='Last name'/>

        <input type='password' name='password' onChange={handleInputChange} value={data.password} placeholder='password'/>

        <input type='password' name='passwordConfirm' onChange={handleInputChange} value={data.passwordConfirm} placeholder='password'/>

        <button type='submit' onClick={handleSendBtn} >Send</button>
    </form>
}