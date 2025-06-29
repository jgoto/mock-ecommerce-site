import Banner from '../components/Banner'
import FeaturedProducts from '../components/FeaturedProducts'
import styles from './Home.module.css';

export default function Home(){
    return (
        <div className={styles.homeContent}>
            <Banner />
            <FeaturedProducts />
        </div>
    )
}