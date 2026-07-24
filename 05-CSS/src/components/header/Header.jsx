import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h2 className={styles.logo}>Hello <br /></h2>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Reiciendis laudantium iste at non. Iste, quisquam est? Iste 
          nostrum deserunt cumque iure officiis 
          libero, neque exercitationem impedit necessitatibus
          quibusdam eligendi placeat?lorem
          </p>
          <button className={styles.btn}>Login</button>
        
    </div>
  )
}

export default Header