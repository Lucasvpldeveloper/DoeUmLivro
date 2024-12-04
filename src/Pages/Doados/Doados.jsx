import S from "./doados.module.scss"
import protagonista from "../../assets/protagonista.png"

export default function Doados() {
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
                <section className={S.boxBook}>
                    <article>
                        <img src={protagonista} alt="Imagens do livro o protagonista" />
                        <h3>O Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </article>
                    <article>
                        <img src={protagonista} alt="Imagens do livro o protagonista" />
                        <h3>O Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </article>
                    <article>
                        <img src={protagonista} alt="Imagens do livro o protagonista" />
                        <h3>O Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </article>
                    <article>
                        <img src={protagonista} alt="Imagens do livro o protagonista" />
                        <h3>O Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </article>
                </section>
        </section>
    )
}

