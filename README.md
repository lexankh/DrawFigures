# DrawFigures

## Ссылка на рабочую версию проекта: [https://lexankh.github.io/DrawFigures](https://lexankh.github.io/DrawFigures)

## О проекте

Данный проект позволяет отрисовать некоторые геометрические фигуры по их текстовому описанию. На данный момент поддерживаются: прямоугольник(rectangle), линия(line), треугольник(triangle), круг(circle) и эллипс(ellipse)

## Руководство пользователя

Для того, чтобы отрисовать фигуру, необходимо ввести ее текстовое описание в поле ввода в следующем формате: figureName –p [x,y]... options
где figureName - имя фигуры,
–p [x, y]... - координаты основных точек фигуры,
options - дополнительные параметры и опции фигуры

### Дополнительные параметры
Для отрисовки линии и квадрата необходимы координаты двух точек в формате: `[x,y] [z,a]`    
Для отрисовки треугольника необходимо три координаты в формате: `[b,c] [d,e] [f,g]`    
Для отрисовки круга необходима координата центра и радиус: `[x,y] -r z`    
Для отрисовки эллипса необходима координата центра и внутреннего и внешнего радиусов: `[x,y] -r1 z -r2 a`    
Цвет линии в любом формате, доступном в CSS: `-c rgb(255,0,0)`    
Заливка фигуры цветом: ` -b rgba(255, 0, 0, 0.3)`    





