precision mediump float;

uniform sampler2D u_texture;
uniform sampler2D u_texture_old;
uniform float u_dist;
uniform float u_progress;

varying vec2 v_uv;

void main(){
    float r = texture2D( u_texture, v_uv ).r;    
    float g = texture2D( u_texture, v_uv ).g;    
    float b = texture2D( u_texture, v_uv + sin( u_dist ) * 1.5 ).b;
    vec4 tex = vec4(r,g,b,1.);

    float _r = texture2D( u_texture_old, v_uv ).r;
    float _g = texture2D( u_texture_old, v_uv ).g;
    float _b = texture2D( u_texture_old, v_uv + sin( u_dist )  * 1.5 ).b;
    vec4 tex_old = vec4(_r, _g, _b, 1.);

    gl_FragColor = mix(tex_old, tex, step(1. - v_uv.y, u_progress));
}