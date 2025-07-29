function generate() {
      const n = Number(document.getElementById("rows").value);
      let pattern = "";

      for (let i = 1; i <= n; i++) {

        for (let s = 1; s <= n - i; s++) {
          pattern += " ";
        }

        for (let j = 1; j <= 2 * i - 1; j++) {
          pattern += "*";
        }
        
        pattern += "\n";
      }

      document.getElementById("output").textContent = pattern;
    }