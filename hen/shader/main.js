uf1('zoom', 0.25+Math.random()*0.25);
uf2('center', Math.random()-0.5, Math.random()-0.5)
uf2('mn', 0.31 + Math.random()*0.1, -0.71+ Math.random()*0.1)
uf2('ab', Math.random(), Math.random())
uf3('color', Math.random()*0.5+0.5,Math.random()*0.5+0.5,Math.random()*0.5+0.5)

gl.drawArrays(gl.TRIANGLES,0,3)