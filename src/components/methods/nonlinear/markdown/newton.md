If the initial guess at the root is $ x_{i} $, a tangent/straight line can be extended from the point $ (x_{i}, f(x_{i})) $. The point where this tangent crosses the x-axis represents an improved estimate of the root.

The **Newton-Raphson** method can be derived on the basis of this geometrical interpretation. The derivative at a point is:

$$
f^{'}(x_{i}) = \frac{f(x_{i+1}) - f(x_{i})}{x_{i+1} - x_{i}}
$$

Setting $ f(x_{i+1}) = 0 $, we obtain:

$$
f^{'}(x_{i}) = \frac{0 - f(x_{i})}{x_{i+1} - x_{i}}

\\ \tag{1} x_{i+1} = x_{i} - \frac{f(x_{i})}{f^{'}(x_{i})}

$$

**(1)** is called the Newton-Rhapson formula and starts from an initial value, $ x_{0} $.

***

Although the Newton-Raphson method is often very efficient, there are situations where
it performs poorly. Its convergence depends on the nature of the function and on the accuracy of the initial guess.
* If an inflection point ($ f^{''}(x) = 0 $) occurs near the root, the Newton-Raphson technique may oscillate around a local maximum or minimum.
* The worst case scenario is an extrema ($ f^{'}(x) = 0 $) which causes a division by zero because the solution shoots off horizontally and never hits the x axis.