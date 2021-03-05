A potential problem in implementing the Newton-Raphson method is the evaluation of the derivative. Although this is not inconvenient for polynomials and many other functions, there are certain functions whose derivatives may be extremely difficult or inconvenient to evaluate. For these cases, the derivative can be approximated by a forward difference:

$$
\tag{1} f^{'}(x_{i}) = \frac{f(x_{i+1}) - f(x_{i})}{x_{i+1} - x_{i}}

$$

Rather than using two x values, the **modified secant** method introduces a small perturbation fraction, $ \delta $, such that **(1)** becomes:

$$
\tag{2} f^{'}(x_{i}) = \frac{f(x_{i} + \delta x_{i}) - f(x_{i})}{\delta x_{i}}

$$

Substituting **(2)** into the Newton-Rhapson formula,

$$
\tag{3} x_{i+1} = x_{i} - \frac{\delta x_{i} f(x_{i})}{f(x_{i} + \delta x_{i}) - f(x_{i})}

$$

***

The choice of a proper value for $ \delta $ is not automatic. If $ \delta $ is too small, the method becomes vulnerable to round-off errors caused by subtractive cancellation in the denominator of **(3)**. If it is too big, the technique can become inefficient and even divergent. However, if chosen correctly, it provides a nice alternative for cases where evaluating the derivative is difficult and developing two initial guesses is inconvenient.