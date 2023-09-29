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

> cron-comparison@1.2.0 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-09-29T22:29:16.409Z

Tested libraries:

- [cron](https://github.com/kelektiv/node-cron) `v2.4.4`
- [croner](https://github.com/hexagon/croner) `v7.0.1`
- [cronosjs](https://github.com/jaclarke/cronosjs) `v1.7.1`
- [node-cron](https://github.com/node-cron/node-cron) `v3.0.2`
- [node-schedule](https://github.com/node-schedule/node-schedule) `v2.1.1`

#### Pattern `0 0 0 L 2 *`

```
Tests

cron            - FAIL  - Error: Unknown alias: l
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

croner          x 101,501 ops/sec ±0.61% (95 runs sampled)
cronosjs        x 51,438 ops/sec ±5.64% (96 runs sampled)
node-schedule   x 261 ops/sec ±1.12% (88 runs sampled)

Fastest is croner
```

#### Pattern `1 2 3 4 5 6`

```
Tests

cron            - FAIL  - 2024-06-01 03:02:01
croner          - OK    - 2024-05-04 03:02:01
cronosjs        - OK    - 2024-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-05-04 03:02:01

Benchmark (only OK)

croner          x 110,196 ops/sec ±0.22% (96 runs sampled)
cronosjs        x 42,629 ops/sec ±3.14% (95 runs sampled)
node-schedule   x 1,992 ops/sec ±2.72% (91 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 00:00:00
croner          - OK    - 2023-09-30 00:00:00
cronosjs        - OK    - 2023-09-30 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 00:00:00

Benchmark (only OK)

cron            x 16,198 ops/sec ±0.89% (91 runs sampled)
croner          x 97,362 ops/sec ±0.34% (98 runs sampled)
cronosjs        x 24,796 ops/sec ±0.21% (93 runs sampled)
node-schedule   x 12,900 ops/sec ±0.80% (93 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 1`

```
Tests

cron            - FAIL  - 2024-03-04 00:00:00
croner          - OK    - 2024-02-05 00:00:00
cronosjs        - OK    - 2024-02-05 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-05 00:00:00

Benchmark (only OK)

croner          x 117,719 ops/sec ±0.12% (98 runs sampled)
cronosjs        x 41,991 ops/sec ±0.14% (92 runs sampled)
node-schedule   x 3,787 ops/sec ±0.83% (92 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 *`

```
Tests

cron            - FAIL  - 2024-03-29 00:00:00
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

croner          x 118,097 ops/sec ±0.10% (99 runs sampled)
cronosjs        x 50,871 ops/sec ±0.47% (98 runs sampled)
node-schedule   x 503 ops/sec ±1.12% (89 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 00:15:15
croner          - OK    - 2023-09-30 00:15:15
cronosjs        - OK    - 2023-09-30 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 00:15:15

Benchmark (only OK)

cron            x 3,716 ops/sec ±1.01% (91 runs sampled)
croner          x 118,725 ops/sec ±0.70% (98 runs sampled)
cronosjs        x 30,336 ops/sec ±0.14% (96 runs sampled)
node-schedule   x 1,721 ops/sec ±0.92% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - FAIL  - 2023-11-01 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

croner          x 111,330 ops/sec ±0.41% (96 runs sampled)
cronosjs        x 43,648 ops/sec ±0.28% (96 runs sampled)
node-schedule   x 2,010 ops/sec ±1.08% (92 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - FAIL  - 2023-11-05 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

croner          x 86,930 ops/sec ±0.11% (98 runs sampled)
cronosjs        x 30,914 ops/sec ±0.13% (97 runs sampled)
node-schedule   x 1,804 ops/sec ±1.03% (92 runs sampled)

Fastest is croner
```

## Test summary

|    Library    | OK  | FAIL | % OK |
| :-----------: | :-: | :--: | :--: |
|     cron      |  2  |  6   | 25%  |
|    croner     |  8  |  0   | 100% |
|   cronosjs    |  8  |  0   | 100% |
|   node-cron   |  0  |  8   |  0%  |
| node-schedule |  8  |  0   | 100% |
