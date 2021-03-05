The **gradient method** or the **steepest ascent method** evaluates the steepest gradient direction at an initial point and moves to a new point along that direction. After a substantial number of iterations, the new points converge to an extrema.

***

Algorithm:
1. Compute $\nabla f$ at an initial point $X_{i}$

2. Let $X_{i+1} = X_{i} + t \cdot \nabla f$ where $t$ is an unknown parameter.

3. Substitute $X_{i+1}$ into $f$ to obtain $f(X_{i+1})$ which becomes a function of $t$.

4. Find the root of $ \frac{df(X_{i+1})}{dt} = 0 $. In my implementation, the **Newton-Rhapson** method is used to find the root, $t^*$.

5. Substitute the root, $t^*$, into $X_{i+1}$

6. Steps 1 to 5 are repeated until $X_{i+1}$ converges.

***

