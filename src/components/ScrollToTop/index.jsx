import { useEffect, useRef } from 'react';
import styles from './style.module.css';

function ScrollToTop() {
    const scrollCountRef = useRef(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        scrollCountRef.current = 0;
    };

    useEffect(() => {
        const handleWheel = (e) => {
            const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 10;
            
            if (isAtBottom && e.deltaY > 0) {
                scrollCountRef.current += 1;
                
                if (scrollCountRef.current >= 2) {
                    scrollToTop();
                }
            } else if (e.deltaY < 0 || !isAtBottom) {
                scrollCountRef.current = 0;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className={styles.container}>
            <button 
                onClick={scrollToTop} 
                className={styles.button} 
                aria-label="Voltar ao topo"
            >
                &#8645;
            </button>
        </div>
    );
}

export default ScrollToTop;
