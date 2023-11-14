import { Field } from 'formik'
import styles from './Input.module.css'

const Input = ({type, placeholder, icon, name}) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="icon" />
      <Field name={name} className={styles.input} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input