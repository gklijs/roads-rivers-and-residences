import { Universe } from "game-of-life-3d";

export interface IModel {
  init(universe: Universe, shape: Shape): void;
  updateCells(births: Uint32Array, deaths: Uint32Array): void;
  render(): void;
  destroy(): void;
}

export enum Shape {
  square,
  circle
}
