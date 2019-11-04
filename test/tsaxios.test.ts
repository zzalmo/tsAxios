import DummyClass from '../src/tsaxios'

/**
 * Dummy test
 */
describe('Dummy test1', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })
})
