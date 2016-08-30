export function capitalize (str) {
  return str.toLowerCase().replace(/(?:^|\s|-)\S/g, function (m) {
    return m.toUpperCase()
  })
}

export function humanize (str) {
  return capitalize(str.toString().replace(/[_-]/g, ' '))
}

export function dehumanize (str) {
  return str.toString().replace(' ', '_').toLowerCase()
}

export function intersperse (arr, sep) {
  if (arr.length === 0) {
    return []
  }
  return arr.slice(1).reduce(function (xs, x, i) {
    return xs.concat([sep, x])
  }, [arr[0]])
}
