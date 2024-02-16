class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true

    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }
}

let livros = []

livros.push(new Livro('bitcoin redpill', 'renato treizoitao', 'sem editora', 2021))
livros.push(new Livro('12 regras para a vida', 'jordan peterson', 'alta books', 2017))
livros.push(new Livro('sacadas de empreendedor', 'erico rocha', 'buzz', 2016))

class Biblioteca {
    Nome  //nome da biblioteca
    Endereco //enndereco da biblioteca
    Telefone  //tel de contato da biblioteca
    AcervoLivros = [] //todos os livros da biblioteca

    constructor(nome, endereco, telefone, acervo) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    procurarNome(nome) {
        this.AcervoLivros.forEach(livro => {
            if (nome == livro.Titulo) {
                console.log(livro);
            }
        })
    }

    emprestarLivro(nome) {
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (nome == livro.Titulo) {
                if (livro.Disponibilidade == true){
                    livro.Disponibilidade = false
                    emprestado = true
                }     
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    devolucaoLivro(nome) {
        livros.forEach(livro => {
            if (nome == livro.Titulo) {
                livro.Disponibilidade = true
                console.log('livro ' + livro.Titulo + ' devolvido');
            }
        })
    }
}

let biblioteca = new Biblioteca('Biblioteca DoDev', '123456', 'Rua 69', livros)

biblioteca.procurarNome('bitcoin redpill')
biblioteca.emprestarLivro('12 regras para a vida')
biblioteca.emprestarLivro('bitcoin redpill')
biblioteca.devolucaoLivro('12 regras para a vida')
console.log(livros);
