import { useFormik } from 'formik'

function Form() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: (formState) => {
            console.log(formState)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="firstName">Enter first name</label>
                <input type="text" id="firstName" name='firstName' value={formik.values.firstName} onChange={formik.handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Enter last name</label>
                <input type="text" id="lastName" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} />
            </div>
            <div>
                <label htmlFor="email">Enter email</label>
                <input type="text" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form