;(function(win, doc, THREE) {
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
            MODEL.camera = new THREE.PerspectiveCamera(25, win.innerWidth / win.innerHeight, 1, 10000);
            MODEL.camera.position.z = 1000;

            MODEL.geometry = new THREE.BoxGeometry(200, 200, 200);
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
        },

        prot = {

            /**
             * Starts the scene animation.
             * @private
             */
            animate: function() {
                requestAnimationFrame(prot.animate);

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

})(window, document, THREE);
