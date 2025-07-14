const {sortPages} = require('./report.js')
const {test, expect} = require('@jest/globals')

test('sortPages', () => {
    const input = {
        'https://wagslane.dev': 3,
        'https://wagslane.dev/path': 2,
        'https://wagslane.dev/': 6

    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev/', 6],
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 2]
    ]
    expect(actual).toEqual(expected)
})