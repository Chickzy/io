canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_height = 30;
block_image_width = 30;

player_obj = "";
block_image_obj = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_obj = Img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_obj);


    });
}
function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        block_image_obj = Img;
        block_image_obj.scaleToWidth(block_image_width);
        block_image_obj.scaleToHeight(block_image_height);
        block_image_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_obj);

    });
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift have been pressed :|");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and shift have been pressed :|");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if (keypressed = '38') {
        key_up1();
        console.log("up arrow has been pressed");
    }

    if (keypressed = '40') {
        key_down1();
        console.log("down arrow has been pressed :|");
    }

    if (keypressed = '37') {
        key_left1();
        console.log("left arrow has been pressed");
    }

    if (keypressed = '39') {
        key_right1();
        console.log("right arrow has been pressed");
    }

    if (keypressed = '87') {
        new_img("wall.jpg");
        console.log("w has been pressed");
    }

    if (keypressed = '71') {
        new_img("ground.png");
        console.log("g has been pressed");
    }

    if (keypressed = '76') {
        new_img("light_green.png");
        console.log("l has been pressed");
    }

    if (keypressed = '84') {
        new_img("trunk.jpg");
        console.log("t has been pressed");
    }

    if (keypressed = '82') {
        new_img("roof.jpg");
        console.log("r has been pressed");
    }

    if (keypressed = '89') {
        new_img("yellow_wall.png");
        console.log("y has been pressed");
    }

    if (keypressed = '68') {
        new_img("dark_green.png");
        console.log("d has been pressed");
    }

    if (keypressed = '85') {
        new_img("unique.png");
        console.log("u has been pressed");
    }

    if (keypressed = '67') {
        new_img("cloud.jpg");
        console.log("c has been pressed");
    }


}
function key_up1() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow is pressed the value of x,y is " + player_x + "," + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}
function key_down1() {
    if (player_y <= 450) {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow is pressed the value of x,y is " + player_x + "," + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}
function key_right1() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right arrow is pressed the value of x,y is " + player_x + "," + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}
function key_left1() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("block image height = " + block_image_width);
        console.log("when left arrow is pressed the value of x,y is " + player_x + "," + player_y);
        canvas.remove(player_obj);
        player_update();
}
}
