var mouseX = 0, mouseY = 0,

    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,

    SEPARATION = 200,
    AMOUNTX = 10,
    AMOUNTY = 10,

    camera, scene, renderer;

init();
animate();

function init() {

    var container, particle;

    container = document.createElement('div');
    container.className = "homeCanvas";
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;

    scene = new THREE.Scene();


    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor( 0xf4f4f4 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // particles

    var PI2 = Math.PI * 2;
//    var material = new THREE.SpriteCanvasMaterial({
//
//
//            blending: THREE.AdditiveBlending,
//
//
//        color: 0x999999,
//        program: function (context) {
//            context.beginPath();
//            context.arc(0, 0, .5, 0, PI2, true);
//            context.fill();
//
//        }
//
//    });
    var material = new THREE.SpriteMaterial({
//        map: new THREE.Texture(generateSprite()),
//        blending: THREE.AdditiveBlending
        color: 0x272737, ambient: 0x3732bf, specular: 0x3732bf, shininess: 250,
        side: THREE.DoubleSide, vertexColors: THREE.VertexColors
    });


    var geometry = new THREE.Geometry();

    for (var i = 0; i < 77; i++) {

        particle = new THREE.Sprite(material);
        particle.position.x = Math.random() * 2.5 - 1;
        particle.position.y = Math.random() * 2.5 - 1;
        particle.position.z = Math.random() * 2.5 - 1;
        particle.position.normalize();
        particle.position.multiplyScalar(Math.random() * 2 + 200);
        particle.scale.x = particle.scale.y = 0.4; //dot size
        scene.add(particle);

        geometry.vertices.push(particle.position);

    }

    // lines

    var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x272737, opacity: .2}));
    scene.add(line);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function onDocumentMouseMove(event) {

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;


}

function onDocumentTouchStart(event) {

    if (event.touches.length > 1) {

        event.preventDefault();

        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;

    }

}

function generateSprite() {

    var canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;

    //0x272737
    var context = canvas.getContext('2d');
    var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
    gradient.addColorStop(0, 'rgba(39, 39, 55, 1)');
    gradient.addColorStop(0.2, 'rgba(39, 39, 55, 1)');
    gradient.addColorStop(0.4, 'rgba(0, 0, 55, 1)');
    gradient.addColorStop(1, 'rgba(0,0,0,.5)');



    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return canvas;

}


function onDocumentTouchMove(event) {

//disabled for mobile usage.
//    if (event.touches.length == 1) {
//
//        event.preventDefault();
//
//        mouseX = event.touches[ 0 ].pageX - windowHalfX;
//        mouseY = event.touches[ 0 ].pageY - windowHalfY;
//
//    }

}

//

function animate() {

    requestAnimationFrame(animate);

    render();

}

var radius = 200;
var theta = 0;

function render() {

    // rotate camera

    theta += 0.03;

    camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
//    camera.position.y += ( -mouseY + 50 - camera.position.y ) * .001;
    camera.position.y = radius * Math.cos(THREE.Math.degToRad(theta));
//    camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));
    camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta)) - 60;
    camera.lookAt(scene.position);

//    camera.position.x += ( mouseX - camera.position.x ) * .001;
//    camera.position.y += ( -mouseY + 50 - camera.position.y ) * .001;
//    camera.lookAt(scene.position);

    renderer.render(scene, camera);

}

