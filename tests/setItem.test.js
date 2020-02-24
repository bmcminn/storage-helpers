
import { lsSetItem } from '../index.js'

const TEST_KEY   = 'testItem'
const TEST_VALUE = 'waffles'

test('setItem sets item', () => {
    lsSetItem(TEST_KEY, TEST_VALUE)

    let res = JSON.parse(localStorage.getItem(TEST_KEY))

    expect(res.value).toBe(TEST_VALUE)
})

