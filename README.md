# JavaScript

```csharp
public static void Main () {
  var person = new Person();

  // ...
}
```

```javascript
function main () {
  var person = new Person();

  // ...
}
```

**JavaScript ist keine C-Sprache!**

```lisp
()
'(2 3 5 7 11)
(+ 2 3)
(/ (+ 2 3) 4)
(defvar primes '(2 3 5 7 11))
(defun add (x y) (+ x y))

(defvar person '(
  '(:first-name "Donald")
  '(:last-name "Duck")
  '(:get-full-name (lambda () "Donald Duck"))
))
```

## Versionen

JavaScript => EcmaScript

- EcmaScript 1
- EcmaScript 2
- EcmaScript 3
- EcmaScript 5
- EcmaScript 6   EcmaScript Harmony   EcmaScript 2015
-                                     EcmaScript 2016
-                                     EcmaScript 2017
-                                     ...
-                                     EcmaScript 2021
-                                     EcmaScript 2022

## Datentypen

- `number`
  - für alles, was wie eine Zahl aussieht
  - entspricht `double` gemäß IEEE 754
  - kennt `+0`, `-0`, `+Infinity`, `-Infinity`, …
- `string`
  - für alles, was wie Text aussieht
  - kann mit `'`, `"` oder Backticks eingefasst werden
  - Backticks unterstützen Interpolation mit Hilfe von `${}`
  - Backticks unterstützen mehrzeilige Strings
- `boolean`
  - kennt zwei Werte, `true` und `false`
- `undefined`
  - kennt einen Wert, `undefined`
- `function`
  - Funktionen sind Werte, das heißt, sie sind Ausdrücke (Expressions)
- `object`
  - sind keine Objekte im klassischen OOP-Sinne, sondern eher Dictionaries
  - Properties können sich zur Laufzeit ändern beziehungsweise können ergänzt werden
  - Zugriff auf nicht vorhandene Properties gibt `undefined` zurück
  - `null`, wenn kein Objekt vorhanden ist

## Variablen

- Drei Schlüsselwörter, mit denen man Variablen deklarieren kann
  - `var`, `let` und `const`
  - `const` > `let` > `var` (deprecated)

## Operatoren

### Arithmethische Operatoren

- Grundrechenarten: `+`, `-`, `*`, `/`
- Potenz: `**` (seit ES2016, vorher `Math.pow()`)
- Modulodivision: `%`

### Logische Operatoren

- Und: `&&`
- Oder: `||`
- Nicht: `!`

- Falsy values
  - `false`, `0`, `''`, `undefined`, `null`

```javascript
23 && 'Hallo Welt'   // => truthy && truthy => 'Hallo Welt'
0 && 'Hallo Welt'    // => falsy && irrelevant => 0
23 || 'Hallo Welt'   // => truthy && irrelevant => 23
0 || 'Hallo Welt'    // => falsy && truthy => 'Hallo Welt'
```

```javascript
const person = {
  firstName: 'Donald',
  lastName: 'Duck'
};

console.log(person.firstName);
console.log(person.middleName || 'n/a');
console.log(person.lastName);
```

### Vergleichsoperatoren

- `==` / `!=`
  - Stattdessen: `===` / `!==` (typsicher!)
- `>` / `<`
- `>=` / `<=`

### Bitweisen Operatoren

- Und: `&`
- Oder: `|`
- Exklusives oder (XOR): `^`
- Nicht: `~`

```
10011011     (entspricht dezimal 155)
00001000     (entspricht dezimal 8)

00001000     (mit & => Test, ob 4. Bit von rechts gesetzt ist)
```

## Typsystem

```javascript
// Schwaches dynamisches Typsystem
// - Typ hängt am Wert
let x;
x = 5; // => number
x = 'Hallo Welt'; // => string
```

```csharp
// Starkes statisches Typsystem
// - Typ hängt an der Variablen
int x;
```

## Automatic Semicolon Insertion (ASI)

```javascript
const add = function (left, right) {
  return (
    left + right);
};

const sum = add(23, 42); // => undefined
```
