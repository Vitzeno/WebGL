import * as THREE from "three";
import { Scene } from "../../primatives/scene";
import { Planet } from "../../scenes/solar-system/planet";

export class SolarSystemScene extends Scene {
  gridSize = 1.0e5;
  gridDivisions = 1.0e1;

  gridX = new THREE.GridHelper(this.gridSize, this.gridDivisions);
  gridY = new THREE.GridHelper(this.gridSize, this.gridDivisions);
  gridZ = new THREE.GridHelper(this.gridSize, this.gridDivisions);

  objects: Planet[] = [
    //Sun
    new Planet({
      geometry: new THREE.SphereGeometry(696.34, 32, 32),
      material: new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
      }),
      mass: 1.0e16,
      radius: 696.34,
      name: "Sun",
      position: new THREE.Vector3(0, 0, -500),
      initialVelocity: new THREE.Vector3(0, 0, 0),
    }),
    //Earth
    new Planet({
      geometry: new THREE.SphereGeometry(63.71, 32, 32),
      material: new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        wireframe: true,
      }),
      mass: 1.0e15,
      radius: 63.71,
      name: "Earth",
      position: new THREE.Vector3(5000, 0, -500),
      initialVelocity: new THREE.Vector3(0, 0, -0.5),
    }),
    //Moon
    new Planet({
      geometry: new THREE.SphereGeometry(17.37, 32, 32),
      material: new THREE.MeshBasicMaterial({
        color: 0xcccccc,
        wireframe: true,
      }),
      mass: 1.0e3,
      radius: 17.37,
      name: "Moon",
      position: new THREE.Vector3(5384, 0, -500),
      initialVelocity: new THREE.Vector3(0, 0, -1.5),
    }),
  ];

  constructor(
    enableGridX: boolean = true,
    enableGridY: boolean = true,
    enableGridZ: boolean = true
  ) {
    super([]);
    // setup grid
    if (enableGridX) {
      this.gridX.rotateZ(Math.PI / 2);
      this.threeScene.add(this.gridX);
    }

    if (enableGridY) {
      this.gridY.rotateX(Math.PI / 2);
      this.threeScene.add(this.gridY);
    }

    if (enableGridZ) {
      this.threeScene.add(this.gridZ);
    }

    this.objects.forEach((object) => {
      // Add planets to scene
      this.threeScene.add(object.threeObject);
      // Add planet trails to scene
      this.threeScene.add(object.trail.trailObject);
    });
  }

  /**
   * Updates object parameters, typically called called every frame.
   * Delta time used to compensate for inconsistent frame rates.
   * @param {number} deltaTime - Time since last frame in seconds.
   */
  update = (deltaTime: number) => {
    this.objects.forEach((object) => {
      object.updateVelocity(this.objects, deltaTime);
    });
  };
}