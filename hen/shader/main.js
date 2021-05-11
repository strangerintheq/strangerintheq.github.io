uf1('zoom', 4.3)
uf2('mn', 0.31 + Math.random()*0.5, -0.71+ Math.random()*0.5)
uf2('ab', Math.random(), Math.random())
uf3('color', Math.random(),Math.random(),Math.random())

gl.drawArrays(gl.TRIANGLES,0,3)