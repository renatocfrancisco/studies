import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Galeria from "../../components/galeria";
import Header from "../../components/header";
import Menu from "../menu";
import styles from './PaginaInicial.module.scss';

export default function PaginaInicial(){
    return (
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <Banner/>
                </section>
            </main>
            <div className={styles.galeria}>
                <Galeria/>
            </div>
            <Footer/>
        </>
    )
}