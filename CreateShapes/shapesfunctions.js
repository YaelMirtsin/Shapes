// There are common functions to draw shapes
function draw_stars(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = "*" + "&nbsp";
        }
    }
}
function draw_border_stars(matrix) {
    var count = 1;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if ((j == 0) || (j == matrix[i].length - 2) || (i == 0) || (i == matrix.length - 1)) {
                matrix[i][j] = "*" + "&nbsp";
            }
            else
                matrix[i][j] = " " + "&nbsp&nbsp";
        }
    }
}
function draw_reduce_by_1(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = (matrix[i].length - j).toString();
        }
    }
}
function draw_increase_by_1(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            //document.write("i=" + i + "j = " + j + "<br/>");
            matrix[i][j] = (j + 1).toString();
        }
    }
}
function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            document.writeln(matrix[i][j].toString());
        }
        document.write("<br/>");
    }
}
function error_menu_message() {
    alert("Error. Please select 1 or 2 or 3, for the shape type\nPLEASE TRY AGAIN!!!");
}
function is_error_size_of_shape(size_of_shape, maxLength) {
    if (size_of_shape < maxLength && size_of_shape > 0) {
        return false;
    }
    else {
        alert("Error: Enter  positive integer number and less then 20. \n TRY AGAIN!");
        return true;
    }
}
function error_shape_content() {
    alert("Error.Please select 1 or 2 or 3 or 4, for the shape content.");
}
function printMainMenu() {
    var str = "";
    str = "Welcom to the best shape simulation ever in the entire world!" + "\n"
        + "Please select desired shape:" + "\n"
        + "1) Square" + "\n"
        + "2) Rectangle" + "\n"
        + "3) Triangle" + "\n";
    return str;
}
function printShapeContentMenu() {
    var str = "";
    str = "Please enter shape content!" + "\n" +
        "1) *********" + "\n" +
        "2) *         *" + "\n" +
        "3) 12345" + "\n" +
        "4) 54321" + "\n";
    return str;
}
// There are functions to calculate perimeter and area of the SQUARE
function square_perimeter(square_length) {
    var val_perimeter = 4 * square_length;
    document.write("<br/>" + "Square Perimeter: " + val_perimeter);
}
function square_area(square_length) {
    var val_square_area = square_length * square_length;
    document.write("<br/>" + "Square Area: " + val_square_area);
}
// There are functions to calculate perimeter and area of the Rectangle
function perimeter_rectangle(rectangle_length, rectangle_width) {
    var val_perimeter = 2 * (rectangle_length + rectangle_width);
    document.write("<br/>" + "Rectangle Perimeter: " + val_perimeter);
}
function area_rectangle(rectangle_length, rectangle_width) {
    var val_area = rectangle_length * rectangle_width;
    document.write("<br/>" + "Rectangle Perimeter: " + val_area);
}
//# sourceMappingURL=shapesfunctions.js.map