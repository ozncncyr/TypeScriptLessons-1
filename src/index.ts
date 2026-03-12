const age = 18;

[...Array(100).fill(null)].forEach(() => {
    console.log("Hello, TypeScript!");
});
const unusedVariable = 42;

function unusedFunction() {
  return 'Bu fonksiyon kullanılmıyor';
}
function greet(name: string): string {
    return `Hello, ${name}!`;
};

const date = new Date();
