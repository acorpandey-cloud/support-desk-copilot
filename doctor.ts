// Run with: node doctor.ts
// Proves two things: Node 24 or newer is the active version, and Node can run .ts files itself.
const major = Number(process.versions.node.split('.')[0]);
const typescript = process.features.typescript; // 'strip' means Node removes the types and runs the file

console.log(major >= 24 ? 'OK   Node 24 or newer' : `FAIL Node ${major} is active: run nvm use 24`);
console.log(typescript === 'strip' ? 'OK   Node runs .ts files directly' : `FAIL type stripping is ${typescript}`);
