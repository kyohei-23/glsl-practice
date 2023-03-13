precision highp float;
const float PI = 3.1415926535897932384626433832795;
uniform float u_time;

varying vec2 v_uv;

void main(){
  v_uv = uv;
  vec3 pos = position;
  pos.z += cos(pos.x + pos.y) * .5 * tan(u_time);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}