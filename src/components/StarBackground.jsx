import { useEffect, useState, useRef } from "react";

// Neural network/graph animation background (fixed viewport)
const NODE_COUNT_DIVISOR = 12000; // Controls density
const NODE_RADIUS_RANGE = [2, 4]; // px
const EDGE_DISTANCE = 120; // px, max distance to connect nodes
const COLORS = ["#7f9cf5", "#a78bfa", "#f1f5f9", "#38bdf8"]; // blue, purple, white, cyan

export const StarBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const animationRef = useRef();

  // Set viewport size and generate nodes
  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Generate nodes when viewport changes
  useEffect(() => {
    if (!viewport.width || !viewport.height) return;
    const nodeCount = Math.floor((viewport.width * viewport.height) / NODE_COUNT_DIVISOR);
    const arr = [];
    for (let i = 0; i < nodeCount; i++) {
      arr.push({
        id: i,
        x: Math.random() * viewport.width,
        y: Math.random() * viewport.height,
        r: Math.random() * (NODE_RADIUS_RANGE[1] - NODE_RADIUS_RANGE[0]) + NODE_RADIUS_RANGE[0],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        dx: (Math.random() - 0.5) * 0.5, // faster drift
        dy: (Math.random() - 0.5) * 0.5,
      });
    }
    setNodes(arr);
  }, [viewport]);

  // Animate nodes gently
  useEffect(() => {
    if (!nodes.length) return;
    let raf;
    const animate = () => {
      setNodes(prevNodes =>
        prevNodes.map(node => {
          let nx = node.x + node.dx;
          let ny = node.y + node.dy;
          // Bounce off edges
          if (nx < 0 || nx > viewport.width) node.dx *= -1;
          if (ny < 0 || ny > viewport.height) node.dy *= -1;
          nx = Math.max(0, Math.min(viewport.width, nx));
          ny = Math.max(0, Math.min(viewport.height, ny));
          return { ...node, x: nx, y: ny };
        })
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    animationRef.current = raf;
    return () => cancelAnimationFrame(raf);
  }, [nodes, viewport]);

  // Find edges (pairs of nodes within EDGE_DISTANCE)
  const edges = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < EDGE_DISTANCE) {
        edges.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          opacity: 0.12 + 0.18 * (1 - dist / EDGE_DISTANCE),
        });
      }
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-0"
      style={{ minWidth: '100vw', minHeight: '100vh' }}
    >
      <svg
        width={viewport.width}
        height={viewport.height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: viewport.width,
          height: viewport.height,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {/* Edges */}
        {edges.map((edge, idx) => (
          <line
            key={idx}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="#a5b4fc"
            strokeWidth={1}
            opacity={edge.opacity}
          />
        ))}
        {/* Nodes */}
        {nodes.map(node => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
            opacity={0.18}
          />
        ))}
      </svg>
    </div>
  );
};
