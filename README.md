# birds

Birds is a JavaScript library that provides fast and intuitive structures for manipulating and processing structured data. Birds is heavily inspired by Python Pandas and provides a similar syntax. This means that users familiar with Pandas and JavaScript can easily pick it up.

<details>
<summary>Example</summary>

## BirdArray.example()

```js
let ba = BirdArray.example();
ba.print()
```

Output:

```
['forest', 'jungle', 'city', 'wetlands']
```

## Bird.example()

```js
let bd = Bird.example();
bd.print();
```

Output:

```
| species   | color   | wingspan | lifespan |
|-----------|---------|----------|----------|
| 'sparrow' | 'brown' | 19       | 4        |
| 'parrot'  | 'green' | 20       | 80       |
| 'pigeon'  | 'gray'  | 50       | 6        |
| 'eagle'   | 'brown' | 200      | 20       |
```

</details>

<details>
<summary>Set</summary>

## BirdArray.set()

```js
let ba = BirdArray.example();
ba[0] = "foo";
ba.print();
```

Output:

```
['foo', 'jungle', 'city', 'wetlands']
```

## Bird.set()

```js
let bd = Bird.example();
bd["foo"] = [1, 2, 3, 4];
bd.print();
```

Output:

```
| species   | color   | wingspan | lifespan | foo |
|-----------|---------|----------|----------|-----|
| 'sparrow' | 'brown' | 19       | 4        | 1   |
| 'parrot'  | 'green' | 20       | 80       | 2   |
| 'pigeon'  | 'gray'  | 50       | 6        | 3   |
| 'eagle'   | 'brown' | 200      | 20       | 4   |
```

</details>

<details>
<summary>Get</summary>

## BirdArray.get()

```js
let ba = BirdArray.example();
ba[0];
```

Output:

```
'forest'
```

## Bird.get()

```js
let bd = Bird.example();
let ba = bd["species"];
ba.print();
```

Output:

```
['sparrow', 'parrot', 'pigeon', 'eagle']
```

</details>
