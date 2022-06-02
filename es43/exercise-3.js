// # Error handling - Exercise 3
// Sostituire il lancio delle eccezioni con due classi custom che estendono
// dalla classe `Error`:

// * `NegativeAmountError`: classe custom qualora viene fornito un importo negativo
// * `WithdrawNotPermittedError`: classe custom qualora si cerca di ritirare dal
// proprio conto corrente un importo maggiore rispetto al totale consentito

class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NegativeAmountError';
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'WithdrawNotPermittedError';
  }
}

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative');
    }
    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.view();
  bankAccount.deposit(500);
  bankAccount.view();
  bankAccount.deposit(200);
  bankAccount.view();
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (error) {
  console.log(error);
}
// ho fatto un c.log per vedere se funziona dopo che mi da l'errore
console.log("Continua a Funzionare dopo l'errore");
