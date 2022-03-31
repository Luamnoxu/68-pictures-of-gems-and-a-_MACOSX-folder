//from https://www.shadertoy.com/view/WdSXWD !!

#version 120

#define samples 50

// ------

varying vec2 imageCoord;

uniform vec2 textureSize;
uniform vec2 imageSize;

uniform float strength = 0.0;
uniform float angle;

uniform sampler2D sampler0;

varying vec4 color;

// ------

vec4 dirBlur(sampler2D tex, vec2 uv, vec2 angle)
{
    vec3 acc = vec3(0);
    
    const float delta = 2.0 / float(samples);
    for(float i = -1.0; i <= 1.0; i += delta)
    {
        acc += texture2D(tex, uv - vec2(angle.x * i, angle.y * i)).rgb * delta * .5;
    }
    
    return vec4(acc, 1.0);  
}

void main() {
	vec2 uv = imageCoord / textureSize * imageSize;
    
    float r = radians(angle);
    vec2 direction = vec2(sin(r), cos(r));
    
    gl_FragColor = dirBlur(sampler0, uv, strength*direction) * color;
  
}