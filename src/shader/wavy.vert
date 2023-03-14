precision highp float;
const float PI = 3.1415926535897932384626433832795;
uniform float u_time;

varying vec2 v_uv;

void main(){
  v_uv = uv;
  vec3 pos = position;
  pos.z += sin(pos.x + u_time) * .2;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}