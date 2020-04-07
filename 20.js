let n = 100;
let f = BigInt(1);

for (let i = 1; i <= n; i++) {
	f = BigInt(f) * BigInt(i); 
}

console.log(f.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b)));