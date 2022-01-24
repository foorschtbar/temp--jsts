enum Color {
  None = 0,
  Red = 1,
  Green = 2,
  Blue = 4
}

const color: Color = Color.Red | Color.Blue;

console.log(color);

// ---

type ColorWithoutEnums = 'red' | 'green' | 'blue';

const color2: ColorWithoutEnums = 'red';
