precision mediump float;

uniform sampler2D u_texture;
uniform float u_dist;

varying vec2 v_uv;

void main(){
    float r = texture2D( u_texture, v_uv ).r;    
    float g = texture2D( u_texture, v_uv ).g;    
    float b = texture2D( u_texture, v_uv + sin( u_dist ) * 1.5 ).b;

    gl_FragColor = vec4(r, g, b, 1.);
}