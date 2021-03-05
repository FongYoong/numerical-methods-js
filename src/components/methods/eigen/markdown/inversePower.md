The **inverse-power method** approximates the **smallest** eigenvalue of an $n \times n$ matrix $A$.

Starting from an initial guess $X_0$, the approximate dominant eigenvector of $A^{-1}$ is:

$$
X_{i+1} = A^{-1} X_{i}

$$

As the iterations increases, the approximate eigenvector, $X_{i}$, converges to the actual dominant eigenvector of $A^{-1}$.

***

After a substantial number of iterations, the eigenvector's values can be quite inconveniently large. To circumvent this, scaling can be used:

1. Compute $X_{i+1} = A^{-1} X_{i}$
2. Set $X_{i+1} = \frac{1}{max(|X_{i+1}|)} X_{i+1}$

***

To approximate the eigenvalue, the [Rayleigh quotient](https://en.wikipedia.org/wiki/Rayleigh_quotient) is used:

$$
\lambda_{i} = \frac{A^{-1} X_{i} \cdot X_{i}}{X_{i} \cdot X_{i}}

$$

Since $\lambda_{i}$ is the dominant eigenvalue of $A^{-1}$, the smallest eigenvalue of $A$ is $\frac{1}{\lambda_{i}}$