function canPlay() {
  let personName = 'Paul';

  if (true) {
    const personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();