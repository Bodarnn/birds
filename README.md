# birds

Birds is a JavaScript library that provides fast and intuitive structures for manipulating and processing structured data. Birds is heavily inspired by Python Pandas and provides a similar syntax. This means that users familiar with Pandas and JavaScript can easily pick it up.

<details>
<summary>Example</summary>

## BirdArray.example()

```js
const ba = BirdArray.example();
ba.print()
```

Output:

```
['forest', 'jungle', 'city', 'wetlands']
```

## Bird.example()

```js
const bd = Bird.example();
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
const ba = new BirdArray();
ba[0] = "seeds";
ba[1] = "fruit";
ba[2] = "seeds";
ba[3] = "meat";
ba.print();
```

Output:

```
['seeds', 'fruit', 'seeds', 'meat']
```

## Bird.set()

```js
const bd = new Bird();
bd["habitat"] = BirdArray.example();
bd["weight"] = [24, 150, 300, 4000];
bd.print();
```

Output:

```
| habitat    | weight |
|------------|--------|
| 'forest'   | 24     |
| 'jungle'   | 150    |
| 'city'     | 300    |
| 'wetlands' | 4000   |
```

</details>

<details>
<summary>Get</summary>

## BirdArray.get()

```js
const ba = BirdArray.example();
ba[2];
```

Output:

```
'city'
```

## Bird.get()

```js
const bd = Bird.example();
const ba = bd["color"];
ba.print();
```

Output:

```
['brown', 'green', 'gray', 'brown']
```

</details>

<details>
<summary>Add</summary>

## BirdArray.add()

```js
let ba = BirdArray.example();
ba = ba.add(" biome")
ba.print();
```

Output:

```
['forest biome', 'jungle biome', 'city biome', 'wetlands biome']
```

## Bird.add()

```js
const bd = Bird.example();
bd["span"] = bd.add(["wingspan", "lifespan"]);
bd.print();
```

Output:

```
| species | color | wingspan | lifespan | span |
|---------|-------|----------|----------|------|
| sparrow | brown | 19       | 4        | 23   |
| parrot  | green | 20       | 80       | 100  |
| pigeon  | gray  | 50       | 6        | 56   |
| eagle   | brown | 200      | 20       | 220  |
```

</details>
