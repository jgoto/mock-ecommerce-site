import Banner from '../components/layout/Banner'
import FeaturedProducts from '../components/home/FeaturedProducts'
import styles from './Home.module.css';

export default function Home(){
    return (
        <div className={styles.homeContent}>
            <Banner />
            <FeaturedProducts />
        </div>
    )
}