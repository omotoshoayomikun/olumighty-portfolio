import React from 'react'
import styles from "./Portfolio.module.css"
function Logos() {

const FlyerImages3 = [
        'ANNI.JPG','DUBAI.jpg', 'PERKS.JPG', 'FARM.JPG', 'GMR.jpeg', 'LIZ.jpg', 'Obez.jpg', 'TAO.png'
]
return (
<>
<div className={`side-padding ${styles.logo_container}`}>
    <hr className={styles.hr_line} />
  <div className={styles.port_head_text}>Logos</div>
  <div className={styles.grid_container_logo}>
    {
        FlyerImages3.map((image, index) => (
        <div key={index} className={styles.grid_children}>
            <img src={`/images/Logos/${image}`} alt={image} className={styles.grid_image} />
        </div>
        ))
    }
  </div>
</div>
</>
);
}

export default Logos