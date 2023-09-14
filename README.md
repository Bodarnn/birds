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
let data = ['a', 'b', 'c'];
let ba = new BirdArray(data);
ba[0];
```

Output:

```
'a'
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
let data = [1, 3, 5];
let ba = new BirdArray(data);
ba = ba.add(1)
ba.print();
```

Output:

```
[2, 4, 6]
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
let data = [2, 4, 6];
let ba = new BirdArray(data);
ba = ba.sub(1)
ba.print();
```

Output:

```
[1, 3, 5]
```

## Bird.sub()

```js
let data = [
    {'foo': 'a', 'bar': 3, 'baz': 2},
    {'foo': 'b', 'bar': 7, 'baz': 4},
    {'foo': 'c', 'bar': 11, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.sub(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux |
|-----|-----|-----|-----|
| 'a' | 3   | 2   | 1   |
| 'b' | 7   | 4   | 3   |
| 'c' | 11  | 6   | 5   |
```

</details>

<details>
<summary>Multiply</summary>

## BirdArray.mult()

```js
let data = [1, 2, 3];
let ba = new BirdArray(data);
ba = ba.mult(2)
ba.print();
```

Output:

```
[2, 4, 6]
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
let data = [2, 4, 6];
let ba = new BirdArray(data);
ba = ba.div(2)
ba.print();
```

Output:

```
[1, 2, 3]
```

## Bird.div()

```js
let data = [
    {'foo': 'a', 'bar': 2, 'baz': 2},
    {'foo': 'b', 'bar': 12, 'baz': 4},
    {'foo': 'c', 'bar': 30, 'baz': 6}
];
let bd = new Bird(data);
bd['qux'] = bd.div(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux |
|-----|-----|-----|-----|
| 'a' | 2   | 2   | 1   |
| 'b' | 12  | 4   | 2   |
| 'c' | 30  | 6   | 3   |
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
    {'foo': 'a', 'bar': 2, 'baz': 1},
    {'foo': 'b', 'bar': 2, 'baz': 2},
    {'foo': 'c', 'bar': 2, 'baz': 3}
];
let bd = new Bird(data);
bd['qux'] = bd.power(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux |
|-----|-----|-----|-----|
| 'a' | 2   | 1   | 2   |
| 'b' | 2   | 2   | 4   |
| 'c' | 2   | 3   | 8   |
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

## Bird.root()

```js
let data = [
    {'foo': 'a', 'bar': 2, 'baz': 1},
    {'foo': 'b', 'bar': 4, 'baz': 2},
    {'foo': 'c', 'bar': 8, 'baz': 3}
];
let bd = new Bird(data);
bd['qux'] = bd.root(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz | qux |
|-----|-----|-----|-----|
| 'a' | 2   | 1   | 2   |
| 'b' | 4   | 2   | 2   |
| 'c' | 8   | 3   | 2   |
```

</details>

<details>
<summary>Log</summary>

## BirdArray.log()

```js
let data = [1, 2, 3];
let ba = new BirdArray(data);
ba = ba.log(10)
ba.print();
```

Output:

```
[0, 0.30, 0.48]
```

## Bird.log()

```js
let data = [
    {'foo': 'a', 'bar': 2, 'baz': 2},
    {'foo': 'b', 'bar': 2, 'baz': 10},
    {'foo': 'c', 'bar': 2, 'baz': Math.E}
];
let bd = new Bird(data);
bd['qux'] = bd.log(['bar', 'baz']);
bd.print();
```

Output:

```
| foo | bar | baz  | qux  |
|-----|-----|------|------|
| 'a' | 2   | 2    | 1    |
| 'b' | 2   | 10   | 0.30 |
| 'c' | 2   | 2.72 | 0.69 |
```

</details>

<details>
<summary>Min</summary>

## BirdArray.min()

```js
let data = [1, 3, 5, 7, 9];
let ba = new BirdArray(data);
ba.min()
```

Output:

```
1
```

## Bird.min()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6},
    {'foo': 'c', 'bar': 7, 'baz': 8},
    {'foo': 'c', 'bar': 9, 'baz': 10}
];
let bd = new Bird(data);
bd.min(['bar', 'baz']);
```

Output:

```
1
```

</details>

<details>
<summary>Max</summary>

## BirdArray.max()

```js
let data = [1, 3, 5, 7, 9];
let ba = new BirdArray(data);
ba.max()
```

Output:

```
9
```

## Bird.max()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6},
    {'foo': 'c', 'bar': 7, 'baz': 8},
    {'foo': 'c', 'bar': 9, 'baz': 10}
];
let bd = new Bird(data);
bd.max(['bar', 'baz']);
```

Output:

```
10
```

</details>

<details>
<summary>Range</summary>

## BirdArray.range()

```js
let data = [1, 3, 5, 7, 9];
let ba = new BirdArray(data);
ba.range()
```

Output:

```
8
```

## Bird.range()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6},
    {'foo': 'c', 'bar': 7, 'baz': 8},
    {'foo': 'c', 'bar': 9, 'baz': 10}
];
let bd = new Bird(data);
bd.range(['bar', 'baz']);
```

Output:

```
9
```

</details>

<details>
<summary>Median</summary>

## BirdArray.median()

```js
let data = [1, 3, 5, 7, 9];
let ba = new BirdArray(data);
ba.median()
```

Output:

```
5
```

## Bird.median()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6},
    {'foo': 'c', 'bar': 7, 'baz': 8},
    {'foo': 'c', 'bar': 9, 'baz': 10}
];
let bd = new Bird(data);
bd.median(['bar', 'baz']);
```

Output:

```
5.5
```

</details>

<details>
<summary>First-quartile</summary>

## BirdArray.q1()

```js
let data = [1, 3, 5, 7, 9];
let ba = new BirdArray(data);
ba.q1()
```

Output:

```
3
```

## Bird.q1()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6},
    {'foo': 'c', 'bar': 7, 'baz': 8},
    {'foo': 'c', 'bar': 9, 'baz': 10}
];
let bd = new Bird(data);
bd.q1(['bar', 'baz']);
```

Output:

```
3
```

</details>

<details>
<summary>Third-quartile</summary>

## BirdArray.q3()

```js
let data = [1, 3, 5, 7, 9];
let ba = new BirdArray(data);
ba.q3()
```

Output:

```
7
```

## Bird.q3()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6},
    {'foo': 'c', 'bar': 7, 'baz': 8},
    {'foo': 'c', 'bar': 9, 'baz': 10}
];
let bd = new Bird(data);
bd.q3(['bar', 'baz']);
```

Output:

```
8
```

</details>

<details>
<summary>Inter-quartile range</summary>

## BirdArray.range()

```js
let data = [1, 3, 5, 7, 9];
let ba = new BirdArray(data);
ba.iqr()
```

Output:

```
4
```

## Bird.range()

```js
let data = [
    {'foo': 'a', 'bar': 1, 'baz': 2},
    {'foo': 'b', 'bar': 3, 'baz': 4},
    {'foo': 'c', 'bar': 5, 'baz': 6},
    {'foo': 'c', 'bar': 7, 'baz': 8},
    {'foo': 'c', 'bar': 9, 'baz': 10}
];
let bd = new Bird(data);
bd.iqr(['bar', 'baz']);
```

Output:

```
5
```

</details>
