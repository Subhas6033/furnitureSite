import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Product3DModel Component
 *
 * Renders interactive 3D models based on product type.
 * Uses geometric primitives to represent different furniture pieces:
 * - sofa: Represents a sofa using box geometries
 * - table: Represents a dining table
 * - chair: Represents an armchair
 * - bed: Represents a bed frame
 *
 * Why: Instead of loading heavy GLTF models which can cause lag,
 * we use optimized geometric shapes that are smooth and performant.
 * This provides a great 3D experience without performance issues.
 */

/**
 * Sofa 3D Model
 * Represented using multiple box geometries for a stylized look
 */
const SofaModel = () => {
  const groupRef = useRef();

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Main base/seat */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2.4, 0.4, 1]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.7, -0.35]}>
        <boxGeometry args={[2.4, 0.8, 0.3]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Left armrest */}
      <mesh position={[-1.1, 0.45, 0]}>
        <boxGeometry args={[0.2, 0.6, 1]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Right armrest */}
      <mesh position={[1.1, 0.45, 0]}>
        <boxGeometry args={[0.2, 0.6, 1]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Cushions */}
      <mesh position={[-0.5, 0.55, 0.05]}>
        <boxGeometry args={[0.7, 0.15, 0.7]} />
        <meshStandardMaterial color="#A0522D" roughness={0.9} />
      </mesh>
      <mesh position={[0.5, 0.55, 0.05]}>
        <boxGeometry args={[0.7, 0.15, 0.7]} />
        <meshStandardMaterial color="#A0522D" roughness={0.9} />
      </mesh>

      {/* Legs */}
      {[[-1, -0.3], [1, -0.3], [-1, 0.3], [1, 0.3]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.05, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.15, 8]} />
          <meshStandardMaterial color="#2F2F2F" metalness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

/**
 * Table 3D Model
 * A simple rectangular table with legs
 */
const TableModel = () => {
  return (
    <group position={[0, -0.3, 0]}>
      {/* Table top */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[2, 0.08, 1]} />
        <meshStandardMaterial color="#D4A574" roughness={0.6} />
      </mesh>

      {/* Table edge/rim */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.05, 0.04, 1.05]} />
        <meshStandardMaterial color="#5C4033" roughness={0.7} />
      </mesh>

      {/* Legs */}
      {[[-0.85, -0.4], [0.85, -0.4], [-0.85, 0.4], [0.85, 0.4]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.15, z]}>
          <boxGeometry args={[0.08, 0.35, 0.08]} />
          <meshStandardMaterial color="#5C4033" roughness={0.7} />
        </mesh>
      ))}

      {/* Extension leaf (partially visible) */}
      <mesh position={[1.3, 0.4, 0]}>
        <boxGeometry args={[0.5, 0.06, 0.8]} />
        <meshStandardMaterial color="#D4A574" roughness={0.6} />
      </mesh>
    </group>
  );
};

/**
 * Chair 3D Model
 * A stylish armchair with curved elements
 */
const ChairModel = () => {
  return (
    <group position={[0, -0.4, 0]} rotation={[0, Math.PI / 4, 0]}>
      {/* Seat */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.6, 0.12, 0.6]} />
        <meshStandardMaterial color="#228B22" roughness={0.8} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.65, -0.25]}>
        <boxGeometry args={[0.55, 0.5, 0.1]} />
        <meshStandardMaterial color="#228B22" roughness={0.8} />
      </mesh>

      {/* Armrests */}
      <mesh position={[-0.32, 0.5, 0]}>
        <boxGeometry args={[0.06, 0.2, 0.5]} />
        <meshStandardMaterial color="#5C4033" roughness={0.6} />
      </mesh>
      <mesh position={[0.32, 0.5, 0]}>
        <boxGeometry args={[0.06, 0.2, 0.5]} />
        <meshStandardMaterial color="#5C4033" roughness={0.6} />
      </mesh>

      {/* Cushion */}
      <mesh position={[0, 0.45, 0.05]}>
        <boxGeometry args={[0.5, 0.08, 0.5]} />
        <meshStandardMaterial color="#1E7B1E" roughness={0.9} />
      </mesh>

      {/* Central support post */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 0.25, 8]} />
        <meshStandardMaterial color="#5C4033" roughness={0.6} />
      </mesh>

      {/* Base/Star */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI * 2) / 5) * 0.25,
            0.02,
            Math.sin((i * Math.PI * 2) / 5) * 0.25,
          ]}
          rotation={[0, -(i * Math.PI * 2) / 5, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.03, 0.03, 0.2, 8]} />
          <meshStandardMaterial color="#5C4033" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
};

/**
 * Bed 3D Model
 * A platform bed with headboard
 */
const BedModel = () => {
  return (
    <group position={[0, -0.2, 0]} rotation={[0, -Math.PI / 6, 0]}>
      {/* Mattress */}
      <mesh position={[0, 0.35, 0.1]}>
        <boxGeometry args={[1.8, 0.25, 2.2]} />
        <meshStandardMaterial color="#F5F5F5" roughness={0.9} />
      </mesh>

      {/* Platform base */}
      <mesh position={[0, 0.15, 0.1]}>
        <boxGeometry args={[1.9, 0.15, 2.3]} />
        <meshStandardMaterial color="#28282B" roughness={0.7} />
      </mesh>

      {/* Headboard */}
      <mesh position={[0, 0.55, -1.05]}>
        <boxGeometry args={[1.9, 0.8, 0.1]} />
        <meshStandardMaterial color="#28282B" roughness={0.7} />
      </mesh>

      {/* Pillows */}
      <mesh position={[-0.4, 0.52, -0.7]}>
        <boxGeometry args={[0.6, 0.12, 0.4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>
      <mesh position={[0.4, 0.52, -0.7]}>
        <boxGeometry args={[0.6, 0.12, 0.4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>

      {/* Storage drawers */}
      <mesh position={[-0.7, 0.1, 0.8]}>
        <boxGeometry args={[0.4, 0.1, 0.6]} />
        <meshStandardMaterial color="#3A3A3A" roughness={0.8} />
      </mesh>
      <mesh position={[0.7, 0.1, 0.8]}>
        <boxGeometry args={[0.4, 0.1, 0.6]} />
        <meshStandardMaterial color="#3A3A3A" roughness={0.8} />
      </mesh>
    </group>
  );
};

/**
 * Main Product3DModel component
 * Selects the appropriate 3D model based on product type
 */
const Product3DModel = ({ type = "sofa" }) => {
  const groupRef = useRef();

  // Gentle floating animation for all models
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  // Memoize the model selection for performance
  const ModelComponent = useMemo(() => {
    switch (type) {
      case "table":
        return TableModel;
      case "chair":
        return ChairModel;
      case "bed":
        return BedModel;
      case "sofa":
      default:
        return SofaModel;
    }
  }, [type]);

  return (
    <group ref={groupRef}>
      <ModelComponent />
    </group>
  );
};

export default Product3DModel;