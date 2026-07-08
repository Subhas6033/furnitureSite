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
 * - curtain: Represents window curtains
 * - blinds: Represents window blinds
 * - pouf: Represents a pouf/footstool
 * - ottoman: Represents an ottoman
 *
 * Why: Instead of loading heavy GLTF models which can cause lag,
 * we use optimized geometric shapes that are smooth and performant.
 * This provides a great 3D experience without performance issues.
 */

/**
 * Curtain 3D Model
 * Represents window curtains with flowing fabric
 */
const CurtainModel = () => {
  const curtainRef = useRef();

  useFrame((state) => {
    if (curtainRef.current) {
      curtainRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <group ref={curtainRef} position={[0, 0, 0]}>
      {/* Curtain rod */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2.5, 16]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#8B4513" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Curtain left panel */}
      <mesh position={[-0.6, 0.3, 0]}>
        <boxGeometry args={[1, 1.8, 0.05]} />
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </mesh>

      {/* Curtain right panel */}
      <mesh position={[0.6, 0.3, 0]}>
        <boxGeometry args={[1, 1.8, 0.05]} />
        <meshStandardMaterial color="#F5F5DC" roughness={0.9} />
      </mesh>

      {/* Curtain folds - left */}
      {[-0.9, -0.6, -0.3].map((x, i) => (
        <mesh key={`left-${i}`} position={[x, 0.3, 0.03]}>
          <boxGeometry args={[0.05, 1.75, 0.02]} />
          <meshStandardMaterial color="#E8E8D0" roughness={0.85} />
        </mesh>
      ))}

      {/* Curtain folds - right */}
      {[0.3, 0.6, 0.9].map((x, i) => (
        <mesh key={`right-${i}`} position={[x, 0.3, 0.03]}>
          <boxGeometry args={[0.05, 1.75, 0.02]} />
          <meshStandardMaterial color="#E8E8D0" roughness={0.85} />
        </mesh>
      ))}

      {/* Curtain tie-backs */}
      <mesh position={[-0.6, -0.5, 0.1]}>
        <torusGeometry args={[0.08, 0.02, 8, 16]} />
        <meshStandardMaterial color="#8B4513" metalness={0.5} />
      </mesh>
      <mesh position={[0.6, -0.5, 0.1]}>
        <torusGeometry args={[0.08, 0.02, 8, 16]} />
        <meshStandardMaterial color="#8B4513" metalness={0.5} />
      </mesh>
    </group>
  );
};

/**
 * Blinds 3D Model
 * Represents window blinds with horizontal slats
 */
const BlindsModel = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Window frame top */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[2.2, 0.1, 0.08]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>

      {/* Window frame bottom */}
      <mesh position={[0, -1.1, 0]}>
        <boxGeometry args={[2.2, 0.1, 0.08]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>

      {/* Window frame left */}
      <mesh position={[-1.05, 0, 0]}>
        <boxGeometry args={[0.1, 2.2, 0.08]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>

      {/* Window frame right */}
      <mesh position={[1.05, 0, 0]}>
        <boxGeometry args={[0.1, 2.2, 0.08]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>

      {/* Blind slats */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh key={i} position={[0, 0.9 - i * 0.15, 0.02]}>
          <boxGeometry args={[1.9, 0.08, 0.02]} />
          <meshStandardMaterial color="#F0F0F0" roughness={0.6} />
        </mesh>
      ))}

      {/* Blind lift cord */}
      <mesh position={[0.7, 0, 0.06]}>
        <cylinderGeometry args={[0.008, 0.008, 2, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Blind head rail */}
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[2, 0.1, 0.06]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
};

/**
 * Pouf 3D Model
 * A round pouf/footstool with soft appearance
 */
const PoufModel = () => {
  return (
    <group position={[0, -0.3, 0]}>
      {/* Main body - rounded top */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.5, 0.45, 0.5, 24]} />
        <meshStandardMaterial color="#E2725B" roughness={0.85} />
      </mesh>

      {/* Top cushion */}
      <mesh position={[0, 0.52, 0]}>
        <cylinderGeometry args={[0.48, 0.48, 0.08, 24]} />
        <meshStandardMaterial color="#D2694A" roughness={0.9} />
      </mesh>

      {/* Bottom base */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.04, 24]} />
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </mesh>

      {/* Decorative ring */}
      <mesh position={[0, 0.35, 0]}>
        <torusGeometry args={[0.46, 0.02, 8, 32]} />
        <meshStandardMaterial color="#C19A6B" roughness={0.6} />
      </mesh>

      {/* Stitching detail lines */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(angle) * 0.35,
            0.25,
            Math.sin(angle) * 0.35
          ]}
          rotation={[Math.PI / 2, 0, angle]}
        >
          <boxGeometry args={[0.02, 0.4, 0.02]} />
          <meshStandardMaterial color="#B87333" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
};

/**
 * Ottoman 3D Model
 * A cushioned ottoman with storage appearance
 */
const OttomanModel = () => {
  return (
    <group position={[0, -0.3, 0]}>
      {/* Main body */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[0.9, 0.5, 0.9]} />
        <meshStandardMaterial color="#228B22" roughness={0.85} />
      </mesh>

      {/* Top cushion */}
      <mesh position={[0, 0.52, 0]}>
        <boxGeometry args={[0.85, 0.08, 0.85]} />
        <meshStandardMaterial color="#1E7B1E" roughness={0.9} />
      </mesh>

      {/* Base/feet */}
      {[[-0.35, -0.35], [0.35, -0.35], [-0.35, 0.35], [0.35, 0.35]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.02, z]}>
          <cylinderGeometry args={[0.04, 0.04, 0.04, 8]} />
          <meshStandardMaterial color="#2F2F2F" metalness={0.5} />
        </mesh>
      ))}

      {/* Tufted buttons */}
      {[[-0.2, 0.52, -0.2], [0.2, 0.52, -0.2], [-0.2, 0.52, 0.2], [0.2, 0.52, 0.2]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#166116" roughness={0.8} />
        </mesh>
      ))}

      {/* Front detail line */}
      <mesh position={[0, 0.25, 0.46]}>
        <boxGeometry args={[0.7, 0.3, 0.02]} />
        <meshStandardMaterial color="#1A6B1A" roughness={0.85} />
      </mesh>
    </group>
  );
};

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
      case "curtain":
        return CurtainModel;
      case "blinds":
        return BlindsModel;
      case "pouf":
        return PoufModel;
      case "ottoman":
        return OttomanModel;
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