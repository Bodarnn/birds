# birds

Birds is a JavaScript library that provides fast and intuitive structures for manipulating and processing structured data. Birds is heavily inspired by Python Pandas and provides a similar syntax. This means that users familiar with Pandas and JavaScript can easily pick it up.

<details>
<summary>Set</summary>

## BirdArray.set()

```js
let ba = new BirdArray();
ba[0] = 'a';
ba[1] = 'b';
ba[2] = 'c';
ba.print();
```

Output:

```
['a', 'b', 'c']
```

## Bird.set()

```js
let bd = new Bird();
bd['foo'] = ['a', 'b', 'c'];
bd['bar'] = [1, 3, 5];
bd['baz'] = [2, 4, 6];
bd.print();
```

Output:

```
| foo | bar | baz |
|-----|-----|-----|
| 'a' | 1   | 2   |
| 'b' | 3   | 4   |
| 'c' | 5   | 6   |
```

</details>

<details>
<summary>Get</summary>

## BirdArray.get()

```js
let data = ['foo', 'bar', 'baz'];
let ba = new BirdArray(data);
ba[0];
```

Output:

```
'foo'
```

## Bird.get()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6}
];
let bd = new Bird(data);
bd['foo'].print();
```

Output:

```
['a', 'b', 'c']
```

</details>

<details>
<summary>Add</summary>

## BirdArray.add()

```js
let data = [1, 2, 3];
let ba = new BirdArray(data);
ba = ba.add(10)
ba.print();
```

Output:

```
[11, 12, 13]
```

## Bird.add()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.add(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux |
|-----|-----|-----|-----|
| 'a' | 1   | 2   | 3   |
| 'b' | 3   | 4   | 7   |
| 'c' | 5   | 6   | 11  |
```

</details>

<details>
<summary>Subtract</summary>

## BirdArray.sub()

```js
let data = [11, 12, 13];
let ba = new BirdArray(data);
ba = ba.sub(10)
ba.print();
```

Output:

```
[1, 2, 3]
```

## Bird.sub()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.sub(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux |
|-----|-----|-----|-----|
| 'a' | 1   | 2   | -1  |
| 'b' | 3   | 4   | -1  |
| 'c' | 5   | 6   | -1  |
```

</details>

<details>
<summary>Multiply</summary>

## BirdArray.mult()

```js
let data = [1, 2, 3];
let ba = new BirdArray(data);
ba = ba.mult(10)
ba.print();
```

Output:

```
[10, 20, 30]
```

## Bird.mult()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.mult(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux |
|-----|-----|-----|-----|
| 'a' | 1   | 2   | 2   |
| 'b' | 3   | 4   | 12  |
| 'c' | 5   | 6   | 30  |
```

</details>

<details>
<summary>Divide</summary>

## BirdArray.div()

```js
let data = [10, 20, 30];
let ba = new BirdArray(data);
ba = ba.div(10)
ba.print();
```

Output:

```
[1, 2, 3]
```

## Bird.div()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.div(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux     |
|-----|-----|-----|---------|
| 'a' | 1   | 2   | 0.5     |
| 'b' | 3   | 4   | 0.75    |
| 'c' | 5   | 6   | 0.83... |
```

</details>

<details>
<summary>Power</summary>

## BirdArray.power()

```js
let data = [1, 2, 3];
let ba = new BirdArray(data);
ba = ba.power(2)
ba.print();
```

Output:

```
[1, 4, 9]
```

## Bird.power()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.power(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux   |
|-----|-----|-----|-------|
| 'a' | 1   | 2   | 1     |
| 'b' | 3   | 4   | 81    |
| 'c' | 5   | 6   | 15625 |
```

</details>

<details>
<summary>Root</summary>

## BirdArray.root()

```js
let data = [1, 4, 9];
let ba = new BirdArray(data);
ba = ba.root(2)
ba.print();
```

Output:

```
[1, 2, 3]
```

## Bird.power()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.root(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux     |
|-----|-----|-----|---------|
| 'a' | 1   | 2   | 1       |
| 'b' | 3   | 4   | 1.32... |
| 'c' | 5   | 6   | 1.31... |
```

</details>
