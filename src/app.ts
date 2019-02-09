import renderBricks from "./renderBricks";
import { BrickData } from "./brickData";

const canvas = document.createElement("canvas");
canvas.width = 150;
canvas.height = 150;
document.body.appendChild(canvas);
const input = document.createElement("textarea");
input.oninput = (e) => {
    console.log(e);
    const context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height);
    const bricks = createBricks((e.target as HTMLTextAreaElement).value);
    renderBricks(context, bricks);
};
document.body.appendChild(input);
input.style.display = "block";
input.rows = 10;
input.cols = 100;
input.value = "2,2,4,1,#13fa21\n3,4,1,3,#ea1121\n5,5,1,1,#131221";
input.dispatchEvent(new Event("input"));

function createBricks(textContent: string): BrickData[] {
    return textContent.split('\n')
        .map(x => x.trim().split(',').map(y => y.trim()))
        .filter(x => x.length === 5)
        .map(x => ({x: Number(x[0]), y: Number(x[1]), width: Number(x[2]), height: Number(x[3]), color: x[4]}));
}