"use strict"

const { getRandomInt, deadBodies, newArrayOfDead } = require('../javascript/operativa');

describe('getRandomInt', () => {
  test('should return an integer between 0 and max -an integer > 0 passed as a parameter-', () => {
    
    const max = 10;
    const result = getRandomInt(max);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(max);

  });
});

describe('deadBodies', () => {
  test('should return the removed element from the array', () => {
    // Arrange
    const array = ['genesis', 'rafa', 'sylvia', 'neema', 'gigi'];
    const num = 2;
    const expected = ['sylvia'];

    const result = deadBodies(array, num);

    expect(result).toEqual(expected);
    expect(array).not.toContain('sylvia'); 
  });
});

describe('newArrayOfDead', () => {
  test('should add an element to the deadList array', () => {

    const removed = 'genesis';
    const deadList = [];
 
    newArrayOfDead(deadList,removed);
 
    expect(deadList).toContain(removed);
    expect(deadList.length).toBe(1);
  });

  test('should return the new length of the deadList array', () => {
    const removed = 'sylvia';
    const deadList = [];

    const newLength = newArrayOfDead(deadList,removed);

    expect(newLength).toBe(deadList.length);
    expect(newLength).toBe(1);
  });
});




