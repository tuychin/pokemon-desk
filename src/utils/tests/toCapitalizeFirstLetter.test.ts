import toCapitalizeFirstLetter from '../toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна сделать первую букву строки заглавной', () => {
    expect(toCapitalizeFirstLetter('строка с заглавной буквы')).toBe('Строка с заглавной буквы');
  });
});
