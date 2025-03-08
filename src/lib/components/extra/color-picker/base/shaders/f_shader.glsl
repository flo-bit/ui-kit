precision mediump float;
uniform vec2 resolution;
uniform float hue_rad;

#include library;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;

    float l = uv.y;
    float h = hue_rad;

    vec3 hsl = vec3(h, uv.x, uv.y);
    vec3 hsvRGB = okhsv_to_srgb(hsl);
    gl_FragColor = vec4(hsvRGB, 1.0);
}
