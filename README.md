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

> cron-comparison@1.0.1 test
> node index.js

Tests performed at 2022-10-31T19:57:44.196Z

Tested libraries:

*   [croner](https://github.com/hexagon/croner)
*   [node-cron](https://github.com/node-cron/node-cron)
*   [node-schedule](https://github.com/node-schedule/node-schedule)
*   [cronosjs](https://github.com/jaclarke/cronosjs)
*   [cron](https://github.com/kelektiv/node-cron)

#### Pattern '0 0 0 L 2 *'
```
Tests

croner          - OK    - 2023-02-28 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2023-02-28 00:00:00
cronosjs        - OK    - 2023-02-28 00:00:00
cron            - FAIL  - Error: Unknown alias: l

Benchmark (only OK)

croner          x 97,163 ops/sec ±4.13% (87 runs sampled)
node-schedule   x 453 ops/sec ±2.07% (86 runs sampled)
cronosjs        x 32,495 ops/sec ±8.28% (87 runs sampled)

Fastest is croner         
```

#### Pattern '1 2 3 4 5 6'
```
Tests

croner          - OK    - 2023-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-05-04 03:02:01
cronosjs        - OK    - 2023-05-04 03:02:01
cron            - FAIL  - 2023-06-03 03:02:01

Benchmark (only OK)

croner          x 116,313 ops/sec ±1.35% (89 runs sampled)
node-schedule   x 2,854 ops/sec ±3.89% (90 runs sampled)
cronosjs        x 30,082 ops/sec ±0.94% (92 runs sampled)

Fastest is croner         
```

#### Pattern '*/3 */3 */3 * * *'
```
Tests

croner          - OK    - 2022-10-31 21:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 21:00:00
cronosjs        - OK    - 2022-10-31 21:00:00
cron            - OK    - 2022-10-31 21:00:00

Benchmark (only OK)

croner          x 113,476 ops/sec ±0.66% (94 runs sampled)
node-schedule   x 18,074 ops/sec ±3.32% (85 runs sampled)
cronosjs        x 18,946 ops/sec ±1.04% (90 runs sampled)
cron            x 26,651 ops/sec ±0.85% (91 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 1'
```
Tests

croner          - OK    - 2023-02-06 00:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-02-06 00:00:00
cronosjs        - OK    - 2023-02-06 00:00:00
cron            - FAIL  - 2023-03-06 00:00:00

Benchmark (only OK)

croner          x 122,595 ops/sec ±1.15% (93 runs sampled)
node-schedule   x 4,316 ops/sec ±1.10% (89 runs sampled)
cronosjs        x 27,840 ops/sec ±0.67% (91 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 *'
```
Tests

croner          - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
cron            - FAIL  - 2023-03-29 00:00:00

Benchmark (only OK)

croner          x 73,647 ops/sec ±5.75% (78 runs sampled)
node-schedule   x 223 ops/sec ±1.41% (86 runs sampled)
cronosjs        x 27,911 ops/sec ±0.84% (90 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * * *'
```
Tests

croner          - OK    - 2022-10-31 21:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 21:15:15
cronosjs        - OK    - 2022-10-31 21:15:15
cron            - OK    - 2022-10-31 21:15:15

Benchmark (only OK)

croner          x 126,358 ops/sec ±1.33% (92 runs sampled)
node-schedule   x 2,595 ops/sec ±0.74% (93 runs sampled)
cronosjs        x 22,088 ops/sec ±0.81% (92 runs sampled)
cron            x 5,863 ops/sec ±1.33% (91 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 */10 10 *'
```
Tests

croner          - OK    - 2022-10-31 21:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 21:15:15
cronosjs        - OK    - 2022-10-31 21:15:15
cron            - FAIL  - 2022-11-01 00:15:15

Benchmark (only OK)

croner          x 112,150 ops/sec ±0.72% (94 runs sampled)
node-schedule   x 2,690 ops/sec ±0.95% (92 runs sampled)
cronosjs        x 27,939 ops/sec ±1.13% (91 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * 10 SUN,MON,TUE'
```
Tests

croner          - OK    - 2022-10-31 21:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 21:15:15
cronosjs        - OK    - 2022-10-31 21:15:15
cron            - FAIL  - 2022-11-01 00:15:15

Benchmark (only OK)

croner          x 86,274 ops/sec ±0.72% (91 runs sampled)
node-schedule   x 2,048 ops/sec ±6.67% (73 runs sampled)
cronosjs        x 20,543 ops/sec ±3.06% (88 runs sampled)

Fastest is croner         
```

## Test summary

| Library | OK | FAIL | % OK |
| :---: | :--: | :---: | :-----: |
| croner | 8 | 0 | 100% |
| node-cron | 0 | 8 | 0% |
| node-schedule | 8 | 0 | 100% |
| cronosjs | 8 | 0 | 100% |
| cron | 2 | 6 | 25% |

