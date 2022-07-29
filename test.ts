type Type<T> = T extends (infer U)[] ? U : T
type test = Type<string[]> // test的类型为string
type test2 = Type<string> // test2的类型为string
