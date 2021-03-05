Given a $m \times n$ matrix A, **Singular Value decomposition (SVD)** decomposes/factorises A into three matrices:

$$
[A_{m \times n}] = [U_{m \times m}][D_{m \times n}][V^{T}_{n \times n}]

$$

where $U_{m \times m}$ and $V_{n \times n}$ are [orthogonal matrices](https://en.wikipedia.org/wiki/Orthogonal_matrix),  whereas $D_{m \times n}$ is a non-square [diagonal matrix](https://en.wikipedia.org/wiki/Diagonal_matrix).

The columns of $U_{m \times m}$ are the eigenvectors of $ AA^{T} $.

The columns of $V_{n \times n}$ are the eigenvectors of $ A^{T}A $.

The singular values are the square roots of the eigenvalues of $ A^{T}A $.

The diagonal values of $D_{m \times n}$ are the singular values ordered left-to-right from highest-to-lowest.

***
The SVD algorithm is an essential tool prevalent in many areas of science.

I first learnt about it in Ian GoodFellow's [Deep Learning](https://www.deeplearningbook.org/) book [**Chapter 2.9**](https://www.deeplearningbook.org/contents/linear_algebra.html#pff).

However, I will not explain further here because it is a large topic with plenty of applications so resources are easy to find.

***

Useful resources:
* [An awesome YouTube playlist by Steve Brunton](https://www.youtube.com/playlist?list=PLMrJAkhIeNNSVjnsviglFoY2nXildDCcv)
* [Great lecture notes](https://www.math.nyu.edu/faculty/goodman/teaching/RPME/notes/Section3.pdf)
* [Statsbot](https://blog.statsbot.co/singular-value-decomposition-tutorial-52c695315254)
* [Python tutorial](http://ethen8181.github.io/machine-learning/dim_reduct/svd.html)
* [TowardsDataScience](https://towardsdatascience.com/simple-svd-algorithms-13291ad2eef2)