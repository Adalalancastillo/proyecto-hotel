import React from "react";
import styles from "./home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <>
          <div className={styles.containerMayor}>
            <div className={styles.container}> 
                <div className={styles.content}>
                    <div className={styles.welcome}>WELCOME TO</div>
                    <div className={styles.titleHotel}>LUXURY HOTELS</div>
                    <div className={styles.description}>Book your stay and enjoy Luxury redefined at the most affordable rates.</div>
                </div>
            </div>
            <div className={styles.containerBtn}>
                <a href="/rooms">
                    <button type="button" class="btn btn-lg" style={{ background: 'rgba(224, 185, 115, 1)', color:'white', margin: '30px', fontSize: '1.9rem' }}>Book Now</button>
                </a>
            </div>
        </div>
    </>
  );
};
