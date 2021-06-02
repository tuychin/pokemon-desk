import toCapitalizeFirstLetter from '../toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна сделать первую букву строки заглавной', () => {
    expect(toCapitalizeFirstLetter('строка с заглавной буквы')).toBe('Строка с заглавной буквы');
  });

  test('Должна вернуть пустую строку, если аргумент пустая строка', () => {
    expect(toCapitalizeFirstLetter('')).toBe('');
  });
});
