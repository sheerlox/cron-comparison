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

> cron-comparison@1.1.1 test
> node index.js

Tests performed at 2023-09-29T20:13:47.799Z

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

croner          x 102,404 ops/sec ±0.45% (94 runs sampled)
node-schedule   x 244 ops/sec ±2.37% (82 runs sampled)
cronosjs        x 48,698 ops/sec ±6.40% (91 runs sampled)

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

croner          x 111,089 ops/sec ±0.21% (95 runs sampled)
node-schedule   x 1,982 ops/sec ±1.14% (92 runs sampled)
cronosjs        x 41,201 ops/sec ±3.40% (93 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

croner          - OK    - 2023-09-29 21:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-29 21:00:00
cronosjs        - OK    - 2023-09-29 21:00:00
cron            - OK    - 2023-09-29 21:00:00

Benchmark (only OK)

croner          x 103,201 ops/sec ±0.63% (96 runs sampled)
node-schedule   x 16,233 ops/sec ±0.95% (90 runs sampled)
cronosjs        x 23,986 ops/sec ±0.25% (95 runs sampled)
cron            x 19,282 ops/sec ±1.06% (89 runs sampled)

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

croner          x 118,540 ops/sec ±0.37% (96 runs sampled)
node-schedule   x 3,584 ops/sec ±1.61% (87 runs sampled)
cronosjs        x 41,787 ops/sec ±0.13% (97 runs sampled)

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

croner          x 117,905 ops/sec ±0.29% (95 runs sampled)
node-schedule   x 488 ops/sec ±1.11% (91 runs sampled)
cronosjs        x 48,849 ops/sec ±0.09% (96 runs sampled)

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

croner          x 126,925 ops/sec ±0.13% (96 runs sampled)
node-schedule   x 1,698 ops/sec ±1.64% (91 runs sampled)
cronosjs        x 29,319 ops/sec ±0.29% (91 runs sampled)
cron            x 3,827 ops/sec ±1.37% (90 runs sampled)

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

croner          x 112,166 ops/sec ±0.12% (97 runs sampled)
node-schedule   x 1,995 ops/sec ±0.94% (92 runs sampled)
cronosjs        x 42,970 ops/sec ±0.09% (98 runs sampled)

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

croner          x 86,295 ops/sec ±0.55% (95 runs sampled)
node-schedule   x 1,735 ops/sec ±1.38% (90 runs sampled)
cronosjs        x 30,198 ops/sec ±0.15% (96 runs sampled)

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
