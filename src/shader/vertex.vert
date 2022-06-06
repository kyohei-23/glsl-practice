precision mediump float;
const float PI = 3.1415926535897932384626433832795;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_dist;

varying vec2 v_uv;

void main(){
   v_uv = uv;
   vec3 pos = position;
   float noiseFreq = 1.5;
   float noiseAmp = 0.05; 
//    vec3 noisePos = vec3(pos.x * pos.y * noiseFreq + sin(u_time), pos.y, pos.z);
//    pos.x += snoise(noisePos) * noiseAmp;
//    pos.x += sin(pos.y + u_time * noiseFreq * PI ) * noiseAmp;
   pos.y += pow(pos.x * noiseFreq * PI , 2.0 ) * noiseAmp * u_dist;
   pos.y += u_mouse.y * 3.3;
   pos.x += uv.y * sign(pos.x) * u_dist * 3. + u_mouse.x;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}