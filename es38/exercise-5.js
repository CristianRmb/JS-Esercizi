// # Classes - Exercise 5
// Definire la classe BankAccountVip che estendendo dalla classe BankAccount, oltre a
// consentire tutte le operazioni di quest'ultima, permette all'utente di ottenere un interesse
// del 3% sull'importo depositato, ma solo se nel bilancio del conto è presente una cifra
// maggiore o uguale a 1000€

class BankAccount {
  bilancio = 0;

  constructor(initialAmount) {
    this.bilancio = initialAmount;
  }

  deposit(amount) {
    this.bilancio += amount;
  }

  withdraw(amount) {
    this.bilancio -= amount;
  }

  view() {
    console.log(this.bilancio);
  }
}

// il risultato non è 5541, è cosi solo se non si applicano interessi sul primo deposito da 500
// ma dice di applicare l'iteresse se il bilancio è >= non solo >

class BankAccountVip extends BankAccount {
  deposit(amount) {
    if (this.bilancio >= 1000) {
      this.bilancio = this.bilancio + amount * 1.03;
    } else {
      this.bilancio += amount;
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.view();
bankAccountVip.deposit(500);
bankAccountVip.view();
bankAccountVip.deposit(1200);
bankAccountVip.view();
bankAccountVip.withdraw(800);
bankAccountVip.view();
bankAccountVip.deposit(3500);
bankAccountVip.view();
