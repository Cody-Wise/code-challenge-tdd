// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('Add exclamation Points', (expect) => {
    const expected = '' + '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected);
});


test('Multiply Number By 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

test('Multiply by 12 then half the number', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

test('Divide First number by second number and then multiply it by 3rd number', (expect) => {
    const expected = 8;

    const actual = divideThenMultiply(12, 3, 2);

    expect.equal(actual, expected);
});

test('Turn 3 numbers into a 3 number array', (expect) => {
    const expected = [12, 3, 2];

    const actual = returnAsAnArray(12, 3, 2);

    expect.deepEqual(actual, expected);
});

test('Take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '1232';

    const actual = returnAsAString(12, 3, 2);

    expect.equal(actual, expected);
});

test('Take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected = 'Today\'s lucky number is 15';

    const actual = makeLuckyGreeting(12, 3);

    expect.equal(actual, expected);
});

test('This function should take an array and return the second item in the array', (expect) => {
    const expected = 3;

    const actual = getSecondItem([12, 3]);

    expect.equal(actual, expected);
});

test('This function should take an array and return the LAST item in the array, no matter the array\'s length', (expect) => {
    const expected = 4;

    const actual = getLastItem([12, 3, 4]);

    expect.equal(actual, expected);
});

test('This function should return a random number between 0 and 5.', (expect) => {
    const answer = getRandomNumber();

    

    expect.equal(typeof answer, 'number');
});
