
let i = 0;
while (true) {
   i++;
   const question = prompt("Please input 'break' or 'continue'");

   if (question === 'break') {
      break
   } else if (question === 'continue') {
      continue
   }

   alert(i);

}