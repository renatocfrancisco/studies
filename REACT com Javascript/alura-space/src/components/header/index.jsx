import logo from '../../assets/logo.png';
import lupa from '../../assets/search.png';
import styles from './Header.module.scss';

export default function Header(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="" />
                <img src={lupa} alt="" />
            </div>
        </header>
    )
}