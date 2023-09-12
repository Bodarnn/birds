# birds

Birds is a JavaScript library that provides high-performance, intuitive, and easy-to-use data structures for manipulating and processing structured data. Birds is heavily inspired by Python Pandas and provides a similar syntax. This means that users familiar with Pandas and know JavaScript can easily pick it up.

## Example

```javascript
const bird = new Bird();
bird["species"] = ['sparrow', 'parrot', 'pigeon', 'eagle', 'owl'];
bird["color"] = ['brown', 'green', 'gray', 'brown', 'black'];
bird["diet"] = ['seeds', 'fruits', 'seeds', 'meat', 'meat'];
bird["weight"] = [24, 150, 300, 4000, 1500];
bird["lifespan"] = [4, 80, 6, 20, 10];
bird["wingspan"] = [19, 20, 50, 200, 150];
```

**Output:**

```
| species | color | diet  | weight | lifespan | wingspan |
|---------|-------|-------|--------|----------|----------|
| sparrow | brown | seeds | 24     | 4        | 19       |
| parrot  | green | fruits| 150    | 80       | 20       |
| pigeon  | gray  | seeds | 300    | 6        | 50       |
| eagle   | brown | meat  | 4000   | 20       | 200      |
| owl     | black | meat  | 1500   | 10       | 150      |
```
