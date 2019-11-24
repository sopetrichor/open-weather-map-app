import { Result } from '../prop-types/result';
import { setGuid, temperatureConverter } from './fromSearchByCityName';

test('Set guid property with random number', () => {
  const data = { id: Math.round(Math.random() * 1000) };
  const state = new Result();
  setGuid(data, state);
  expect(state.guid).toBe(String(data.id));
});

test('Set guid property with empty string', () => {
  const data = { id: '' };
  const state = new Result();
  setGuid(data, state);
  expect(state.guid).toBe('');
});

test('Convert from Kelvin to Celsius', () => {
  expect(temperatureConverter(0)).toBe(-273.15);
  expect(temperatureConverter(150)).toBe(-123.15);
  expect(temperatureConverter(273.15)).toBe(0);
  expect(temperatureConverter(700)).toBe(426.85);
  expect(temperatureConverter(1000)).toBe(726.85);
});
