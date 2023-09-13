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
| (index) | species | color | lifespan | wingspan |
|---------|---------|-------|----------|----------|
| 0       | sparrow | brown | 4        | 19       |
| 1       | parrot  | green | 80       | 20       |
| 2       | pigeon  | gray  | 6        | 50       |
| 3       | eagle   | brown | 20       | 200      |
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
| (index) | diet  | weight |
|---------|-------|--------|
| 0       | seeds | 24     |
| 1       | fruit | 150    |
| 2       | seeds | 300    |
| 3       | meat  | 4000   |
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
