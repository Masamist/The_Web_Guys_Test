// TODO: Replace THREE.js with vanilla WebGL shader program

let canvas,
		scene, 
		camera,
		renderer,
		material,
		mesh,
		mouse,
		tick;

function init() {
	tick = Math.round(Math.random() * 5000);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		50,
		window.innerWidth / window.innerHeight,
		0.1,
		10000
	);
	camera.position.z = 1;
	
	let uniforms = {
			time: {
				type: "f",
				value: 0.0
			},
			deltaY: {
				type: "f",
				value: 0.0
			},
			resolution: { 
				type: "v2", 
				value: new THREE.Vector2(50, 50) 
			}
		};
	
	material = new THREE.ShaderMaterial({
		uniforms,
		vertexShader: document.getElementById("vert-shader").textContent,
		fragmentShader: document.getElementById("frag-shader").textContent
	});
	mesh = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(2, 2),
		material
	);
	scene.add(mesh);
	renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById("canvas")
	});
	resize();
	window.addEventListener("resize", resize);
}

function render() {
	tick++;
	material.uniforms['time'].value = 0.00025 * tick;
	material.uniforms['deltaY'].value -= 0.0005;
	renderer.render(scene, camera);
	window.requestAnimationFrame(render);
}

function resize() {
	material.uniforms["resolution"].value = new THREE.Vector2(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
}

window.addEventListener("load", () => {
	init();
	render();
});