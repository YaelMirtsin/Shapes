function draw_square(shape_content_menu, square_length) {
    var square = new Array(square_length);
    for (var i = 0; i < square.length; i++) {
        square[i] = new Array(square_length);
    }
    switch (shape_content_menu) {
        case 1:
            draw_stars(square);
            break;
        case 2:
            draw_border_stars(square);
            break;
        case 3:
            draw_increase_by_1(square);
            break;
        case 4:
            draw_reduce_by_1(square);
            break;
        default:
            error_shape_content();
            return;
    }
    printMatrix(square);
    square_perimeter(square_length);
    square_area(square_length);
}
//# sourceMappingURL=square.js.map