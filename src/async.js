async function start() {
  return await Promise.resolve('hello async')
}

start().then(console.log)

class Util {
  static id = Date.now()
}

console.log('UtilID:', Util.id)
