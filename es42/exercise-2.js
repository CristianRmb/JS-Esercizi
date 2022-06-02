// # Error handling - Exercise 2
// L'esercizio precedente lanciava un errore durante la fase di prelevamento.
//  In questo esercizio occorre gestire l'errore per evitare il crash dell'applicazione.

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }
      this.#amount += amount;
    } catch (error) {
      console.log(error);
    }
  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }
      if (this.#amount < amount) {
        throw new Error('You cannot withdraw more than account balance');
      }
      this.#amount -= amount;
    } catch (error) {
      console.log(error);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.view();
bankAccount.deposit(500);
bankAccount.view();
bankAccount.deposit(200);
bankAccount.view();
bankAccount.withdraw(10000);
bankAccount.view();

// ho fatto delle prove e funzionano tutti gli errori 
console.log("l'applicazione non si ferma");
