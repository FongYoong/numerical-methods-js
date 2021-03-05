Given an $n \times n$ matrix A, **QR decomposition** decomposes/factorises A into two matrices:

$$
[A] = [Q][R]

$$

where $Q$ is an [orthogonal matrix](https://en.wikipedia.org/wiki/Orthogonal_matrix) whereas $R$ is an [upper triangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix). Essentially, the [Householder matrix](https://en.wikipedia.org/wiki/Householder_transformation#Householder_matrix), $H$ is first computed and will then be used to calculate $Q$ and $R$. The number of iterations is equal to $n-1$.

I will not delve into the details here because they are quite lengthy. Nevertheless, QR factorisation is useful for finding the eigenvalues of a matrix as [explained here](https://en.wikipedia.org/wiki/QR_algorithm).
