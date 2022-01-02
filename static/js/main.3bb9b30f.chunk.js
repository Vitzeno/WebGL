(this.webpackJsonpwebgl=this.webpackJsonpwebgl||[]).push([[0],{24:function(e,t,i){"use strict";i.r(t);var n,r,a,o,c,s,d,h=i(9),l=i.n(h),u=i(13),m=i.n(u),w=i(1),p=i(0),f=i(2),b=i(3),g=function e(t){var i=t.fov,n=t.aspect,r=t.near,a=t.far,o=t.position;Object(p.a)(this,e),this.threeCamera=void 0,this.targetObject=function(e){},this.update=function(e){},this.threeCamera=new w.q(i,n,r,a),this.threeCamera.position.copy(o)},v=i(14),j=function(e){Object(f.a)(i,e);var t=Object(b.a)(i);function i(e){var n,r=e.fov,a=e.aspect,o=e.near,c=e.far,s=e.position,d=e.target,h=e.domElement;return Object(p.a)(this,i),(n=t.call(this,{fov:r,aspect:a,near:o,far:c,position:s})).domElement=void 0,n.controls=void 0,n.target=void 0,n.zoomSpeed=2,n.rotateSpeed=2,n.panSpeed=2,n.update=function(e){n.controls.update(),n.controls.target.copy(n.target)},n.targetObject=function(e){n.target.copy(e||n.target)},n.domElement=h,n.target=d,n.threeCamera.lookAt(d),n.controls=new v.a(n.threeCamera,n.domElement),n.controls.target.copy(d),n.controls.zoomSpeed=n.zoomSpeed,n.controls.rotateSpeed=n.rotateSpeed,n.controls.panSpeed=n.panSpeed,n.controls.update(),n}return i}(g),O=function e(){Object(p.a)(this,e),this.threeScene=void 0,this.update=function(e){},this.threeScene=new w.w},y=i(6),S=function e(t){var i=this,n=t.trailLength,r=t.colour;Object(p.a)(this,e),this.trailObject=void 0,this.geometry=void 0,this.material=void 0,this.positions=void 0,this.counter=void 0,this.trailLength=void 0,this.update=function(e){},this.addPoint=function(e){var t=i.counter++,n=new w.o;n.position.copy(e),n.updateMatrix(),i.trailObject.setMatrixAt(t,n.matrix),i.counter%=i.trailLength,i.trailObject.instanceMatrix.needsUpdate=!0},this.trailLength=n,this.counter=0,this.positions=new Array(this.trailLength),this.positions.fill(new w.D(0,0,0)),this.material=new w.l({color:r}),this.geometry=new w.y(7,5,5),this.trailObject=new w.g(this.geometry,this.material,this.trailLength),this.trailObject.instanceMatrix.needsUpdate=!0},C=function(e){Object(f.a)(i,e);var t=Object(b.a)(i);function i(e){var n,r=e.position,a=e.name,o=e.mass,c=e.radius,s=e.colour,d=e.initialVelocity,h=e.scene;return Object(p.a)(this,i),(n=t.call(this,{geometry:new w.y(c,32,32),material:new w.l({color:s,wireframe:!0}),scene:h,name:a})).mass=void 0,n.radius=void 0,n.colour=void 0,n.initialVelocity=new w.D(0,0,0),n.currentVelocity=new w.D(0,0,0),n.gravitationalConstant=667408e-16,n.trail=void 0,n.frameCount=0,n.frameUpdate=75,n.update=function(e){n.frameCount++,n.threeObject.rotateY(.1*e),n.threeObject.position.add(n.currentVelocity),n.frameCount===n.frameUpdate&&n.trail.addPoint(n.threeObject.position),n.frameCount%=n.frameUpdate},n.updateVelocity=function(e,t){e.forEach((function(e){if(e!==Object(y.a)(n)){var i=n.threeObject.position.distanceTo(e.threeObject.position),r=n.threeObject.position.clone().sub(e.threeObject.position).normalize().multiplyScalar(-1).multiplyScalar(n.gravitationalConstant*n.mass*e.mass/Math.pow(i,2)).divideScalar(n.mass);n.currentVelocity.add(r.multiplyScalar(t))}}))},n.turnOnTrails=function(){n.threeParentScene.add(n.trail.trailObject)},n.turnOffTrails=function(){n.threeParentScene.remove(n.trail.trailObject)},n.mass=o,n.radius=c,n.colour=s,n.threeObject.position.copy(r),n.initialVelocity=d,n.currentVelocity=n.initialVelocity,n.trail=new S({trailLength:100,colour:n.colour}),n}return i}((function e(t){var i=this,n=t.geometry,r=t.material,a=t.scene,o=t.name;Object(p.a)(this,e),this.threeObject=void 0,this.threeParentScene=void 0,this.geometry=void 0,this.material=void 0,this.name=void 0,this.update=function(e){i.threeObject.rotateX(1*e),i.threeObject.rotateY(1*e),i.threeObject.rotateZ(1*e)},this.geometry=n,this.material=r,this.name=o,this.threeParentScene=a,this.threeObject=new w.k(this.geometry,this.material),this.threeParentScene.add(this.threeObject)})),D=function(e){Object(f.a)(i,e);var t=Object(b.a)(i);function i(e){var n,r=e.enableGridX,a=e.enableGridY,o=e.enableGridZ;return Object(p.a)(this,i),(n=t.call(this)).gridSize=1e5,n.gridDivisions=300,n.gridColour=new w.c(6710886),n.gridX=new w.f(n.gridSize,n.gridDivisions,n.gridColour,n.gridColour),n.gridY=new w.f(n.gridSize,n.gridDivisions,n.gridColour,n.gridColour),n.gridZ=new w.f(n.gridSize,n.gridDivisions,n.gridColour,n.gridColour),n.planets=[new C({name:"Sun",mass:125e14,radius:796.34,colour:new w.c(1048320),position:new w.D(0,0,-500),initialVelocity:new w.D(0,0,0),scene:n.threeScene}),new C({name:"Earth",mass:1e15,radius:63.71,colour:new w.c(255),position:new w.D(5e3,0,-500),initialVelocity:new w.D(0,0,-.75),scene:n.threeScene}),new C({name:"Moon",mass:1e3,radius:17.37,colour:new w.c(13421772),position:new w.D(5384,0,-500),initialVelocity:new w.D(0,-1,-.75),scene:n.threeScene}),new C({name:"Mars",mass:1e15,radius:63.71,colour:new w.c(13369344),position:new w.D(-5e3,0,-500),initialVelocity:new w.D(0,0,.75),scene:n.threeScene}),new C({name:"Deimos",mass:1e3,radius:17.37,colour:new w.c(13421772),position:new w.D(-5384,0,-500),initialVelocity:new w.D(0,1,.75),scene:n.threeScene}),new C({name:"Jupiter",mass:2e15,radius:342.81,colour:new w.c(12745632),position:new w.D(7e3,7e3,-500),initialVelocity:new w.D(0,-.5,.5),scene:n.threeScene})],n.update=function(e){n.planets.forEach((function(t){t.updateVelocity(n.planets,e),t.update(e)}))},r&&(n.gridX.rotateZ(Math.PI/2),n.threeScene.add(n.gridX)),a&&(n.gridY.rotateX(Math.PI/2),n.threeScene.add(n.gridY)),o&&n.threeScene.add(n.gridZ),n.planets.forEach((function(e){e.turnOnTrails()})),n}return i}(O),M=i(17),V=i(15),E=function e(t){var i=this,n=t.camera,r=t.scene,a=t.interactables;Object(p.a)(this,e),this.raycaster=new w.v,this.mouse=new w.C,this.camera=void 0,this.scene=void 0,this.interactables=void 0,this.onMouseMove=function(e){i.mouse.x=e.clientX/window.innerWidth*2-1,i.mouse.y=-e.clientY/window.innerHeight*2+1},this.findIntersectedObject=function(){i.raycaster.setFromCamera(i.mouse,i.camera);for(var e=i.raycaster.intersectObjects(i.scene.children),t=function(t){return{v:i.interactables.find((function(i){return i.threeObject.id===e[t].object.id}))}},n=0;n<e.length;n++){var r=t(n);if("object"===typeof r)return r.v}},this.update=function(e,t){var n=i.findIntersectedObject();n&&(e.selectedObjects=[n.threeObject])},this.camera=n,this.scene=r,this.interactables=a,window.addEventListener("mousemove",this.onMouseMove,!1)},P=i(16),z=i(7),x=new w.b,L=0,X=function e(){var t;requestAnimationFrame(e),L=x.getDelta(),document.title="FPS: ".concat(Math.round(1/L)),n.targetObject(null===(t=d.findIntersectedObject())||void 0===t?void 0:t.threeObject.position),d.update(c,L),r.update(L),n.update(L),s.render(L)},Y=function(){n.threeCamera.aspect=window.innerWidth/window.innerHeight,n.threeCamera.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)},G=function(){r=new D({enableGridX:!1,enableGridY:!1,enableGridZ:!0}),a=function(){var e;return(e=new w.F({antialias:!0})).setSize(window.innerWidth,window.innerHeight),e}(),n=new j({fov:90,aspect:window.innerWidth/window.innerHeight,near:.1,far:1e7,position:new w.D(-700,5e3,4e3),target:new w.D(0,0,-500),domElement:a.domElement}),d=new E({camera:n.threeCamera,scene:r.threeScene,interactables:r.planets}),document.body.appendChild(a.domElement),window.addEventListener("resize",Y,!1),o=new V.a(r.threeScene,n.threeCamera),(c=new P.a(new w.C(window.innerWidth,window.innerHeight),r.threeScene,n.threeCamera)).edgeStrength=250,(s=new M.a(a)).addPass(o),s.addPass(c),X()},H=function(){return Object(h.useEffect)((function(){G()})),Object(z.jsx)(z.Fragment,{})};m.a.render(Object(z.jsx)(l.a.StrictMode,{children:Object(z.jsx)(H,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3bb9b30f.chunk.js.map