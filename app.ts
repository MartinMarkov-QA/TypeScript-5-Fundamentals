// TypeScript Generics
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// Implementation
console.log(getFirst<string>(['A', 'B', 'C'])); // A

console.log(getFirst<number>([1, 2, 3])); // 1

console.log(getFirst<number>([1, 'D', 3])); // Compile error 
