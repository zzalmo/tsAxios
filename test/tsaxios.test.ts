import DummyClass from '../src/tsaxios'

/**
 * Dummy test
 */
describe('Dummy test4', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })
})

function identity<T>(arg: Array<T>): Array<T> {
  return arg
}

let output = identity<string>('myStri')

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('执行完成Promise')
    resolve('')
  }, 2000)
})
