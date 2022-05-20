
function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0xF5, 0xEF, 0x79));
    fill(color(0x8E, 0x91, 0xDB));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if (choice == 3)
        rect(50, 200, 150, 2);
    if (choice == 4)
        rect(50, 250, 150, 2);
    text("中午吃泡麵", 50, 50);
    text("中午吃UberEat", 50, 100);
    text("中午吃FoodPanda", 50, 150);
    text("中午吃牛排", 50, 200);
    text("中午吃大餐", 50, 250);
}

function mousePressed() {
    choice = int(random(5));
}

function initializeFields() {
    choice = -1;
}
