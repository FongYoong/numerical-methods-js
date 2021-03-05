Instead of using the long-ass and hard-to-keep-track [Cayley-Hamilton method](https://en.wikipedia.org/wiki/Invertible_matrix#Cayley%E2%80%93Hamilton_method) to find the inverse of a square matrix, we can use [LU decomposition](https://learn.lboro.ac.uk/archive/olmp/olmp_resources/pages/workbooks_1_50_jan2008/Workbook30/30_3_lu_decmp.pdf) instead.

LU decomposition factorises the original matrix $A$ into $ [A] = [L][U] $.
Hence,

$$
\begin{array}{rcl}
AA^{-1} = I
\\ (LU)A^{-1} = I
\\ L(UA^{-1}) = I
\\ Ld = I
\end{array}
$$
where $d = UA^{-1}$

Given that $L$ is a [lower unitriangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix#Unitriangular_matrix), we can easily **solve for $d$** using [backsubstitution](https://www.mathwords.com/b/back_substitution.htm).

Since $UA^{-1}=d$, we can then **solve for $A^{-1}$** using [backsubstitution](https://www.mathwords.com/b/back_substitution.htm) again because $U$ is an [upper triangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix).

***

This illustrates the usefulness of LU decomposition in inverting matrices. Examples can be found [here](https://www.cl.cam.ac.uk/teaching/1314/NumMethods/supporting/mcmaster-kiruba-ludecomp.pdf).