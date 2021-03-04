The **bisection** method is a bracketing method for finding a numerical
solution of an equation of the form $ f(x) = 0 $ within a given interval $ [x_{lower}, x_{upper}] $ .

***

Algorithm:
1. Choose the first interval by finding points $ x_{lower} $ and $ x_{upper} $ such that a solu­tion exists between them. This means that $ f(x_{lower}) $ and $ f(x_{upper}) $ have dif­ferent signs such that $ f(x_{lower}) f(x_{upper}) < 0 $.

2. Calculate the first estimate of the numerical solution: $$ x_{root} = \frac{a+b}{2} $$

3. Determine whether the true solution is between $ x_{lower} $ and $ x_{root} $, or between $ x_{root} $ and $ x_{upper} $. This is done by checking the sign of the prod­uct $ f(x_{lower}) \cdot f(x_{root}) $ :
    * If $ f(x_{lower}) \cdot f(x_{root}) < 0 $, the true solution is between $ x_{lower} $ and $ x_{root} $

    * If $ f(x_{lower}) \cdot f(x_{root}) > 0 $, the true solution is between $ x_{root} $ and $ x_{upper} $

4. Select a new subinterval that contains the true solution, either $ [x_{lower}, x_{root}] $ or $ [x_{root}, x_{upper}] $.

5. Steps 1 to 4 are repeated until a specified tolerance or error bound is attained.

