The **golden-section search** uses a similar approach to the bisection method to find the value of $x$ that yields an extremum, either a maximum or minimum of $f(x)$.

***

Algorithm:
1. Choose the first interval, $ x_{lower} $ and $ x_{upper} $.

2. Calculate $ d = GoldenRatio \cdot (x_{upper} - x_{lower}) $ 

3. Calculate $ x_a = x_{upper} - d $ and $ x_b = x_{lower} + d $

4. Checking both $ f(x_{a}) $ and $ f(x_{b}) $ :
    * If $ f(x_{a}) < f(x_{b}) $, the true solution is between $ x_{a} $ and $ x_{upper} $

    * If $ f(x_{a}) > f(x_{b}) $, the true solution is between $ x_{lower} $ and $ x_{b} $

    * If $ f(x_{a}) = f(x_{b}) $, the true solution is between $ x_{a} $ and $ x_{b} $

4. From the above, select a new subinterval that contains the true solution, either $ [x_{a}, x_{upper}] $ or $ [x_{lower}, x_{b}] $ or $ [x_{a}, x_{b}] $ .

5. Steps 1 to 5 are repeated until the subinterval length is lower than a specified error threshold.

***

More info can be consulted from [here](https://en.wikipedia.org/wiki/Golden-section_search).