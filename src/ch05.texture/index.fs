precision mediump float;
uniform float u_Width;
uniform float u_Height;
void main() {
  gl_FragColor = vec4(gl_FragCoord.x/u_Width,  gl_FragCoord.y/u_Height, 0.0,1.0);
}