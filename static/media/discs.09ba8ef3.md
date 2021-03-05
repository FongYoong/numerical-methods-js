Given an $n \times n$ matrix $A$, **Gershgorin’s Theorem** states that:

$$
|\lambda - a_{ii}| \le |a_{i1}| + \dots + |a_{i, i-1}| + |a_{i, i+1}| + \dots + |a_{in}|

$$

To summarise the theorem, the eigenvalues of A lie in any one of the discs. It is impossible for an eigenvalue to be outside all the discs. For example, if there are 3 discs, it is possible that all three eigenvalues are inside one of the disc and not in the other two discs.

There are more subtle details in the theorem, so [this paper](http://buzzard.ups.edu/courses/2007spring/projects/brakkenthal-paper.pdf) covers a lot of ground.