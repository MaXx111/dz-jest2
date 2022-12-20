import getUpgrateHealthyStatus from '../app.js';

test('healthyStatusByToEqual', () => {
  const result = getUpgrateHealthyStatus([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);

  const expct = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(expct);
});

test('healthyStatusByToBe', () => {
  const result = getUpgrateHealthyStatus([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);

  const expct = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toBe(expct);
});

test('healthyStatusByToBe', () => {
  const result = getUpgrateHealthyStatus([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);

  const expct = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).not.toBe(expct);
});
