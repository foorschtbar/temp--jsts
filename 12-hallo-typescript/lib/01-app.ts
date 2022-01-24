const pi: number = 3.1415;

const ignoreWithAny = function (value: any) {
  // Crasht für alle Werte von value, sofern sie keine Strings sind.
  value.toUpperCase();
};

const ignoreWithUnknown = function (value: unknown) {
  // Compilerfehler für alles, weil dank unknown nicht bekannt ist, was das für
  // ein Wert ist. Im Zweifelsfall mit typeof prüfen.
  if (typeof value === 'string') {
    value.toUpperCase();
  }
};

const show = function (value: string | number | boolean): void {
  console.log(value);
};

const greet = (name: string): void => {
  show(`Hallo ${name}!`);
};

const greet2 = (name?: string): void => {
  if (name === undefined) {
    console.log('Hallo!');
    return;
  }

  console.log(`HALLO ${name.toUpperCase()}!`);
};

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

const rollDice = function (): DiceValue {
  return Math.floor((Math.random() * 5)) + 1 as DiceValue;
};

const addDiceValues = function (x: DiceValue, y: DiceValue): number {
  return x + y;
};

const add = (x: number, y: number): number => {
  return x + y;
};

greet('TypeScript');

const sum = add(23, 42);
