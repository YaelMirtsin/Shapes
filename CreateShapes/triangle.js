function draw_triangle(shape_content_menu, size_side_length) {
    var triangle = new Array(size_side_length);
    for (var i = 0; i < triangle.length; i++) {
        triangle[i] = new Array(size_side_length);
    }
    switch (shape_content_menu) {
        case 1:
            triangle_draw_stars(triangle);
            break;
        case 2:
            triangle_draw_border_stars(triangle);
            break;
        case 3:
            triangle_draw_increase_by_1(triangle);
            break;
        case 4:
            triangle_draw_reduce_by_1(triangle);
            break;
        default:
            error_shape_content();
            return;
    }
    printTriangle(triangle);
    triangle_perimeter(size_side_length);
    triangle_area(size_side_length);
}
function triangle_draw_stars(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j <= i; j++) {
            matrix[i][j] = "*";
        }
    }
}
function triangle_draw_increase_by_1(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j <= i; j++) {
            matrix[i][j] = (j + 1).toString();
        }
    }
}
function triangle_draw_reduce_by_1(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j <= i; j++) {
            matrix[i][j] = (matrix[i].length - j).toString();
        }
    }
}
function triangle_draw_border_stars(matrix) {
    var count = 1;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j <= i; j++) {
            if ((j == 0) || (j == i) || (i == matrix.length - 1)) {
                matrix[i][j] = "*" + "&nbsp";
            }
            else
                matrix[i][j] = " " + "&nbsp&nbsp";
        }
    }
}
function printTriangle(triangle) {
    for (var i = 0; i < triangle.length; i++) {
        for (var j = 0; j <= i; j++) {
            document.writeln(triangle[i][j].toString());
        }
        document.write("<br/>");
    }
}
function triangle_perimeter(length_size) {
    var third_side_length = calc_third_side_of_triangle(length_size);
    var perimeter = Math.floor(length_size + length_size + third_side_length);
    document.write("<br/>" + "Triangle Perimeter: " + perimeter);
}
function triangle_area(length_size) {
    var area_tringle = 0;
    area_tringle = (length_size * length_size) / 2;
    document.write("<br/>" + "Triangle Area: " + area_tringle);
}
function calc_third_side_of_triangle(length_size) {
    var third_size_length = 0;
    third_size_length = Math.sqrt(length_size * length_size + length_size * length_size);
    return third_size_length;
}
//# sourceMappingURL=triangle.js.map