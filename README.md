# cron-comparison

Test and benchmark of all javascript cron implementations

## Running

Run tests and show output in console

`npm run test`

Run tests and update readme with results

`npm run update-readme`

## Credits

This repository was originaly forked from [Hexagon/cron-comparison](https://github.com/Hexagon/cron-comparison)@[`57132f7`](https://github.com/Hexagon/cron-comparison/commit/57132f73323630ac2bc5d1022189b07be08ac773) on 2023-09-29.

## Latest results

> cron-comparison@1.0.2 test
> node index.js

Tests performed at 2023-09-29T16:24:53.338Z

Tested libraries:

- [croner](https://github.com/hexagon/croner)
- [node-cron](https://github.com/node-cron/node-cron)
- [node-schedule](https://github.com/node-schedule/node-schedule)
- [cronosjs](https://github.com/jaclarke/cronosjs)
- [cron](https://github.com/kelektiv/node-cron)

#### Pattern `0 0 0 L 2 *`

```
Tests

croner          - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
cron            - FAIL  - Error: Unknown alias: l

Benchmark (only OK)

croner          x 168,180 ops/sec ±1.41% (90 runs sampled)
node-schedule   x 390 ops/sec ±2.56% (84 runs sampled)
cronosjs        x 68,692 ops/sec ±1.11% (93 runs sampled)

Fastest is croner
```

#### Pattern `1 2 3 4 5 6`

```
Tests

croner          - OK    - 2024-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2024-05-04 03:02:01
cronosjs        - OK    - 2024-05-04 03:02:01
cron            - FAIL  - 2024-06-01 03:02:01

Benchmark (only OK)

croner          x 208,991 ops/sec ±1.42% (98 runs sampled)
node-schedule   x 3,190 ops/sec ±1.52% (88 runs sampled)
cronosjs        x 58,025 ops/sec ±1.28% (95 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

croner          - OK    - 2023-09-29 18:27:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-09-29 18:27:00
cronosjs        - OK    - 2023-09-29 18:27:00
cron            - OK    - 2023-09-29 18:27:00

Benchmark (only OK)

croner          x 196,606 ops/sec ±0.56% (95 runs sampled)
node-schedule   x 21,540 ops/sec ±1.22% (96 runs sampled)
cronosjs        x 37,073 ops/sec ±2.19% (93 runs sampled)
cron            x 30,742 ops/sec ±1.25% (90 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 1`

```
Tests

croner          - OK    - 2024-02-05 00:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2024-02-05 00:00:00
cronosjs        - OK    - 2024-02-05 00:00:00
cron            - FAIL  - 2024-03-04 00:00:00

Benchmark (only OK)

croner          x 205,378 ops/sec ±1.35% (90 runs sampled)
node-schedule   x 5,478 ops/sec ±1.83% (85 runs sampled)
cronosjs        x 57,231 ops/sec ±1.54% (91 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 *`

```
Tests

croner          - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
cron            - FAIL  - 2024-03-29 00:00:00

Benchmark (only OK)

croner          x 204,559 ops/sec ±0.87% (94 runs sampled)
node-schedule   x 743 ops/sec ±1.13% (91 runs sampled)
cronosjs        x 61,924 ops/sec ±1.17% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

croner          - OK    - 2023-09-29 21:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-09-29 21:15:15
cronosjs        - OK    - 2023-09-29 21:15:15
cron            - OK    - 2023-09-29 21:15:15

Benchmark (only OK)

croner          x 180,738 ops/sec ±1.17% (96 runs sampled)
node-schedule   x 1,335 ops/sec ±1.36% (90 runs sampled)
cronosjs        x 41,657 ops/sec ±1.82% (89 runs sampled)
cron            x 2,666 ops/sec ±1.48% (90 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

croner          - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
cron            - FAIL  - 2023-11-01 00:15:15

Benchmark (only OK)

croner          x 191,752 ops/sec ±1.79% (89 runs sampled)
node-schedule   x 3,218 ops/sec ±0.94% (96 runs sampled)
cronosjs        x 56,088 ops/sec ±0.78% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

croner          - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
cron            - FAIL  - 2023-11-05 00:15:15

Benchmark (only OK)

croner          x 142,944 ops/sec ±2.42% (88 runs sampled)
node-schedule   x 2,936 ops/sec ±0.78% (95 runs sampled)
cronosjs        x 45,359 ops/sec ±0.66% (95 runs sampled)

Fastest is croner
```

## Test summary

|    Library    | OK  | FAIL | % OK |
| :-----------: | :-: | :--: | :--: |
|    croner     |  8  |  0   | 100% |
|   node-cron   |  0  |  8   |  0%  |
| node-schedule |  8  |  0   | 100% |
|   cronosjs    |  8  |  0   | 100% |
|     cron      |  2  |  6   | 25%  |
