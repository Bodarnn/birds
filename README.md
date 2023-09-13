# birds

Birds is a JavaScript library that provides fast and intuitive structures for manipulating and processing structured data. Birds is heavily inspired by Python Pandas and provides a similar syntax. This means that users familiar with Pandas and JavaScript can easily pick it up.

<details>
<summary>Example</summary>

### Bird.example()

```js
const bird = Bird.example();
bird.print();
```

Output:

```
| species | color | diet  | weight | lifespan | wingspan |
|---------|-------|-------|--------|----------|----------|
| sparrow | brown | seeds | 24     | 4        | 19       |
| parrot  | green | fruit | 150    | 80       | 20       |
| pigeon  | gray  | seeds | 300    | 6        | 50       |
| eagle   | brown | meat  | 4000   | 20       | 200      |
| owl     | black | meat  | 1500   | 10       | 150      |
```

</details>

<details>
<summary>Set</summary>

### Bird.set()

```js
const bird = new Bird();
bird["species"] = ["sparrow", "parrot", "pigeon", "eagle", "owl"];
bird["wingspan"] = [19, 20, 50, 200, 150];
bird.print();
```

Output:

```
| species | wingspan |
|---------|----------|
| sparrow | 19       |
| parrot  | 20       |
| pigeon  | 50       |
| eagle   | 200      |
| owl     | 150      |
```

</details>

<details>
<summary>Get</summary>

### Bird.get()

```js
const bird = Bird.example();
const species = bird["species"].array();
console.log(species);
```

Output:

```
['sparrow', 'parrot', 'pigeon', 'eagle', 'owl']
```

</details>

<details>
<summary>Add</summary>

### Bird.add()

```js
const bird = Bird.example();
bird["lingspan"] = bird.add(["lifespan", "wingspan"]);
bird.print();
```

Output:

```
| species | color | diet  | weight | lifespan | wingspan | lingspan |
|---------|-------|-------|--------|----------|----------|----------|
| sparrow | brown | seeds | 24     | 4        | 19       | 23       |
| parrot  | green | fruit | 150    | 80       | 20       | 100      |
| pigeon  | gray  | seeds | 300    | 6        | 50       | 56       |
| eagle   | brown | meat  | 4000   | 20       | 200      | 220      |
| owl     | black | meat  | 1500   | 10       | 150      | 160      |
```

</details>
