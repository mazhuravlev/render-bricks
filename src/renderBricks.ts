import { BrickData } from "./brickData";

const step = 15;
const offset = 2;
const backColor = "#000000";

export default function renderBricks(context: CanvasRenderingContext2D, bricks: BrickData[]) {
    bricks.forEach(brick => {
        const rects = getRects(brick);
        context.fillStyle = backColor;
        context.fillRect.apply(context, rects.outer);
        context.fillStyle = brick.color;
        context.fillRect.apply(context, rects.inner);
    });
}

function getRects(brick: BrickData): {outer: number[], inner: number[]} {
    return {
        outer: [brick.x * step, brick.y * step, brick.width * step, brick.height * step],
        inner: [brick.x * step + offset, brick.y * step + offset, brick.width * step - offset * 2, brick.height * step - offset * 2],
    };
}