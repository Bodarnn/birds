# birds

Birds is a JavaScript library that provides fast and intuitive structures for manipulating and processing structured data. Birds is heavily inspired by Python Pandas and provides a similar syntax. This means that users familiar with Pandas and JavaScript can easily pick it up.

<details>
<summary>Set</summary>

## BirdArray.set()

```js
let ba = new BirdArray();
ba[0] = 'foo';
ba[1] = 'bar';
ba[2] = 'baz';
ba.print();
```

Output:

```
['foo', 'bar', 'baz']
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
let ba = bd['foo'];
ba.print();
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
let data = [10, 20, 30];
let ba = new BirdArray(data);
ba = ba.add(5);
ba.print();
```

Output:

```
[15, 25, 35]
```

## Bird.example()

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
| 'a' | 1   | 2   | 3   |
| 'b' | 3   | 4   | 7   |
| 'c' | 5   | 6   | 11  |
```

</details>
