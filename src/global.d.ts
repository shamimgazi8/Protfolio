// src/global.d.ts
import * as THREE from "three";

export {};

declare module "*.glb";
declare module "*.png";
declare module "*.jpg";

// This tells TS that MeshLine is a valid component for React-Three-Fiber
declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
