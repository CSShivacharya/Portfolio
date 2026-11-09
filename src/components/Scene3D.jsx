import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function createCityLayout() {
  const buildings = [];
  const accents = [];
  let seed = 41;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let row = 0; row < 7; row += 1) {
    for (let column = -5; column <= 5; column += 1) {
      if (Math.abs(column) < 2 && row < 3) continue;

      const width = 0.42 + random() * 0.38;
      const depth = 0.46 + random() * 0.35;
      const height = 0.8 + random() * 2.2;
      const x = column * 0.92 + (random() - 0.5) * 0.25;
      const z = -1.6 - row * 1.24 + (random() - 0.5) * 0.22;
      const y = -1.55 + height / 2;
      buildings.push({ x, y, z, width, height, depth });

      if (random() > 0.36) {
        accents.push({
          x: x + (random() - 0.5) * width * 0.65,
          y: -1.55 + height * (0.25 + random() * 0.55),
          z: z + depth / 2 + 0.012,
          height: Math.min(height * 0.22, 0.46),
          hue: random() > 0.5 ? "#1ee8f5" : "#b445ff",
        });
      }
    }
  }
  return { buildings, accents };
}

function CityBlocks() {
  const city = useMemo(() => createCityLayout(), []);
  const buildings = useRef(null);
  const accents = useRef(null);
  const blockGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const blockMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#302d4d",
        emissive: "#38245b",
        emissiveIntensity: 0.78,
        metalness: 0.72,
        roughness: 0.38,
      }),
    [],
  );
  const accentMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ toneMapped: false }),
    [],
  );

  useEffect(
    () => () => {
      blockGeometry.dispose();
      blockMaterial.dispose();
      accentMaterial.dispose();
    },
    [accentMaterial, blockGeometry, blockMaterial],
  );

  useEffect(() => {
    if (!buildings.current) return;
    const dummy = new THREE.Object3D();
    city.buildings.forEach((building, index) => {
      dummy.position.set(building.x, building.y, building.z);
      dummy.scale.set(building.width, building.height, building.depth);
      dummy.updateMatrix();
      buildings.current?.setMatrixAt(index, dummy.matrix);
    });
    buildings.current.instanceMatrix.needsUpdate = true;
  }, [city]);

  useEffect(() => {
    if (!accents.current) return;
    const dummy = new THREE.Object3D();
    city.accents.forEach((accent, index) => {
      dummy.position.set(accent.x, accent.y, accent.z);
      dummy.scale.set(0.018, accent.height, 0.018);
      dummy.updateMatrix();
      accents.current?.setMatrixAt(index, dummy.matrix);
      accents.current?.setColorAt(index, new THREE.Color(accent.hue));
    });
    accents.current.instanceMatrix.needsUpdate = true;
    if (accents.current.instanceColor) accents.current.instanceColor.needsUpdate = true;
  }, [city]);

  return (
    <>
      <instancedMesh
        ref={buildings}
        args={[blockGeometry, blockMaterial, city.buildings.length]}
      />
      <instancedMesh
        ref={accents}
        args={[blockGeometry, accentMaterial, city.accents.length]}
      />
    </>
  );
}

function PortalCore() {
  const core = useRef(null);
  const ringA = useRef(null);
  const ringB = useRef(null);

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.16;
      core.current.rotation.x = state.pointer.y * 0.08;
    }
    if (ringA.current) {
      ringA.current.rotation.x += delta * 0.12;
      ringA.current.rotation.z += delta * 0.08;
    }
    if (ringB.current) ringB.current.rotation.y -= delta * 0.1;
  });

  return (
    <group position={[-2.05, 0.8, -0.5]}>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.93, 2]} />
        <meshPhysicalMaterial
          color="#614184"
          emissive="#7519b0"
          emissiveIntensity={0.82}
          roughness={0.2}
          metalness={0.74}
          clearcoat={1}
          clearcoatRoughness={0.14}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshBasicMaterial color="#d34fff" wireframe transparent opacity={0.42} />
      </mesh>
      <mesh ref={ringA} rotation={[0.8, 0.2, 0.3]}>
        <torusGeometry args={[1.22, 0.012, 8, 120]} />
        <meshBasicMaterial color="#24ebff" toneMapped={false} />
      </mesh>
      <mesh ref={ringB} rotation={[1.3, 0.4, -0.5]}>
        <torusGeometry args={[1.38, 0.009, 8, 120]} />
        <meshBasicMaterial color="#b143ff" toneMapped={false} />
      </mesh>
      <pointLight color="#9b35ff" intensity={28} distance={5} />
      <pointLight position={[0.9, 0.4, 1.2]} color="#16e7ff" intensity={15} distance={4} />
    </group>
  );
}

function DataSparks({ count }) {
  const points = useRef(null);
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const x = Math.sin(index * 127.1) * 43758.5453;
      const y = Math.sin(index * 269.5 + 13.7) * 24634.6345;
      const z = Math.sin(index * 319.7 + 7.3) * 56445.2341;
      data[index * 3] = (x - Math.floor(x) - 0.5) * 14;
      data[index * 3 + 1] = (y - Math.floor(y) - 0.5) * 8;
      data[index * 3 + 2] = (z - Math.floor(z) - 0.5) * 12 - 2;
    }
    return data;
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.012;
    points.current.rotation.x = state.pointer.y * 0.025;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#9befff"
        size={0.022}
        transparent
        opacity={0.74}
        sizeAttenuation
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

function WorldController() {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);
    const targetX = state.pointer.x * 0.16;
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 2, delta);
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      state.pointer.x * -0.045,
      2,
      delta,
    );
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      state.pointer.x * -0.22,
      1.5,
      delta,
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      1.2 + scrollProgress * 0.38 + state.pointer.y * 0.14,
      1.5,
      delta,
    );
    state.camera.lookAt(0, -0.1, -2.2);
  });

  return (
    <group ref={group}>
      <CityBlocks />
      <PortalCore />
      <mesh position={[0, -1.58, -5.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[15, 20]} />
        <meshStandardMaterial
          color="#080b17"
          emissive="#101435"
          emissiveIntensity={0.5}
          metalness={0.42}
          roughness={0.68}
        />
      </mesh>
      <gridHelper
        args={[16, 38, "#15546a", "#172034"]}
        position={[0, -1.55, -4.8]}
        material-transparent
        material-opacity={0.34}
      />
    </group>
  );
}

function Scene3D() {
  const mobile = window.matchMedia("(max-width: 700px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowPowerDevice = navigator.deviceMemory <= 2 || navigator.connection?.saveData;

  return (
    <Canvas
      camera={{ position: [0, 1.2, 9.5], fov: 47 }}
      dpr={mobile || lowPowerDevice ? [1, 1] : [1, 1.35]}
      frameloop={reducedMotion ? "demand" : "always"}
      gl={{ alpha: true, antialias: !mobile, powerPreference: "low-power" }}
      fallback={<div className="scene-fallback" aria-hidden="true" />}
      aria-hidden="true"
    >
      <fog attach="fog" args={["#08090d", 8, 19]} />
      <ambientLight intensity={0.7} color="#8998ff" />
      <directionalLight position={[2, 6, 4]} intensity={1.8} color="#c6a9ff" />
      <pointLight position={[-5, 2, -3]} intensity={11} color="#07dff8" distance={12} />
      <pointLight position={[5, 3, -6]} intensity={15} color="#ac43ff" distance={13} />
      <WorldController />
      <DataSparks count={mobile || lowPowerDevice ? 70 : 210} />
    </Canvas>
  );
}

export default Scene3D;
