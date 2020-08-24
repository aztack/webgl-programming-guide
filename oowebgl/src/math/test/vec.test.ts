import {Vec2, Vec3, Vec4, fuzzyEquals } from '..';
const v1 = Vec2.from(1, 0);
const v2 = Vec2.from(1, 1);
console.log(v1.angle(v2));

const a2 = Vec2.random(2)
const a3 = Vec3.random(2)
const a4 = Vec4.random(2)

console.log(a2.toString(), fuzzyEquals(a2.magnitude, 2));
console.log(a3.toString(), fuzzyEquals(a3.magnitude, 2));
console.log(a4.toString(), fuzzyEquals(a4.magnitude, 2));