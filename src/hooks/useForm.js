import {useState} from 'react'

const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleReset = () => {
        setValues(initialState);
    }

    return [values, handleInputChange, handleReset]
}

export default useForm;