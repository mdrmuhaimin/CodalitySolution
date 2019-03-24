# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(X, A):
    # write your code in Python 3.6
    fallen_leaf_count = [0] * X
    total_leaf = 0
    for i in range (0, len(A)):
        if fallen_leaf_count[A[i] - 1] == 0:
            total_leaf += 1
        fallen_leaf_count[A[i] - 1] = 1
        if total_leaf == X:
            return i
    return -1
