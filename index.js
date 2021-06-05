let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
console.log(dna,"\n");
let alteredDNA = dna.replace("GCT","AGG");
console.log(`${alteredDNA}\n`)

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if(alteredDNA.indexOf("CAT")){
  console.log("CAT gene found\n")
}else{
  console.log("CAT gene NOT found\n");
}

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(alteredDNA.slice(16,19),`\n`)


//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${alteredDNA.length} characters long.\n`);


//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(40,43).toLowerCase()}`)