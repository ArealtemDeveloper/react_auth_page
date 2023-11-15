import styles from './LoginPage.module.css'
import Layout from '../../layout/Layout'
import Banner from '../../assets/picture.png'
import Input from '../../components/Input/Input'
import UserIcon from '../../assets/user.svg'
import PasswordIcon from '../../assets/password.svg'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import Error from '../../assets/error.svg'

import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useEffect, useState } from 'react'
import axios from 'axios'

const LoginPage = () => {
    
    const [user, setUser] = useState('')
    const [error, setError] = useState(false)
    let navigate = useNavigate()

    const fetchUsers = async() => {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            const auth = data.find( item => item.email === user.email)
            if(auth) {
                return(navigate('/home'))
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    },[user])

    const SignInSchema = Yup.object().shape({
        password: Yup.string()
          .min(6, 'Too Short!')
          .required('Required'),
        email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      });

  return (
        <Layout>
            <div className={styles.content}>
                <div className={styles.content_text}>
                    <h1 className={styles.content_title}>Welcome</h1>
                    <h4 className={styles.content_subtitle}>We are glad to see you back with us</h4>
                </div>
                <Formik 
                initialValues={{
                    email: '',
                    password: ''
                  }}
                  validationSchema={SignInSchema}
                  onSubmit={values => {
                    setUser(values)
                  }}
                >
                    {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <Input name={'email'} type={'email'} placeholder={'E-mail'} icon={UserIcon} className={styles.input}/>
                        {errors.email && touched.email ? <div className={styles.error} >{errors.email}</div> : null}
                        <Input name={'password'} type={'password'} placeholder={'Password'} icon={PasswordIcon}/>
                        {errors.password && touched.password ? <div className={styles.error} >{errors.password}</div> : null}
                        <CustomBtn name={'Next'} type={'submit'}/>
                    </Form>
                    
                    )}
                </Formik>
                <div className={styles.redirect}>
                        <p>Don't have an account? <Link to={'/error'}>Sign Up</Link></p>
                </div>

            </div>
            <div className={styles.imgContainer}>
                <img className={styles.picture} src={Banner} alt="banner" />
            </div>
        </Layout>
  )
}

export default LoginPage