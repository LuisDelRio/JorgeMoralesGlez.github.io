var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
var troncoForma = new THREE.CylinderGeometry(3,4,5,20,5,false);

base2Forma.translate(0,1,0);
troncoForma.translate(0,2,0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);
var troncoMalla= new THREE.Mesh(troncoForma);

var peonForma = new THREE.Geometry();
peonForma.merge(base1Malla.geometry, base1Malla.matrix);
peonForma.merge(base2Malla.geometry, base2Malla.matrix);
peonForma.merge(troncoMalla.geometry, troncoMalla.matrix);
var material= new THREE.MeshNormalMaterial();
var peonMalla = new THREE.Mesh(peonForma, material);

var escena = new THREE.Scene();
escena.add(peonMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
