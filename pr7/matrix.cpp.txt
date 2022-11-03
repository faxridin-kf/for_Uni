#include <iostream>
#include <ctime> // в ней функция time
#include "matrix.h"
 
using namespace std;
 
//конструкор
Matrix::Matrix() {
    srand(time(NULL)); // Инициализируем генератор случайных чисел.
    for (int i = 0; i < n; i++)
    {
        a[i] = new int[n]; // Создаем элементы
        //size = n;
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            a[i][j] = rand() % 10; // Каждый элемент случайному числу от 0 до 9
        }
    }
}
 
// конструктор копирования
Matrix::Matrix(const Matrix &X) {
    int **a = new int*[n]; // Создаем новый массив указателей
    for (int i = 0; i < n; i++) a[i] = new int[n];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j<n; j++)
            a[i][j] = X.a[i][j]; //Поэлементно копирую каждый элемент из принимаемого объекта в текущий
    }
}
 
//вывод матрицы
void Matrix::print()const {
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << a[i][j] << " "; // Вывести элементы на консоль
        }
        cout << endl; 
    }
    cout << endl;
}
 
//Перегрузка оператора разности матриц:
Matrix Matrix::operator - (const Matrix &B)const {
    Matrix tmp(*this);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            tmp.a[i][j] = a[i][j] - B.a[i][j];
    }
    return tmp;
}
 
//перегрузка оператора присваивания (это точно не правильно)
Matrix &Matrix::operator = (const Matrix &D)
{
    if (n != D.n) {
        n = D.n;
        delete[] a;
        int **a = new int*[n]; // Создаем новый массив указателей
        for (int i = 0; i < n; i++) a[i] = new int[n];
    }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j<n; j++)
                a[i][j] = D.a[i][j]; 
        }
    return *this;
}
 
//перегрузка унарного минуса
Matrix Matrix::operator - ()const {
    int **a2 = new int*[n];
    for (int i = 0; i<n; i++)
    {
        a2[i] = new int[n];
    }
    for (int i = 0; i < n; i++)
        for (int j = 0; j<n; j++)
            a2[i][j] = a[j][i];
    // return a2;
}
 
// Удаление массива
Matrix::~Matrix() {
    
    for (int i = 0; i < n; i++)
    {
        delete[]a[i]; // Удаляем каждый элемент
    }
    delete[] a; // А потом массив
}