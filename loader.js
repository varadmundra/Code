import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';


const model = new Promise((res, rej) => {
    const loader = new FBXLoader();
    loader.load('models/fbx/male_character.fbx Dancing.fbx', function (object) {
        // mixer = new THREE.AnimationMixer(object);
        // const action = mixer.clipAction(object.animations[0]);
        // action.play();
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        res(object);
    });
})

export default model