varying vec2 textureCoord;
varying vec4 color;

uniform sampler2D sampler0;

void main() {
  vec3 col = texture2D( sampler0, textureCoord ).xyz;
  
  vec3 targ = vec3(0,0.99609375,0 );
  float dist = pow(distance(col, targ),1);
  
  vec4 keyed = vec4( col, smoothstep( 0.3, 1, dist) );
  
  gl_FragColor = vec4( keyed*color );
  
}