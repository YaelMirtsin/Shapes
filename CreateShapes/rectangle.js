function draw_rectangle(shape_content_menu, rectangle_length, rectangle_width) {
    var rectangle = new Array(rectangle_width);
    for (var i = 0; i < rectangle.length; i++) {
        rectangle[i] = new Array(rectangle_length);
    }
    switch (shape_content_menu) {
        case 1:
            draw_stars(rectangle);
            break;
        case 2:
            draw_border_stars(rectangle);
            break;
        case 3:
            draw_increase_by_1(rectangle);
            break;
        case 4:
            draw_reduce_by_1(rectangle);
            break;
        default:
            error_shape_content();
            return;
    }
    printMatrix(rectangle);
    perimeter_rectangle(rectangle_length, rectangle_width);
    area_rectangle(rectangle_length, rectangle_width);
}
//# sourceMappingURL=rectangle.js.map