function calcular(tipo, valor) {
    if (tipo === 'acao') {
      if (valor === 'c') {
        document.querySelector('#resultado').value = ''
      }
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.querySelector('#resultado').value += valor
      }
      if (valor === '=') {
        let valor_campo = eval(document.querySelector('#resultado').value)
        document.querySelector("#resultado").value = valor_campo
      }
      
    } else if (tipo === 'valor') {
      document.querySelector('#resultado').value += valor
    }
  }