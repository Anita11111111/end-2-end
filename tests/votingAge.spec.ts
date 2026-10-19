import { test, expect } from '@playwright/test';

test.describe('Actions with if-else statements', () => {
    function getVotingMessage(age: number) {
        if (typeof age !== "number") {
            throw new Error("Передайте число");
        }
        if (age >= 18) {
            return 'You could vote';
        }
        else if (age < 18) {
            return 'You could not vote';
        }
        else {
            return 'Please provide correct age';
        }
    }

    test("вік 17 повертає 'You could not vote'", () => {
        expect(getVotingMessage(17)).toBe('You could not vote');
});

test("вік 18 повертає 'You could vote'", () => {
  expect(getVotingMessage(18)).toBe('You could vote');
});

test("вік 19 повертає 'You could vote'", () => {
  expect(getVotingMessage(19)).toBe('You could vote');
});

    
})
