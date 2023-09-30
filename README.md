# cron-comparison

Automated benchmark of all JavaScript `cron` implementations, using [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://docs.github.com/en/actions).

## Running locally

Run benchmark and show output in console

`npm run benchmark`

Run benchmark and update readme with results

`npm run update-readme`

## Credits

This repository was originaly forked from [Hexagon/cron-comparison](https://github.com/Hexagon/cron-comparison)@[`57132f7`](https://github.com/Hexagon/cron-comparison/commit/57132f73323630ac2bc5d1022189b07be08ac773) on 2023-09-29.

## Latest results

> cron-comparison@1.2.2 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-09-30T01:23:35.374Z

Tested libraries:

- [cron](https://github.com/kelektiv/node-cron) `v3.0.0`
- [croner](https://github.com/hexagon/croner) `v7.0.2`
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

croner          x 105,794 ops/sec ±0.41% (97 runs sampled)
cronosjs        x 48,664 ops/sec ±5.50% (96 runs sampled)
node-schedule   x 259 ops/sec ±0.86% (87 runs sampled)

Fastest is croner
```

#### Pattern `1 2 3 4 5 6`

```
Tests

cron            - OK    - 2024-05-04 03:02:01
croner          - OK    - 2024-05-04 03:02:01
cronosjs        - OK    - 2024-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-05-04 03:02:01

Benchmark (only OK)

cron            x 4,304 ops/sec ±4.47% (97 runs sampled)
croner          x 111,642 ops/sec ±0.40% (94 runs sampled)
cronosjs        x 41,956 ops/sec ±1.59% (96 runs sampled)
node-schedule   x 2,047 ops/sec ±0.89% (94 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 03:00:00
croner          - OK    - 2023-09-30 03:00:00
cronosjs        - OK    - 2023-09-30 03:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 03:00:00

Benchmark (only OK)

cron            x 16,802 ops/sec ±0.67% (93 runs sampled)
croner          x 111,215 ops/sec ±0.15% (96 runs sampled)
cronosjs        x 25,753 ops/sec ±0.13% (96 runs sampled)
node-schedule   x 13,280 ops/sec ±0.63% (95 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 1`

```
Tests

cron            - OK    - 2024-02-05 00:00:00
croner          - OK    - 2024-02-05 00:00:00
cronosjs        - OK    - 2024-02-05 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-05 00:00:00

Benchmark (only OK)

cron            x 6,734 ops/sec ±0.76% (95 runs sampled)
croner          x 116,051 ops/sec ±0.27% (97 runs sampled)
cronosjs        x 42,044 ops/sec ±0.21% (90 runs sampled)
node-schedule   x 3,704 ops/sec ±0.84% (94 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 *`

```
Tests

cron            - OK    - 2024-02-29 00:00:00
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

cron            x 2,098 ops/sec ±0.82% (95 runs sampled)
croner          x 122,954 ops/sec ±0.18% (97 runs sampled)
cronosjs        x 49,169 ops/sec ±0.19% (95 runs sampled)
node-schedule   x 483 ops/sec ±0.75% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 03:15:15
croner          - OK    - 2023-09-30 03:15:15
cronosjs        - OK    - 2023-09-30 03:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 03:15:15

Benchmark (only OK)

cron            x 3,474 ops/sec ±0.73% (95 runs sampled)
croner          x 133,941 ops/sec ±0.14% (95 runs sampled)
cronosjs        x 30,740 ops/sec ±0.17% (91 runs sampled)
node-schedule   x 1,736 ops/sec ±0.65% (96 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2023-10-01 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

cron            x 3,648 ops/sec ±0.87% (95 runs sampled)
croner          x 117,605 ops/sec ±0.20% (96 runs sampled)
cronosjs        x 41,861 ops/sec ±0.17% (95 runs sampled)
node-schedule   x 2,048 ops/sec ±0.79% (94 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-01 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

cron            x 3,573 ops/sec ±0.91% (96 runs sampled)
croner          x 91,359 ops/sec ±0.33% (94 runs sampled)
cronosjs        x 31,188 ops/sec ±0.39% (95 runs sampled)
node-schedule   x 1,872 ops/sec ±0.80% (94 runs sampled)

Fastest is croner
```

## Test summary

|    Library    | OK  | FAIL | % OK  |
| :-----------: | :-: | :--: | :---: |
|     cron      |  7  |  1   | 87.5% |
|    croner     |  8  |  0   | 100%  |
|   cronosjs    |  8  |  0   | 100%  |
|   node-cron   |  0  |  8   |  0%   |
| node-schedule |  8  |  0   | 100%  |
