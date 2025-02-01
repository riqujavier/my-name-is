import React from 'react';
import styles from '../css/Hero.module.css';

const Hero: React.FC = () => {
    return (
        <div className="text-white py-20">
            <div className="container mx-auto px-6">
                <div className={styles.container}>
                    I'm
                    <div className={styles.stack} style={{ '--stacks': 3 } as React.CSSProperties}>
                        <span style={{ '--index': 0 } as React.CSSProperties}>Javier Riquelme</span>
                        <span style={{ '--index': 1 } as React.CSSProperties}>Javier Riquelme</span>
                        <span style={{ '--index': 2 } as React.CSSProperties}>Javier Riquelme</span>
                    </div>
                    <span className={styles.right}>Frontend Developer</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
