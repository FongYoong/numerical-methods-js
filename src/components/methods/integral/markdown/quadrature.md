**Gauss quadrature** approximates definite integrals by:
1. Transforming from variable x to t with the following relation:
    $$
    \begin{array}{lcl}
       x &=& \frac{1}{2} [t (x_{upper} - x_{lower}) + x_{lower} + x_{upper}]
    \\
    \\ dx &=& \frac{1}{2} (x_{upper} - x_{lower}) dt
    \end{array}
    $$

2. The "uniqueness" of Gauss quadrature is that the resulting integral after transformation can be solved with a weighted addition of the values of $f(x)$ at different points called Gauss points. These points are not equally spaced and the weights are determined such that the error is minimised. The weights and Gauss points can be calculated in advance and can be stored in a table so a relatively good result can be obtained with minimal calculations.

3. Letting $n$ be the number of Gauss points, the definite integral is:

    $$
    I = \sum^{n}_{i=1} C_{i} f(t_{i})

    $$
    where $C_{i}$ is the weight and $t_{i}$ is the Gauss point.

***
Resources
* [Wikipedia](https://en.wikipedia.org/wiki/Gaussian_quadrature)

* A good introduction to Gauss points can be found [here](https://www.comsol.com/blogs/introduction-to-numerical-integration-and-gauss-points/).