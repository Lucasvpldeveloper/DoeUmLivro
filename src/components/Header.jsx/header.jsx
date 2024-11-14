import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

export default function header() {
    return(
        <header>
            <section>
                <img src={logo} alt="imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Livros doados</li>
                    <li>Quero doar</li>
                </ul>
            </nav>
            <div>
                <input type="text" />
                <img src={search} alt="" />
            </div>
        </header>
    )
}