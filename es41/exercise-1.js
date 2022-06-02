// # Error handling - Exercise 1
// Implementare all'interno della classe `BankAccount` un controllo sui metodi `deposit` e `withdraw`.
// Entrambi i metodi devono poter lanciare un errore qualora venisse passato un `amount` negativo.
// Il metodo `withdraw` deve poter lanciare un errore anche qualora venisse passato un
// `amount` superiore rispetto al totale presente sul conto corrente.

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Amount negative');
    } else {
      this.#amount += amount;
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if (amount > this.#amount) {
      throw new Error('WithDraw > Amount');
    } else if (amount < 0) {
      throw new Error('Withdraw is negative');
    } else {
      this.#amount -= amount;
    }
  }

  view() {
    console.log(this.#amount);
  }
}
// non avendo usato cash l'applicazione si ferma quando trova l'errore 
const bankAccount = new BankAccount(1000);
bankAccount.view();
bankAccount.deposit(500);
bankAccount.view();
bankAccount.deposit(200);
bankAccount.view();
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();


