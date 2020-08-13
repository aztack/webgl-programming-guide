precision mediump float;
// varying vec4 v_Color;
varying vec2 v_TexCoord;
uniform sampler2D u_Sampler;
void main() {
  // gl_FragColor = v_Color;
  gl_FragColor = texture2D(u_Sampler, v_TexCoord);
}