// Function with optional parameter 
function funcWithOptionalPar(name: string, age?: number): void {
    console.log('Test');
    
}

// Function with default parameter
function funcWithDefaultPar(name: 'Default name', age: number): number {
    return age;
}

// Function with rest parameter
function funcWithRestParam(name: string, ...favSongs: string[]): void {
    console.log('Test');
}