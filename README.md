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
bird["foo"] = bird.add(["wingspan", "lifespan"]);
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

<details>
<summary>Subtract</summary>

## Bird.sub()

```js
const bird = Bird.example();
bird["foo"] = bird.sub(["wingspan", "lifespan"]);
bird["bar"] = bird["foo"].sub(1);
bird.print();
```

Output:

```
| species | color | wingspan | lifespan | foo | bar |
|---------|-------|----------|----------|-----|-----|
| sparrow | brown | 19       | 4        | 15  | 44  |
| parrot  | green | 20       | 80       | -60 | -61 |
| pigeon  | gray  | 50       | 6        | 44  | 43  |
| eagle   | brown | 200      | 20       | 180 | 179 |
```

</details>

<details>
<summary>Multiply</summary>

## Bird.mult()

```js
const bird = Bird.example();
bird["foo"] = bird.mult(["wingspan", "lifespan"]);
bird["bar"] = bird["foo"].mult(2);
bird.print();
```

Output:

```
| species | color | wingspan | lifespan | foo  | bar  |
|---------|-------|----------|----------|------|------|
| sparrow | brown | 19       | 4        | 76   | 152  |
| parrot  | green | 20       | 80       | 1600 | 3200 |
| pigeon  | gray  | 50       | 6        | 300  | 600  |
| eagle   | brown | 200      | 20       | 4000 | 8000 |
```

</details>

<details>
<summary>Divide</summary>

## Bird.div()

```js
const bird = Bird.example();
bird["foo"] = bird.div(["wingspan", "lifespan"]);
bird["bar"] = bird["foo"].div(2);
bird.print();
```

Output:

```
| species | color | wingspan | lifespan | foo     | bar     |
|---------|-------|----------|----------|---------|---------|
| sparrow | brown | 19       | 4        | 4.75    | 2.375   |
| parrot  | green | 20       | 80       | 0.25    | 0.125   |
| pigeon  | gray  | 50       | 6        | 8.33... | 4.16... |
| eagle   | brown | 200      | 20       | 10      | 5       |
```

</details>
