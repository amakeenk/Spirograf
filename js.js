        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        var width = ctx.canvas.width;
        var height = ctx.canvas.height;

        var x = width /2;
        var y = height /2;

        var stepCount = 0; //количество шагов в одном направлении
        var direction;

        function drawDot() {
            ctx.clearRect(0, 0, width, height);
            if(stepCount === 0) {
                stepCount = Math.floor(Math.random() * 15);
                direction = Math.floor(Math.random() * 8);
            } else stepCount--;

        switch (direction) {
            case 0: //up
                y--;
                break;
            case 1: //right
                x++;
                break;
            case 2: //down
                y++;
                break;
            case 3: //left
                x--;
                break;
            case 4: //right-up
                y--;
                x++;
                break;
            case 5: //right-down
                y++;
                x++;
                break;
            case 6: //left-down
                y++;
                x--;
                break;
            case 7: //left-top
                y--;
                x--;
                break;
        }
        if (x < 0 || x > width || y < 0 || y > height) {
            stepCount =0;
        }
        ctx.fillRect(6, 6, 6, 6);
        timer = setTimeout(drawDot, 100);
}
drawDot();