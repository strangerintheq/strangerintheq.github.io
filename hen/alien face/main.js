const fo = document.querySelector('foreignObject')
c.width = innerWidth;
c.height = innerHeight;
gl.viewport(0, 0, innerWidth, innerHeight)
uf2('resolution', innerWidth, innerHeight)
fo.setAttribute('width', innerWidth)
fo.setAttribute('height', innerHeight)
fo.parentNode.setAttribute('viewBox', [0, 0, innerWidth, innerHeight])
uf1('time', Math.random()*827464);
gl.drawArrays(gl.TRIANGLES,0,3)






