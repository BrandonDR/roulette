# Roulette Strategy

**This is a Roulette thought experiment. Use at your own risk.**

You start with \$2560 (10*2^8 - or 8 doubles of 10)
Bet \$10 on black, red, odds or evens.
If you lose, you double your bet until you win again. A very common strategy.

Once you win on a bet of $160 or more, you cash in.
> This is the target threshold to avoid getting carried away, once you get to bets
> of \$160 you then have 4 games, or near 20% chance of loosing.

Let's say you attempt this once per year for 40 years, until say, retirement.
The script will tell you how much you could have made.

From my modeling there is 93% chance you'll win on average and from several tests it appears you may profit ~\$18000-30000 over these 40 years. Or \$450-750 per year.
There is off course going to be years you loose and some where you double your money.

Don't get carried away. Gamble responsibly or **not at all**.

## Usage

Bun:
```sh
bun ./index.ts
```

TSC and Node:
```sh
npm install && npx tsc && node ./dist/index.js
```

## Changing the parameters

You can change the parameters in the [index.ts](./index.ts) file and then run the script using [Usage](#usage) guide above.

## Example output

Here is an example output this resembles a likely scenario, at the 93% typical chance of winning a game:

```sh
Game 1: Lost! Balance: 1310 Rounds: 7
Game 2: Won! Balance: 2900 Rounds: 7
Game 3: Won! Balance: 2900 Rounds: 8
Game 4: Won! Balance: 3030 Rounds: 12
Game 5: Won! Balance: 3420 Rounds: 22
Game 6: Lost! Balance: 1530 Rounds: 13
Game 7: Won! Balance: 4520 Rounds: 21
Game 8: Won! Balance: 3180 Rounds: 13
Game 9: Won! Balance: 3140 Rounds: 10
Game 10: Won! Balance: 2970 Rounds: 8
Game 11: Won! Balance: 3320 Rounds: 15
Game 12: Won! Balance: 3410 Rounds: 20
Game 13: Won! Balance: 2930 Rounds: 5
Game 14: Won! Balance: 3560 Rounds: 14
Game 15: Won! Balance: 3640 Rounds: 23
Game 16: Lost! Balance: 1460 Rounds: 12
Game 17: Won! Balance: 3700 Rounds: 27
Game 18: Won! Balance: 3560 Rounds: 26
Game 19: Won! Balance: 3320 Rounds: 15
Game 20: Won! Balance: 4310 Rounds: 33
Game 21: Won! Balance: 2800 Rounds: 6
Game 22: Won! Balance: 3970 Rounds: 30
Game 23: Won! Balance: 3100 Rounds: 16
Game 24: Won! Balance: 3710 Rounds: 28
Game 25: Won! Balance: 4330 Rounds: 22
Game 26: Won! Balance: 2730 Rounds: 4
Game 27: Won! Balance: 2840 Rounds: 6
Game 28: Won! Balance: 2860 Rounds: 7
Game 29: Won! Balance: 3020 Rounds: 9
Game 30: Won! Balance: 4260 Rounds: 44
Game 31: Won! Balance: 2900 Rounds: 8
Game 32: Won! Balance: 2860 Rounds: 7
Game 33: Won! Balance: 3150 Rounds: 15
Game 34: Won! Balance: 2960 Rounds: 6
Game 35: Won! Balance: 3220 Rounds: 14
Game 36: Won! Balance: 3080 Rounds: 7
Game 37: Won! Balance: 3610 Rounds: 15
Game 38: Won! Balance: 2780 Rounds: 6
Game 39: Won! Balance: 3480 Rounds: 23
Game 40: Won! Balance: 3330 Rounds: 15
Won 37 out of 40 games. (92.5%)
Net profit: 24700 (617.5 per game)
```

<details>
<summary>Unlucky scenario</summary>

```sh
Game 1: Won! Balance: 2950 Rounds: 5
Game 2: Won! Balance: 2800 Rounds: 6
Game 3: Won! Balance: 3210 Rounds: 6
Game 4: Won! Balance: 2980 Rounds: 10
Game 5: Won! Balance: 3040 Rounds: 8
Game 6: Lost! Balance: 1360 Rounds: 9
Game 7: Won! Balance: 2840 Rounds: 5
Game 8: Won! Balance: 3440 Rounds: 19
Game 9: Won! Balance: 4930 Rounds: 33
Game 10: Won! Balance: 4540 Rounds: 46
Game 11: Won! Balance: 2790 Rounds: 6
Game 12: Won! Balance: 3060 Rounds: 8
Game 13: Won! Balance: 2920 Rounds: 6
Game 14: Won! Balance: 3220 Rounds: 14
Game 15: Won! Balance: 2890 Rounds: 9
Game 16: Won! Balance: 4040 Rounds: 11
Game 17: Won! Balance: 2870 Rounds: 8
Game 18: Won! Balance: 3010 Rounds: 8
Game 19: Won! Balance: 3210 Rounds: 11
Game 20: Won! Balance: 2790 Rounds: 4
Game 21: Won! Balance: 2990 Rounds: 8
Game 22: Won! Balance: 3030 Rounds: 8
Game 23: Lost! Balance: 1310 Rounds: 7
Game 24: Lost! Balance: 1330 Rounds: 7
Game 25: Won! Balance: 2750 Rounds: 4
Game 26: Won! Balance: 3170 Rounds: 16
Game 27: Won! Balance: 3090 Rounds: 16
Game 28: Lost! Balance: 1370 Rounds: 9
Game 29: Won! Balance: 3200 Rounds: 16
Game 30: Won! Balance: 2860 Rounds: 7
Game 31: Won! Balance: 4050 Rounds: 33
Game 32: Won! Balance: 4370 Rounds: 38
Game 33: Won! Balance: 3070 Rounds: 10
Game 34: Lost! Balance: 1470 Rounds: 40
Game 35: Won! Balance: 4430 Rounds: 22
Game 36: Won! Balance: 2750 Rounds: 4
Game 37: Won! Balance: 2890 Rounds: 5
Game 38: Won! Balance: 2950 Rounds: 10
Game 39: Won! Balance: 2780 Rounds: 5
Game 40: Won! Balance: 2780 Rounds: 5
Won 35 out of 40 games. (87.5%)
Net profit: 17130 (428.25 per game
```
</details>


<details>
<summary>Lucky scenario</summary>

```sh
Game 0: Won! Balance: 3140 Rounds: 10
Game 1: Won! Balance: 4300 Rounds: 43
Game 2: Won! Balance: 4220 Rounds: 43
Game 3: Won! Balance: 3460 Rounds: 23
Game 4: Won! Balance: 3580 Rounds: 18
Game 5: Won! Balance: 4040 Rounds: 36
Game 6: Won! Balance: 3240 Rounds: 7
Game 7: Won! Balance: 2980 Rounds: 11
Game 8: Won! Balance: 3450 Rounds: 20
Game 9: Won! Balance: 3540 Rounds: 27
Game 10: Won! Balance: 2960 Rounds: 9
Game 11: Won! Balance: 4590 Rounds: 43
Game 12: Won! Balance: 3400 Rounds: 18
Game 13: Won! Balance: 2750 Rounds: 4
Game 14: Won! Balance: 3400 Rounds: 19
Game 15: Won! Balance: 3680 Rounds: 29
Game 16: Won! Balance: 3430 Rounds: 19
Game 17: Won! Balance: 3330 Rounds: 16
Game 18: Won! Balance: 3320 Rounds: 21
Game 19: Won! Balance: 2940 Rounds: 6
Game 20: Won! Balance: 3320 Rounds: 20
Game 21: Won! Balance: 2770 Rounds: 4
Game 22: Lost! Balance: 1360 Rounds: 8
Game 23: Won! Balance: 3440 Rounds: 23
Game 24: Won! Balance: 3210 Rounds: 15
Game 25: Won! Balance: 3320 Rounds: 16
Game 26: Won! Balance: 2850 Rounds: 8
Game 27: Won! Balance: 3400 Rounds: 19
Game 28: Won! Balance: 3510 Rounds: 23
Game 29: Lost! Balance: 1290 Rounds: 7
Game 30: Won! Balance: 4260 Rounds: 40
Game 31: Won! Balance: 2970 Rounds: 9
Game 32: Won! Balance: 3410 Rounds: 24
Game 33: Won! Balance: 3290 Rounds: 18
Game 34: Won! Balance: 2780 Rounds: 5
Game 35: Won! Balance: 3060 Rounds: 12
Game 36: Won! Balance: 3750 Rounds: 17
Game 37: Won! Balance: 3350 Rounds: 11
Game 38: Won! Balance: 2870 Rounds: 9
Game 39: Won! Balance: 2730 Rounds: 4
Won 38 out of 40 games. (95%)
Net profit: 28290 (707.25 per game)
```

> Interestingly, you can still lose some years and still make a higher profit than a scenario where you win every year.
</details>
