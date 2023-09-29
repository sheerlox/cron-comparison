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

> cron-comparison@1.1.0 test
> node index.js

Tests performed at 2023-09-29T18:31:38.017Z

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

croner          x 107,590 ops/sec ±0.72% (93 runs sampled)
node-schedule   x 253 ops/sec ±0.87% (85 runs sampled)
cronosjs        x 47,814 ops/sec ±6.80% (91 runs sampled)

Fastest is croner
```

#### Pattern `1 2 3 4 5 6`

```
Tests

croner          - OK    - 2024-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-05-04 03:02:01
cronosjs        - OK    - 2024-05-04 03:02:01
cron            - FAIL  - 2024-06-01 03:02:01

Benchmark (only OK)

croner          x 132,506 ops/sec ±0.60% (90 runs sampled)
node-schedule   x 1,988 ops/sec ±1.06% (93 runs sampled)
cronosjs        x 40,507 ops/sec ±3.17% (95 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

croner          - OK    - 2023-09-29 18:33:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-29 18:33:00
cronosjs        - OK    - 2023-09-29 18:33:00
cron            - OK    - 2023-09-29 18:33:00

Benchmark (only OK)

croner          x 127,430 ops/sec ±0.44% (97 runs sampled)
node-schedule   x 16,919 ops/sec ±1.90% (92 runs sampled)
cronosjs        x 25,207 ops/sec ±0.40% (93 runs sampled)
cron            x 24,352 ops/sec ±0.80% (93 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 1`

```
Tests

croner          - OK    - 2024-02-05 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-05 00:00:00
cronosjs        - OK    - 2024-02-05 00:00:00
cron            - FAIL  - 2024-03-04 00:00:00

Benchmark (only OK)

croner          x 145,690 ops/sec ±0.22% (94 runs sampled)
node-schedule   x 3,684 ops/sec ±1.18% (95 runs sampled)
cronosjs        x 40,826 ops/sec ±0.26% (93 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 *`

```
Tests

croner          - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
cron            - FAIL  - 2024-03-29 00:00:00

Benchmark (only OK)

croner          x 129,405 ops/sec ±0.98% (98 runs sampled)
node-schedule   x 480 ops/sec ±1.35% (92 runs sampled)
cronosjs        x 48,387 ops/sec ±0.15% (97 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

croner          - OK    - 2023-09-29 21:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-29 21:15:15
cronosjs        - OK    - 2023-09-29 21:15:15
cron            - OK    - 2023-09-29 21:15:15

Benchmark (only OK)

croner          x 117,602 ops/sec ±0.13% (95 runs sampled)
node-schedule   x 960 ops/sec ±0.88% (94 runs sampled)
cronosjs        x 29,845 ops/sec ±0.17% (95 runs sampled)
cron            x 1,928 ops/sec ±1.20% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

croner          - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
cron            - FAIL  - 2023-11-01 00:15:15

Benchmark (only OK)

croner          x 126,848 ops/sec ±0.53% (97 runs sampled)
node-schedule   x 1,981 ops/sec ±0.90% (94 runs sampled)
cronosjs        x 41,474 ops/sec ±0.18% (99 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

croner          - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
cron            - FAIL  - 2023-11-05 00:15:15

Benchmark (only OK)

croner          x 101,699 ops/sec ±0.49% (93 runs sampled)
node-schedule   x 1,805 ops/sec ±1.36% (92 runs sampled)
cronosjs        x 31,055 ops/sec ±0.10% (98 runs sampled)

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
