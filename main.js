const player = document.getElementById("player");
const pos = { x: 0, y: 0 };
const dimensions = { x: 600, y: 400 };
const playerSize = 50;
const step = 100;

const KEY_MAP = {
    ArrowLeft: () => {
        pos.x = Math.max(0, pos.x - step);
        updatePlayer();
    },
    ArrowRight: () => {
        pos.x = Math.min(dimensions.x - playerSize, pos.x + step);
        updatePlayer();
    },
    ArrowDown: () => {
        pos.y = Math.min(dimensions.y - playerSize, pos.y + step);
        updatePlayer();
    },
    ArrowUp: () => {
        pos.y = Math.max(0, pos.y - step);
        updatePlayer();
    },
};
document.addEventListener("keydown", (e) => {
    if (KEY_MAP[e.key]) {
        KEY_MAP[e.key]();
    }
});

function updatePlayer() {
    player.style.transform = `translateX(${pos.x}px) translateY(${pos.y}px)`;
}
