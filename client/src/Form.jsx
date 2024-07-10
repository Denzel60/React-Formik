import './form.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import useUsernameStore from './useStore'


function Form() {
    const [disabled, setDisabled] = useState(true)
    const captureUser = useUsernameStore((state) => state.captureUser)
    const user = useUsernameStore(state => state.user)


    const validatonSchema = Yup.object({

        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),

        password: Yup.string().required('Password is required')
    })

    const handleSubmit = async (values) => {
        try {
            // setLoading(true)
            const response = await fetch(`http://localhost:3011/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
                credentials: "include"
            })
            const data = await response.json()

            // setLoading(false)
            if (data.success === true) {
                // navigate("/Dashboard")
                captureUser(data.data)
                console.log(user)
            } else {
                // setError(data.message)
            }
        } catch (error) {
            console.log(error.message)
            // setError(true)
            // setLoading(false)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: handleSubmit,

        validationSchema: validatonSchema,

        validate: (formValues) => {

            if (!formValues.firstName && !formValues.name && !formValues.email) {
                setDisabled(true)
            } else {
                setDisabled(false)
            }


            // let errors = {};

            // if (formValues.firstName === "") {
            //     errors.name = "First name is required" 
            // } else if (formValues.name.length < 4){
            //     errors.name = "Last name must be at least 8 characters"
            // }

            // if (formValues.namestName === "") {
            // errors.name = "Last name is required"
            // } else if (formValues.name.length < 4) {
            // errors.name = "Last name must be at least 8 characters"
            // }

            // if (formValues.email === "") {
            // errors.email = "email is required"
            // }

            // return errors
        },
    })
    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <form className='form' onSubmit={formik.handleSubmit}>

            <div className='form-cont'>
                <label htmlFor="email">Enter email</label>
                <input type="email" placeholder="Enter email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div className='form-cont'>
                <label htmlFor="password">Enter password</label>
                <input type="password" placeholder="Enter password" id="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
            {formik.touched.password && formik.errors.password && <div style={{ color: "red" }}>{formik.errors.password}</div>}

            <button type='submit' disabled={disabled}>Submit</button>
        </form>
    )
}

export default Form