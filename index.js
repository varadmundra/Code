import box from "./Box";
import camera from "./Camera";
import _eventBus from "./KeyListener";
import light from "./Light";
import model from "./loader";
import machine from "./Machine";
import renderer from "./Renderer";
import resize from "./Resize";
import scene from "./Scene";


scene.add(box)
scene.add(light)
camera.position.set(1, 2, 5)
camera.lookAt(box.position)
resize.start(renderer)


machine.addCallback(() => {
    box.rotation.y += 0.01
    renderer.render(scene, camera);
});

machine.start()

model.then(object => {
    scene.add(object)
    let s = 0.01
    object.scale.set(s, s, s)
})
