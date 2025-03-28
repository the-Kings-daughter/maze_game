const {Engine, Render, Runner, World, Bodies,  MouseConstraint, Mouse} = Matter;

const width = 900;
const height = 600;

const engine = Engine.create();
const {world} = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height,
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}));

//Walls
const walls = [
    Bodies.rectangle(450, 0,900,40, {isStatic: true}),
    Bodies.rectangle(450, 600, 900,40, {isStatic: true}),
    Bodies.rectangle(0, 300, 40,600, {isStatic: true}),
    Bodies.rectangle(900, 300, 40,600, {isStatic: true}),
];

World.add(world, walls);

for(let i = 0; i < 50; i++) {
    if (Math.random() > 0.5) {
        World.add(
            world, 
            Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50, {
                render: {
                    fillStyle: 'green',
                }
            })
        );
    } else {
        World.add(
            world, 
            Bodies.circle(Math.random() * width, Math.random() * height, 35, {
                render: {
                    fillStyle: 'yellow',
                }
            })
        );
    }

}


