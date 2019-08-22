declare global {
  /**
   * Unpacking type `T` from `T[]`
   */
  type Unpack<T> = T extends (infer U)[] ? U : T
}
