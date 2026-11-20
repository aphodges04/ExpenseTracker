import { describe, it, expect, beforeEach} from 'vitest';

// TODO: Import expect and beforeEach from 'vitest'.
// TODO: Import Salary.
import { Salary } from '../../src/models/Salary.js';

describe('Salary', () => {
  // TODO: Create a valid salary in beforeEach, as in Expense.test.js.
let salary;
beforeEach(() => {
  salary = new Salary({date: '2026-11-10', amount: 30000.75 });
});
  // TODO: Replace each it.todo with an it test. Add any other cases you think of.
  it('stores the amount and pay date', () => {
    expect(salary.amount).toBe(30000.75);
    expect(salary.date).toBe('2026-11-10');
  }); 
  
  it('rounds the amount to 2 decimal places', () => {
    salary = new Salary({date: '2026-11-10', amount: 30000.756 });
    expect(salary.amount).toBe(30000.76);
  });

  describe('validate()', () => {
    it('returns no errors for a valid salary', () => {
      expect(salary.validate()).toEqual([]);
    });
    
    it('rejects an amount of zero', () => {
      salary.amount = 0;

      expect(salary.validate()).toEqual(['amount must be a number greater than 0']);
    });
    
    it('rejects a negative amount', () => {
      salary.amount = -50;

      expect(salary.validate()).toEqual(['amount must be a number greater than 0']);
    });
    
    it('rejects a pay date in the wrong format', () => {
      salary.date = '10-11-2026';

      expect(salary.validate()).toEqual(['date must be a valid date in the format YYYY-MM-DD']);
    });
    
    it('rejects a pay date that does not exist', () => {
      salary.date = '2026-02-30';

      expect(salary.validate()).toEqual(['date must be a valid date in the format YYYY-MM-DD']);
    });
    
    it('reports every invalid field', () => {
      salary.amount = -1;
      salary.date = 'tomorrow';

      expect(salary.validate()).toHaveLength(2);
    });
  });
});
