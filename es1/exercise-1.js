function canPlay() {
  if (true) {  /* funziona anche togliendo l'if */
    let personName = 'Paul ';
    personName += 'plays football'; // Argh! personName is not defined
    console.log(personName);
  }
}

canPlay(); 