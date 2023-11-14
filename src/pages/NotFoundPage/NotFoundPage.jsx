import Layout from '../../layout/Layout'
import styles from './NotFoundPage.module.css'
import NotFound from '../../assets/notFound.png'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import { useNavigate } from 'react-router-dom'


const NotFoundPage = () => {

    let navigate = useNavigate()

    const clickRedirect = () => {
        return(navigate('/'))
    }

  return (
    <Layout>
        <div className={styles.container}>
            <div>
             <img src={NotFound} alt="not found" />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title} >Something went wrong.</h1>
                <p className={styles.subtitle}>Sorry, We can’t find the page you’re looking for.</p>
                <CustomBtn fn={clickRedirect} name={'Go Back'} />
            </div>
        </div>
    </Layout>
  )
}

export default NotFoundPage