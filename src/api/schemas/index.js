import { schema } from 'normalizr'

export const test = new schema.Entity('tests')
export const testList = ({
  data: new schema.Array(test),
})
