// Obtiene el display y el contenedor de logs
const display = document.getElementById('display');
const logsDiv = document.getElementById('logs');

// Función para agregar un valor al display
function appendValue(val) {
  display.value += val;
}

// Función para limpiar el display
function clearDisplay() {
  display.value = "";
}

// Función para calcular la operación
function calculate() {
  try {
    const expression = display.value;
    // Evalúa la expresión (nota: eval se usa aquí para simplicidad; en producción se recomienda usar métodos más seguros)
    const result = eval(expression);
    
    // Crea un log de la operación realizada
    const logEntry = document.createElement('div');
    logEntry.textContent = `${expression} = ${result}`;
    logsDiv.appendChild(logEntry);
    
    // Muestra el resultado en el display
    display.value = result;
  } catch (error) {
    alert("Operación inválida");
  }
}

// Función para limpiar los logs
function clearLogs() {
  logsDiv.innerHTML = "";
}

// Función para alternar entre modo claro y oscuro
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const toggleButton = document.getElementById("toggleTheme");
  if(document.body.classList.contains("dark-mode")){
    toggleButton.textContent = "Modo Claro";
  } else {
    toggleButton.textContent = "Modo Oscuro";
  }
}

// Listener para manejar la entrada desde el teclado
document.addEventListener('keydown', function(event) {
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];
  
  if (allowedKeys.includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === 'Enter') {
    calculate();
    clearDisplay();
  } else if (event.key === 'Backspace') {
    event.preventDefault();
    // Elimina el último carácter
    display.value = display.value.slice(0, -1);
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});
