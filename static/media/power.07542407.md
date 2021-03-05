The **power method** approximates the **dominant** eigenvector and eigenvalue of an $n \times n$ matrix $A$.

Starting from an initial guess $X_0$, the approximate dominant eigenvector is:

$$
X_{i+1} = A X_{i}

$$

As the iterations increases, the approximate eigenvector, $X_{i}$, converges to the actual dominant eigenvector. 

***

After a substantial number of iterations, the eigenvector's values can be quite inconveniently large. To circumvent this, scaling can be used:

1. Compute $X_{i+1} = A X_{i}$
2. Set $X_{i+1} = \frac{1}{max(|X_{i+1}|)} X_{i+1}$

***

To approximate the dominant eigenvalue, the [Rayleigh quotient](https://en.wikipedia.org/wiki/Rayleigh_quotient) is used:

$$
\lambda_{i} = \frac{A X_{i} \cdot X_{i}}{X_{i} \cdot X_{i}}

$$