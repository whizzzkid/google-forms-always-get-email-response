/**
 * Selecting send me a copy of my response.
 */

if (!document.getElementById('emailReceipt').checked){
  document.getElementById('emailReceipt').checked = true;
  console.log("It's done... you should get your mail...");
}
