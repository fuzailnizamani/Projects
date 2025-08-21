document.getElementById("fileInput").addEventListener('change', function(event) {
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("fileContent").textContent = `
      Total characters: ${e.target.result.length}
      Total words: ${e.target.result.split(" ").length}
      Total lines: ${e.target.result.split("\n").length}`;
    }
    reader.readAsText(file);
  }
})