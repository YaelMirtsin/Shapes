var main_menu: number = -1;

main_menu = parseInt(prompt(printMainMenu()));
getMainMenu(main_menu);



function getMainMenu(main_menu: number) {
    var shape_content_menu: number = -1;
    var size_side_length: number = -1;
    var maxLength: number = 20;
    var rectangle_length: number = 0;
    var rectangle_width: number = 0;

    switch (main_menu) {
        case 1:
            size_side_length = parseInt(prompt("Please enter square side length:"));
            if (!is_error_size_of_shape(size_side_length, maxLength)) {
                shape_content_menu = parseInt(prompt(printShapeContentMenu()));
            } else return;
            draw_square(shape_content_menu, size_side_length);
            break;
        case 2:
            rectangle_length = parseInt(prompt("Please enter rectangle length:"));
            if (!is_error_size_of_shape(rectangle_length, maxLength)) {
                rectangle_width = parseInt(prompt("Please enter rectangle width:"));
                if (!is_error_size_of_shape(rectangle_width, maxLength)) {
                    shape_content_menu = parseInt(prompt(printShapeContentMenu()));
                } else return;
            } else return;
            draw_rectangle(shape_content_menu, rectangle_length, rectangle_width);
            break;
        case 3:
            size_side_length = parseInt(prompt("Please enter triangle side length:"));
            if (!is_error_size_of_shape(size_side_length, maxLength)) {
                shape_content_menu = parseInt(prompt(printShapeContentMenu()));
            } else return;
            draw_triangle(shape_content_menu, size_side_length);
            break;
        default: error_menu_message();
    }
}




