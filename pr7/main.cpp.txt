#include <iostream>
#include <ctime> // в ней функция time
#include "matrix.h"
using namespace std;
int main() {
    Matrix A;
    Matrix B;
    A.print();
    B.print();
    
    Matrix C;
    cout << "Matrix C=A-B:\n";
    C = A - B; //разность матриц
    C.print();
    Matrix D;
    D = B; //операция присваивания
    D.print();
    (-A).print(); //унарный минус
    cin.get();
    return 0;
}