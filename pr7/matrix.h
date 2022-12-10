class Matrix {
    int n = 3;
    int i = 0;
    int j = 0;
    int **a = new int*[n]; // Создаем массив указателей
public:
    Matrix();
    ~Matrix();
    Matrix(const Matrix &);
    void print()const;
    Matrix operator - (const Matrix &)const; // разность матриц
    Matrix & operator = (const Matrix &); //оператор присваивания
    Matrix operator - ()const; // унарный минус
};