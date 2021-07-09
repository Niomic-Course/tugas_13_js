function buah() {
    let dataBuah = ['pisang', 'jeruk'];
    console.log(dataBuah);

    dataBuah.unshift('apel', 'mangga');
    return dataBuah;
}

console.log(buah());