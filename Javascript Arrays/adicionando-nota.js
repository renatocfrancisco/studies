function media(notas){
    let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
    console.log(media)
    return media;
}

const notas = [10, 6, 8];
notas.push(7);

media(notas)