Given an $n \times n$ matrix $A$, **LU decomposition** decomposes/factorises $A$ into two matrices:

$$
\begin{array}{rcl}
[A] &=& [L][U]
\\ &=&
\left[\begin{matrix}
   1 & 0 & \dots & 0   \cr
   f_{21} & 1 & \dots & 0   \cr
   \vdots & \ddots & 1 & 0   \cr
   f_{n1} & f_{n2} & \dots & 1 \cr
\end{matrix}\right]

\left[\begin{matrix}
   a^{'}_{11} & a^{'}_{12} & \dots & a^{'}_{1n}   \cr
   0 & a^{'}_{22} & \dots & a^{'}_{2n}   \cr
   \vdots & \ddots & a^{'}_{\dots} & 0   \cr
   0 & 0 & \dots & a^{'}_{nn} \cr
\end{matrix}\right]


\end{array}
$$

$U$ is an [upper triangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix) which is obtained from performing Gaussian elimination on A and reducing A to a [row-echelon form](https://en.wikipedia.org/wiki/Row_echelon_form).

$L$ is a [lower unitriangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix#Unitriangular_matrix) with diagonal values of 1. The $f_{ij}$ values below the diagonal are actually the pivot factors used in the Gaussian elimination.

***
LU decomposition offers a quick algorithmic approach to finding matrix inverses and also solving systems of linear equations. A good resource can be found [here](https://learn.lboro.ac.uk/archive/olmp/olmp_resources/pages/workbooks_1_50_jan2008/Workbook30/30_3_lu_decmp.pdf).