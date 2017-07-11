;(function(win, doc, THREE, Detector) {
    "use strict";

    win.testController = win.testController || (function() {

        var DOM = {
            //
        },
        MODEL = {
            camera:     null,
            scene:      null,
            renderer:   null,
            geometry:   null,
            material:   null,
            mesh:       null
        },

        Init = function() {
            if (Detector.webgl) {

                MODEL.camera = new THREE.PerspectiveCamera(25, win.innerWidth / win.innerHeight, 1, 10000);
                MODEL.camera.position.z = 100; // set it to 1000 for BoxGeometry

                //MODEL.geometry = new THREE.BoxGeometry(200, 200, 200);
                //MODEL.geometry = new THREE.TorusGeometry(10, 3, 16, 100);
                MODEL.geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

                MODEL.material = new THREE.MeshBasicMaterial({
                    color: 0x00ff00,
                    wireframe: true
                });

                MODEL.mesh = new THREE.Mesh(MODEL.geometry, MODEL.material);

                MODEL.scene = new THREE.Scene();
                MODEL.scene.add(MODEL.mesh);

                MODEL.renderer = new THREE.WebGLRenderer();
                MODEL.renderer.setSize(win.innerWidth, win.innerHeight);

                doc.body.appendChild(MODEL.renderer.domElement);

                this.animate();

            } else {
                doc.body.appendChild(Detector.getWebGLErrorMessage());
            }
        },

        prot = {

            /**
             * A loop that causes the renderer to draw the scene at 60 FPS.
             * @private
             */
            animate: function() {
                win.requestAnimationFrame(prot.animate);

                MODEL.mesh.rotation.x += 0.01;
                MODEL.mesh.rotation.y += 0.02;

                MODEL.renderer.render(MODEL.scene, MODEL.camera);
            },


            /**
             *  entry point
             *  @public
             */
            standUp: function() {
                return new Init();
            }

        };
        
        Init.prototype = prot;


        // Public Interface
        return {
            standUp: prot.standUp
        };


    })();


    doc.addEventListener("DOMContentLoaded", function() {
        win.testController.standUp();
    }, true);

})(window, document, THREE, Detector);
