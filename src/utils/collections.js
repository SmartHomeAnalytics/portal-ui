import * as R from 'ramda'

export const clean = object => R.pickBy(value => typeof value !== 'undefined', object)

export function secondLevelMerge(mapA, mapB) {
  const result = R.mergeAll(
    Object.keys({ ...mapA, ...mapB })
      .filter(key => key !== 'null')
      .map(key => {
        const newValue = R.mergeRight(mapA[key], clean(mapB[key]))
        return { [key]: R.equals(mapA[key], newValue) ? mapA[key] : newValue }
      }),
  )
  return R.equals(mapA, result)
    ? mapA
    : result
}
