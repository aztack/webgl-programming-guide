attribute vec4 a_Position;
void main() {
  gl_Position = a_Position; //vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 5.0;
}