// https://github.com/staltz/zii

export function s(){

  Object.defineProperty(
    Object.prototype,
    's',
    {
      value: function(f){
        return f(this.valueOf())
      },
      writable: true,
      configurable: true,
    }
  )
}
