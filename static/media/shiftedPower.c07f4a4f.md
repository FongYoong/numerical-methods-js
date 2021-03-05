The **shifted inverse-power method** approximates **any** eigenvector and eigenvalue of an $n \times n$ matrix $A$ based on a specified **shift constant**, $a$.

Starting from an initial guess $X_0$, the approximate dominant eigenvector is:

$$
X_{i+1} = (A-aI)^{-1} X_{i}

$$

As the iterations increases, the approximate eigenvector, $X_{i}$, converges to the actual dominant eigenvector of $(A-aI)^{-1}$.

***

After a substantial number of iterations, the eigenvector's values can be quite inconveniently large. To circumvent this, scaling can be used:

1. Compute $X_{i+1} = (A-aI)^{-1} X_{i}$
2. Set $X_{i+1} = \frac{1}{max(|X_{i+1}|)} X_{i+1}$

***

To approximate the eigenvalue, the [Rayleigh quotient](https://en.wikipedia.org/wiki/Rayleigh_quotient) is used:

$$
\lambda_{i} = \frac{(A-aI)^{-1} X_{i} \cdot X_{i}}{X_{i} \cdot X_{i}}

$$

The eigenvalue of $A$ closest to $a$ is $ \frac{1}{\lambda_{i}} + a $