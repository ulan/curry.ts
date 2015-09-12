export function min<T>(a : T, b : T) : T {
  return a < b ? a : b;
}
export function max<T>(a : T, b : T) : T {
  return a < b ? b : a;
}
export function curry<A,B,C>(f : (x : A, y : B) => C) : (x : A) => (y : B) => C {
  return (x : A) => (y : B) => f (x, y);
}
export function uncurry<A, B, C>(f : (x : A) => (y : B) => C) : (x : A, y : B) => C {
  return (x : A, y : B) => f(x)(y);
}
export function id<A>(x : A) : A {
  return x;
}
export function constant<A, B>(x : A) : (x : B) => A {
  return _ => x;
}
export function flip<A, B, C>(f : (x : A) => (y : B) => C) : (y : B) => (x : A) => C {
  return (y : B) => (x : A) => f(x)(y);
}
export function flip2<A, B, C>(f : (x : A, y : B) => C) : (y : B, x : A) => C {
  return (y : B, x : A) => f(x, y);
}
export function compose<A, B, C>(g : (x : B) => C, f : (x : A) => B) {
  return (x : A) => g(f(x));
}
