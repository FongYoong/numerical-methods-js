**Gaussian elimination** aims to simplify a general set of $m$ linear equations with $n$ variables:

$$
\begin{array}{lcl}
   a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \dots a_{1n}x_n &=& b_{1}
\\ a_{21}x_1 + a_{22}x_2 + a_{23}x_3 \dots a_{2n}x_n &=& b_{2}
\\ \vdots
\\ a_{m1}x_1 + a_{m2}x_2 + a_{m3}x_3 \dots a_{mn}x_n &=& b_{m}
\end{array}
$$

The first step of the elimination is to identify the pivot equation. This starts from the first equation and proceeds to the ($m-1$)th equation (second last). For example, the first pivot is:

$$
   \tag{Pivot} \bf{a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \dots a_{1n}x_n} = b_{1}
$$
$$
\begin{array}{lcl}
\\ a_{21}x_1 + a_{22}x_2 + a_{23}x_3 \dots a_{2n}x_n &=& b_{2}
\\ \vdots
\\ a_{m1}x_1 + a_{m2}x_2 + a_{m3}x_3 \dots a_{mn}x_n &=& b_{m}
\end{array}
$$

Next, each equation, $k$, except the pivot equation, is multiplied by a corresponding factor, $ \frac{a_{PivotPivot}}{a_{kPivot}} $ and subtracting them by the pivot equation. For the first pivot:

Multiply $ \frac{a_{PivotPivot}}{a_{kPivot}} $:

$$
\begin{array}{rcl}
   a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \dots a_{1n}x_n &=& b_{1}
\\ \frac{a_{11}}{a_{21}} a_{21}x_1 + \frac{a_{11}}{a_{21}} a_{22}x_2 + \frac{a_{11}}{a_{21}} a_{23}x_3 \dots \frac{a_{11}}{a_{21}} a_{2n}x_n &=& \frac{a_{11}}{a_{21}} b_{2}
\\ \vdots
\\ \frac{a_{11}}{a_{m1}} a_{m1}x_1 + \frac{a_{11}}{a_{m1}} a_{m2}x_2 + \frac{a_{11}}{a_{m1}} a_{m3}x_3 \dots \frac{a_{11}}{a_{m1}} a_{mn}x_n &=& \frac{a_{11}}{a_{m1}} b_{m}
\end{array}
$$

which results in:

$$
\begin{array}{rcl}
   a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \dots a_{1n}x_n &=& b_{1}
\\ a_{11}x_1 + \frac{a_{11}}{a_{21}} a_{22}x_2 + \frac{a_{11}}{a_{21}} a_{23}x_3 \dots \frac{a_{11}}{a_{21}} a_{2n}x_n &=& \frac{a_{11}}{a_{21}} b_{2}
\\ \vdots
\\ a_{11}x_1 + \frac{a_{11}}{a_{m1}} a_{m2}x_2 + \frac{a_{11}}{a_{m1}} a_{m3}x_3 \dots \frac{a_{11}}{a_{m1}} a_{mn}x_n &=& \frac{a_{11}}{a_{m1}} b_{m}
\end{array}
$$

***

Subtract from pivot equation which results in:

$$
\begin{array}{rcl}
   a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \dots a_{1n}x_n &=& b_{1}
\\ (\frac{a_{11}}{a_{21}} a_{22} - a_{12}) x_2 + (\frac{a_{11}}{a_{21}} a_{23} - a_{13}) x_3 \dots (\frac{a_{11}}{a_{21}} a_{2n} - a_{1n}) x_n &=& \frac{a_{11}}{a_{21}} b_{2} - b_{1}
\\ \vdots
\\ (\frac{a_{11}}{a_{m1}} a_{m2} - a_{12}) x_2 + (\frac{a_{11}}{a_{m1}} a_{m3} - a_{13}) x_3 \dots (\frac{a_{11}}{a_{m1}} a_{mn} - a_{1n}) x_n &=& \frac{a_{11}}{a_{m1}} b_{m} - b_{1}
\end{array}
$$

or:

$$
\begin{array}{rcl}
\tag{1} a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \dots a_{1n}x_n &=& b_{1}
\\ a^{'}_{22} x_2 + a^{'}_{23} x_3 \dots a^{'}_{2n} x_n &=& b^{'}_{2}
\\ \vdots
\\ a^{'}_{m2} x_2 + a^{'}_{m3} x_3 \dots a^{'}_{mn} x_n &=& b^{'}_{m}
\end{array}
$$

***
From the equations in **(1)**, it is obvious that the $x_1$ of the non-pivot equations have been eliminated. If the process is repeated for all the possible pivot equations, we should obtain something similar to:

$$
\begin{array}{rcl}
   a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \dots a_{1n}x_n &=& b_{1}
\\             a^{'}_{22}x_2 + a^{'}_{23}x_3 \dots a^{'}_{2n}x_n &=& b^{'}_{2}
\\                         a^{''}_{33}x_3 \dots a^{''}_{3n}x_n &=& b^{''}_{3}
\\ \vdots
\\                                         a^{'''}_{mn}x_n &=& b^{'''}_{m}
\end{array}
$$

***

The representation can be simplified with an augmented matrix. This is used to show the steps in my implemntation:

$$
\left[\begin{matrix}
   a_{11} & a_{12}      & a_{13}      & \dots & a_{1n}      \cr
          & a^{'}_{22}  & a^{'}_{23}  & \dots & a^{'}_{2n}  \cr
          &             & a^{''}_{33} & \dots & a^{''}_{3n} \cr
          &             &             & \dots & \vdots      \cr
          &             &             &       & a^{'''}_{mn} \cr 
\end{matrix}\right|
\left|\begin{matrix}
   b_{1}         \cr
   b^{'}_{2}     \cr
   b^{''}_{3}    \cr
   \vdots        \cr
   b^{'''}_{m}   \cr
\end{matrix}\right]
$$

***

One issue faced by the steps described above is **division by zero** when the pivot value $a_{kPivot}$ is zero. To avoid this, my implementation does not carry out the multiplying factor step when the pivot is zero.

To produce a more robust result, I've also implemented [partial pivoting](https://people.richland.edu/james/lecture/m116/matrices/pivot.html) whereby rows are interchanged to move zero pivots further down. For example:
$$
\tag{Row1 ↔ Row2}
\left[\begin{matrix}
   0 & 1 & -3 & 4   \cr
   2 & 7 & -2 & 6   \cr
   -1 & 5 & -9 & 8  \cr
\end{matrix}\right]
$$

becomes:

$$
\left[\begin{matrix}
   2 & 7 & -2 & 6   \cr
   0 & 1 & -3 & 4   \cr
   -1 & 5 & -9 & 8  \cr
\end{matrix}\right]
$$

and further becomes:

$$
\tag{Row2 ↔ Row3}
\left[\begin{matrix}
   2 & 7 & -2 & 6   \cr
   -1 & 5 & -9 & 8   \cr
   0 & 1 & -3 & 4  \cr
\end{matrix}\right]
$$