import './CartaoAluno.css';

function CartaoAluno({ nome, turma, matricula, mediaNotas }) {
    let corMedia;

    if (mediaNotas >= 7) {
        corMedia = "verde"
    }
    else if (mediaNotas >= 5) {
        corMedia = "amarelo"
    }
    else {
        corMedia = "vermelho"
    }

    return (
        <div className={`cartao-aluno ${corMedia}`}>
            <h1>{nome}</h1>
            <p>{turma}</p>
            <p>{matricula}</p>
            <p>{mediaNotas}</p>
        </div>
    )
};

export default CartaoAluno