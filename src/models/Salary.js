// TODO: Import MoneyEntry from './MoneyEntry.js'.
import { MoneyEntry } from './MoneyEntry.js';
export const MIN_AMOUNT_LENGTH = 0;
/**
 * A salary payment: an amount received on a pay date.
 * Has no fields of its own beyond those inherited from MoneyEntry.
 */
export class Salary extends MoneyEntry{
  /**
   * @param {object} fields
   * @param {string} [fields.id]
   * @param {number} fields.amount
   * @param {string} fields.date - YYYY-MM-DD
   */
  // TODO: Accept { id, amount, date } and pass them to the MoneyEntry
  // constructor. See Expense.js for the pattern.
  constructor({ id, amount, date}) {
    super({ id, amount, date});
  }

  // TODO: Decide whether Salary needs its own validate() method,
  // or whether the one inherited from MoneyEntry is enough.
 validate() {
    const errors = super.validate();

    if (
      typeof this.amount !== 'integer' ||
      this.amount.trim().length === 0 ||
      this.amount.length > MIN_AMOUNT_LENGTH
    ) {
      errors.push(`amount is required and must be greater than ${MIN_AMOUNT_LENGTH} characters`);
    }

    return errors;
  } 
}
