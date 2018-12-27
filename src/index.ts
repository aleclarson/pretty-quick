const produce = (a: any, b: (draft: any) => any) => b(a)
type State = {value: string}
const state: State = {value: 'test'}
produce(state, draft => {})
