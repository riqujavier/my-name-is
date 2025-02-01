import React from "react";
import styles from "../css/Hero.module.css";

const Hero: React.FC = () => {
    return (
        <div className="container-hero text-white py-20">
            <div className= {styles.app}>
                <div className={styles.wrapper}>
                
                    <h1 data-text="I'm Javier Riquelme" className={styles.glitch}> I'm Javier Riquelme
                    </h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;
