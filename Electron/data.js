const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
    criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
        return jsonfile.writeFile(nomeArquivo,conteudoArquivo)
                .then(() => {
                    console.log('Arquivo Criado')
                }).catch((err) => {
                    console.log(err);
                });
    },
    salvaDados(curso, tempoEstudado){
        let arquivoCurso = __dirname + '/data/' + curso + '.json';
        if (fs.existsSync(arquivoCurso)) {
            this.adicionaTempoAoCurso(arquivoCurso, tempoEstudado);
        } else {
            this.criaArquivoDeCurso(arquivoCurso, {}).then(()=>{
                this.adicionaTempoAoCurso(arquivoCurso, tempoEstudado);
            })
        }
    },
    adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado){
        let dados = {
            ultimoEstudo: new Date().toString(),
            tempo: tempoEstudado
        }
        jsonfile.writeFile(arquivoDoCurso, dados).then(() => {
            console.log('Salvo com sucesso.');
        }).catch((err) =>  {
            console.log(err);
        })
    },
    pegaDados(curso){
        let arquivoCurso = __dirname + '/data/' + curso + '.json';
        return jsonfile.readFile(arquivoCurso);
    },
    pegaNomeDosCursos(){
        let arquivos = fs.readdirSync(__dirname + '/data/');
        let cursos = arquivos.map((arquivo) => {
            return arquivo.substring(0,arquivo.lastIndexOf('.'));
        });
        return cursos;
    }
}