// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('Add exclamation Points to string', (expect) => {
    const expected = '' + '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected, 'Add exclamation Points to string');

    const expected2 = 'string' + '!!!';

    const actual2 = addExclamationPoints('string');

    expect.equal(actual2, expected2, 'Add exclamation Points to string');

    const expected3 = 'string2' + '!!!';

    const actual3 = addExclamationPoints('string2');

    expect.equal(actual3, expected3, 'Add exclamation Points to string');
});


test('Multiply Number By 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, 'Multiply Number By 7');

    const expected2 = 35;

    const actual2 = multiplyBySeven(5);

    expect.equal(actual2, expected2, 'Multiply Number By 7');

    const expected3 = 42;

    const actual3 = multiplyBySeven(6);

    expect.equal(actual3, expected3, 'Multiply Number By 7');
});

test('Multiply by 12 then half the number', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 'Multiply by 12 then half the number');

    const expected2 = 30;

    const actual2 = multiplyBy12ThenHalve(5);

    expect.equal(actual2, expected2, 'Multiply by 12 then half the number');

    const expected3 = 36;

    const actual3 = multiplyBy12ThenHalve(6);

    expect.equal(actual3, expected3, 'Multiply by 12 then half the number');
});

test('Divide First number by second number and then multiply it by 3rd number', (expect) => {
    const expected = 8;

    const actual = divideThenMultiply(12, 3, 2);

    expect.equal(actual, expected, 'Divide First number by second number and then multiply it by 3rd number');

    const expected2 = 10;

    const actual2 = divideThenMultiply(15, 3, 2);

    expect.equal(actual2, expected2, 'Divide First number by second number and then multiply it by 3rd number');

    const expected3 = 12;

    const actual3 = divideThenMultiply(18, 3, 2);

    expect.equal(actual3, expected3, 'Divide First number by second number and then multiply it by 3rd number');
});

test('Turn 3 numbers into a 3 number array', (expect) => {
    const expected = [12, 3, 2];

    const actual = returnAsAnArray(12, 3, 2);

    expect.deepEqual(actual, expected, 'Turn 3 numbers into a 3 number array');

    const expected2 = [15, 6, 4];

    const actual2 = returnAsAnArray(15, 6, 4);

    expect.deepEqual(actual2, expected2, 'Turn 3 numbers into a 3 number array');

    const expected3 = [20, 3, 8];

    const actual3 = returnAsAnArray(20, 3, 8);

    expect.deepEqual(actual3, expected3, 'Turn 3 numbers into a 3 number array');
});

test('Take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '1232';

    const actual = returnAsAString(12, 3, 2);

    expect.equal(actual, expected, 'Take in three numbers and return those numbers mushed together as a string');

    const expected2 = '1564';

    const actual2 = returnAsAString(15, 6, 4);

    expect.equal(actual2, expected2, 'Take in three numbers and return those numbers mushed together as a string');

    const expected3 = '1141';

    const actual3 = returnAsAString(11, 4, 1);

    expect.equal(actual3, expected3, 'Take in three numbers and return those numbers mushed together as a string');
});

test('Take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected = 'Today\'s lucky number is 15';

    const actual = makeLuckyGreeting(12, 3);

    expect.equal(actual, expected, 'Take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number');

    const expected2 = 'Today\'s lucky number is 17';

    const actual2 = makeLuckyGreeting(14, 3);

    expect.equal(actual2, expected2, 'Take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number');

    const expected3 = 'Today\'s lucky number is 29';

    const actual3 = makeLuckyGreeting(25, 4);

    expect.equal(actual3, expected3, 'Take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number');
});

test('This function should take an array and return the second item in the array', (expect) => {
    const expected = 3;

    const actual = getSecondItem([12, 3]);

    expect.equal(actual, expected, 'This function should take an array and return the second item in the array');

    const expected2 = 25;

    const actual2 = getSecondItem([12, 25]);

    expect.equal(actual2, expected2, 'This function should take an array and return the second item in the array');

    const expected3 = 13;

    const actual3 = getSecondItem([10, 13]);

    expect.equal(actual3, expected3, 'This function should take an array and return the second item in the array');
});

test('This function should take an array and return the LAST item in the array, no matter the array\'s length', (expect) => {
    const expected = 4;

    const actual = getLastItem([12, 3, 4]);

    expect.equal(actual, expected, 'This function should take an array and return the LAST item in the array, no matter the array\'s length');

    const expected2 = 9;

    const actual2 = getLastItem([12, 3, 9]);

    expect.equal(actual2, expected2, 'This function should take an array and return the LAST item in the array, no matter the array\'s length');

    const expected3 = 71;

    const actual3 = getLastItem([15, 4, 71]);

    expect.equal(actual3, expected3, 'This function should take an array and return the LAST item in the array, no matter the array\'s length');
});

test('This function should return a random number between 0 and 5.', (expect) => {
    const answer = getRandomNumber();

    

    expect.equal(typeof answer, 'number', 'This function should return a random number between 0 and 5.');

    const answer2 = getRandomNumber();

    

    expect.equal(typeof answer2, 'number', 'This function should return a random number between 0 and 5.');

    const answer3 = getRandomNumber();

    

    expect.equal(typeof answer3, 'number', 'This function should return a random number between 0 and 5.');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});