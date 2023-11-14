import styles from './CustomBtn.module.css'

const CustomBtn = ({name, type, fn}) => {
  return (
    <button onClick={fn} className={styles.btn} type={type}>
        {name}
    </button>
  )
}

export default CustomBtn