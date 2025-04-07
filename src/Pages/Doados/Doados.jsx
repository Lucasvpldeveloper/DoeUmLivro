import S from "./doados.module.scss"
import protagonista from "../../assets/protagonista.png"
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Doados() {

    const [livros, setLivros] = useState([])

    // Função assíncrona para buscar os livros na API
    const getLivros = async () => {
        try {
        const urlApi = "https://projetoapi-ix8o.onrender.com" 
            const response = await axios.get("")
            setLivros(response.data)
        } catch (error) {
            console.error("Erro ao buscar livros:", error)
        }
    }

    useEffect(() => {
        getLivros()
    }, [])

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

