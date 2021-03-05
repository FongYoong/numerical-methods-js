It is often easy or straightforward to find the inverses of square matrices $n \times n$ where the number of rows is equal to the number of columns.

But what about **non-square matrices** $m \times n$ where $m \ne n$? Do they have inverses?

The answer is, wait for it... **yes**, but only if the definition of a matrix inverse is generalised further.

The typical assumption made about inverses is that they are [commutative](https://en.wikipedia.org/wiki/Commutative_property), meaning that:

$$
AA^{-1} = A^{-1}A = I

$$

In other words, it does not matter whether we multiply the inverse on the left or right, the answer should always be the [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix).

However, this does not apply for non-square matrices. Their inverses are called [Moore–Penrose inverses](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse) or **pseudoinverses** and there are two types:
1. **Left** pseudoinverse where:
    $$
    A^{-1}A = I
    \\ AA^{-1} \ne I
    $$

2. **Right** pseudoinverse where:
    $$
    AA^{-1} = I
    \\ A^{-1}A \ne I
    $$

In other words, pseudoinverse are **not** [commutative](https://en.wikipedia.org/wiki/Commutative_property).

When $ m > n $, the matrix has a **left** pseudoinverse.

When $ m < n $, the matrix has a **right** pseudoinverse.

I first learnt about pseudoinverses in Ian GoodFellow's [Deep Learning](https://www.deeplearningbook.org/) book [**Chapter 2.9**](https://www.deeplearningbook.org/contents/linear_algebra.html#pff).

***

One direct way to obtain pseudoinverses is to use [Singular Value decomposition (SVD)](https://en.wikipedia.org/wiki/Singular_value_decomposition).

Given a $m \times n$ matrix A, **SVD** decomposes/factorises A into three matrices:

$$
[A_{m \times n}] = [U_{m \times m}][D_{m \times n}][V^{T}_{n \times n}]

$$

where $U_{m \times m}$ and $V_{n \times n}$ are [orthogonal matrices](https://en.wikipedia.org/wiki/Orthogonal_matrix),  whereas $D_{m \times n}$ is a non-square [diagonal matrix](https://en.wikipedia.org/wiki/Diagonal_matrix).

From the above, the pseudoinverse is:

$$
[A^{-1}_{n \times m}] = [V_{n \times n}][D^{+}_{n \times m}][U^{T}_{m \times m}]

$$

$D^{+}_{n \times m}$ is the transpose of $D_{m \times n}$ and its diagonal values are the reciprocal of the singular values respectively.

***

Useful resources:
* [Math StackExchange 1](https://math.stackexchange.com/questions/19948/pseudoinverse-matrix-and-svd)
* [Math StackExchange 2](https://math.stackexchange.com/questions/75789/what-is-step-by-step-logic-of-pinv-pseudoinverse)
* [Matlab's pinv](https://www.mathworks.com/help/matlab/ref/pinv.html)