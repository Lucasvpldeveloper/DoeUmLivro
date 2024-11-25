import S from "./inicio.module.scss"
import foto1 from "../../assets/fotocaixa1.png"
import foto2 from "../../assets/fotocaixa2.png"
import foto3 from "../../assets/fotocaixa3.png"
import foto4 from "../../assets/fotocaixa4.png"

export default function Inicio() {
    return(
        <main>
                <section className={S.post}>
                    <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                </section>
                <section className={S.devoDoar}>
                    <div>
                        <h2>Por que devo doar?</h2>
                    </div>
                    <section className={S.boxCard}>
                        <article>
                            <img src={foto1} alt="" />
                            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </article>
                        <article>
                            <img src={foto2} alt="" />
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </article>
                        <article>
                            <img src={foto3} alt="" />
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                        </article>
                        <article>
                            <img src={foto4} alt="" />
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                        </article>
                    </section>
                </section>
        </main>
    )
}