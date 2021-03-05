**Monte Carlo integration** generates random points to approximate definite integrals. 

In my implementation, my algorithm determines the highest and lowest $f(x)$ values for the interval, $ x_{lower} < x < x_{upper} $ . Let us call those values, $y_{min}$ and ${y_{max}}$ respectively.

Hence, we can bound $f(x)$ with a rectangle of width $ (x_{upper} - x_{lower}) $ and the height $ (y_{max} -  y_{min}) $. The rectangle's area, $A_{rect}$, is then width multiplied by height.

If we divide the definite integral or area of $f(x)$ by $A_{rect}$, we can compare it to the randomly generated points:

$$
\begin{array}{lcl}
\frac{ A_{f(x)} } {A_{rect}} &=& \frac{\text{Number of points inside } A_{f(x)}} {\text{Total points}}
\\
\\                 A_{f(x)}  &=& \frac{\text{Number of points inside } A_{f(x)}} {\text{Total points}} A_{rect}
\end{array}
$$

***

An excellent introduction can be found [here](https://towardsdatascience.com/the-basics-of-monte-carlo-integration-5fe16b40482d)