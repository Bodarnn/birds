# birds

Birds is a JavaScript library that provides fast and intuitive structures for manipulating and processing structured data. Birds is heavily inspired by Python Pandas and provides a similar syntax. This means that users familiar with Pandas and JavaScript can easily pick it up.

<details>
<summary>Example</summary>

## Bird.example()

```js
const bird = Bird.example();
bird.print();
```

Output:

```
| species | color | wingspan | lifespan |
|---------|-------|----------|----------|
| sparrow | brown | 19       | 4        |
| parrot  | green | 20       | 80       |
| pigeon  | gray  | 50       | 6        |
| eagle   | brown | 200      | 20       |
```

</details>

<details>
<summary>Set</summary>

## Bird.set()

```js
const bird = new Bird();
bird["diet"] = ["seeds", "fruit", "seeds", "meat"];
bird["weight"] = [24, 150, 300, 4000];
bird.print();
```

Output:

```
| diet  | weight |
|-------|--------|
| seeds | 24     |
| fruit | 150    |
| seeds | 300    |
| meat  | 4000   |
```

</details>

<details>
<summary>Get</summary>

## Bird.get()

```js
const bird = Bird.example();
bird["species"].array();
```

Output:

```
['sparrow', 'parrot', 'pigeon', 'eagle']
```

</details>

<details>
<summary>Add</summary>

## Bird.add()

```js
const bird = Bird.example();
bird["foo"].add(["wingspan", "lifespan"]);
bird["bar"] = bird["foo"].add(1);
bird.print();
```

Output:

```
| species | color | wingspan | lifespan | foo | bar |
|---------|-------|----------|----------|-----|-----|
| sparrow | brown | 19       | 4        | 23  | 24  |
| parrot  | green | 20       | 80       | 100 | 101 |
| pigeon  | gray  | 50       | 6        | 56  | 57  |
| eagle   | brown | 200      | 20       | 220 | 221 |
```

</details>
