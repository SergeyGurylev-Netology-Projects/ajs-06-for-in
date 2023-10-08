import orderByProps from '../index';

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

test('test 1', () => {
  const result = orderByProps(obj, ["name", "level"]);

  const expected = [
    {key: "name", value: "мечник"},
    {key: "level", value: 2},
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10}
  ];

  expect(result).toMatchObject(expected);
});

test('test 2', () => {
  const result = orderByProps(obj, ["level", "name", "health", "defence", "attack"]);

  const expected = [
    {key: "level", value: 2},
    {key: "name", value: "мечник"},
    {key: "health", value: 10},
    {key: "defence", value: 40},
    {key: "attack", value: 80}
  ];

  expect(result).toMatchObject(expected);
});

test('test 3', () => {
  const result = orderByProps(obj, []);

  const expected = [
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10},
    {key: "level", value: 2},
    {key: "name", value: "мечник"}
  ];

  expect(result).toMatchObject(expected);
});
