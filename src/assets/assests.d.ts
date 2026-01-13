// src/assets.d.ts

declare module "*.glb" {
  const content: string;
  export default content;
}

declare module "*.glb?url" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
