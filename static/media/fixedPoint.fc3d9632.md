The **fixed-point** method finds a numerical
solution of an equation of the form $ f(x) = 0 $ by rearranging the equation such that x is on the left-hand side:

$$
\begin{array}{lcl}
   x &=& g(x)
\\ x_{i+1} &=& g(x_{i})
\end{array}
$$

The method starts from an initial value, $ x_{0} $. It can be proven that convergence is quite likely when $ g^{'}(x) < |1| $ .