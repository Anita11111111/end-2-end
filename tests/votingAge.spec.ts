import { test, expect } from '@playwright/test';

test.describe('Actions with if-else statements', () => {
    function getVotingMessage(age: number) {
        if (typeof age !== "number") {
            throw new Error("Передайте число");
        }
        if (age >= 18) {
            return 'Ви можете голосувати.';
        }
        else if (age < 18) {
            return 'Ви ще не можете голосувати.';
        }
        else {
            return 'Будь ласка, введіть правильний вік';
        }
    }

    test("вік 17 повертає 'Ви ще не можете голосувати.'", () => {
        expect(getVotingMessage(17)).toBe('Ви ще не можете голосувати.');
});

test("вік 18 повертає 'Ви можете голосувати.'", () => {
  expect(getVotingMessage(18)).toBe('Ви можете голосувати.');
});

test("вік 19 повертає 'Ви можете голосувати.'", () => {
  expect(getVotingMessage(19)).toBe('Ви можете голосувати.');
});

    
})
