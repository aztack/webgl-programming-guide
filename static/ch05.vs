  attribute vec4 a_Position;
  attribute vec2 a_TexCoord;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  uniform mat4 u_ViewMatrix;
  void main() {
    gl_Position = u_ViewMatrix * a_Position;
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    gl_PointSize = 5.0;
  }