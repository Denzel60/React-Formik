import './form.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Form() {
    const validatonSchema = Yup.object({
        firstName: Yup.string()
            .min(4, "First name must be at least 4 character")
            .max(15, "First name can not exceed 15 characters")
            .required("First name is required"),

        lastName: Yup.string()
            .min(4, "Last name must be at least 4 character")
            .max(15, "Last name can not exceed 15 characters")
            .required("Last name is required"),

        email: Yup.string()
            .email("Invalid email")
            .required("Email is required")
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: (formState) => {
            console.log(formState)
        },

        validationSchema: validatonSchema,

        // validate: (formValues) => {
        //     let errors = {};

        //     if (formValues.firstName === "") {
        //         errors.firstName = "First name is required"
        //     } else if (formValues.firstName.length < 4) {
        //         errors.firstName = "First name must be at least 8 characters"
        //     }

        //     if (formValues.lastNamestName === "") {
        //         errors.lastName = "Last name is required"
        //     } else if (formValues.lastName.length < 4) {
        //         errors.lastName = "Last name must be at least 8 characters"
        //     }

        //     if (formValues.email === "") {
        //         errors.email = "email is required"
        //     }

        //     return errors
        // },
    })
    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <div className='form-cont'>
                <label htmlFor="firstName">Enter first name</label>
                <input type="text" placeholder="Enter first name" id="firstName" name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.firstName && formik.errors.firstName && <div style={{ color: "red" }}>{formik.errors.firstName}</div>}
            </div>
            <div className='form-cont'>
                <label htmlFor="lastName">Enter last name</label>
                <input type="text" placeholder="Enter last name" id="lastName" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.lastName && formik.errors.lastName && <div style={{ color: "red" }}>{formik.errors.lastName}</div>}
            </div>
            <div className='form-cont'>
                <label htmlFor="email">Enter email</label>
                <input type="email" placeholder="Enter email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form