import React, { useEffect, useState } from 'react';

class Circle {
    x: number;
    y: number;
    rad: number;
    constructor(x: number, y: number, rad: number) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }
}

const findPoint = (cx: number, cy: number, rad: number, cornerGrad: number) => {
    const cornerRad = (cornerGrad * Math.PI) / 180;
    const nx = Math.cos(cornerRad) * rad + cx;
    const ny = Math.sin(cornerRad) * rad + cy;
    return { x: nx, y: ny };
};

function LandingPage(): JSX.Element {
    const [circles, setCircles] = useState<Circle[]>([]);

    useEffect(() => {
        setCircles(createPattern());
    }, []);

    const createPattern = () => {
        const rad = 150;
        const centerCircle = new Circle(400, 400, rad);
        const circleBuilder: Circle[] = [];
        circleBuilder.push(centerCircle);

        for (let i = 0; i < 6; i++) {
            console.log(i);
            const cornerGrad = i * 60;
            const point = findPoint(centerCircle.x, centerCircle.y, centerCircle.rad, cornerGrad);
            const circle = new Circle(point.x, point.y, rad);
            console.log(circle.x);
            console.log(circle.y);
            circleBuilder.push(circle);
        }

        return circleBuilder;
    };

    return (
        <>
            {circles.length}
            <svg viewBox="0 0 1000 1000">
                {circles.map((circle, i) => (
                    <circle key={i} cx={circle.x} cy={circle.y} r={circle.rad} stroke="blue" fill="none" />
                ))}
            </svg>
            <div>Landing page</div>
        </>
    );
}

export default LandingPage;
