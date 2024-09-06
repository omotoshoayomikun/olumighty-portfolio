import React from "react";
import styles from "./Portfolio.module.css";
function Flyers() {

    const FlyerImages = [
            '7.jpg', '8.jpg', '11.jpeg', '14.jpg', '12.jpeg', '13.jpeg',
    ]
    const FlyerImages2 = [
             '10.jpg', '15.JPG', '16.jpeg', '17.jpeg'
    ]
    const FlyerImages3 = [
            'let.jpg','MOTIVATION.jpg', 'bags.JPG', 'STUDIO.jpg', 'UPGRADE.jpg', 'REALESTATE.jpg'
    ]
  return (
    <>
    <div className="side-padding">
    <div className={styles.port_head_text}>Posters/Eflyers</div>
      <div className={styles.grid_container}>
        {
            FlyerImages.map((image, index) => (
            <div key={index} className={styles.grid_children}>
                <img src={`/images/flyers/${image}`} alt={image} className={styles.grid_image} />
            </div>
            ))
        }
      </div>
      <div className={styles.grid_container2}>
        {
            FlyerImages2.map((image, index) => (
            <div key={index} className={styles.grid_children}>
                <img src={`/images/flyers/${image}`} alt={image} className={styles.grid_image} />
            </div>
            ))
        }
      </div>
      <div className={styles.grid_container3}>
        {
            FlyerImages3.map((image, index) => (
            <div key={index} className={styles.grid_children}>
                <img src={`/images/flyers/${image}`} alt={image} className={styles.grid_image} />
            </div>
            ))
        }
      </div>
    </div>
      
    </>
  );
}

export default Flyers;
