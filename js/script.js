function inicializa() {
    document.addEventListener("keydown", () => {
        const key = event.key
        const urlAtual = window.location.href;
        console.log(urlAtual)

        if (key == "ArrowRight") {
            if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/pages/graduacao.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/pages/graduacao.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/pages/valorCurso.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/pages/valorCurso.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/pages/areasAtuacao.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/pages/areasAtuacao.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/pages/salario.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/pages/salario.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/")}
        }
        if (key == "ArrowLeft") {
            if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/pages/salario.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/pages/salario.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/pages/areasAtuacao.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/pages/areasAtuacao.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/valorCurso.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/valorCurso.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/pages/graduacao.html")
            } else if (urlAtual == "https://gustavogogola91.github.io/trabalhoedfinanceira/pages/graduacao.html") {
                window.location.replace("https://gustavogogola91.github.io/trabalhoedfinanceira/")}
        }
    })
}