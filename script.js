const formulario = document.getElementById("form-agendamento")
const nome = document.getElementById("nome")
const celular = document.getElementById("telefone")
const modal = document.getElementById("modal-horarios")
const horario = document.getElementById("horario")
const servico = document.getElementById("servico")
const modalBtn = document.getElementById("fechar-modal")

function handleSubmit(event) {
  event.preventDefault();

  const nomeValor = nome.value;
  const celularValor = celular.value;
  const horarioValor = horario.value;
  const servicoValor = servico.value;

  if (!nomeValor.trim()) {
    alert("Por favor, preencha o nome.");
    return;
  }

  if (!celularValor.trim()) {
    alert("Por favor, preencha o telefone.");
    return;
  }

  if (!horarioValor) {
    alert("Por favor, selecione o horário.");
    return;
  }

  if (!servicoValor) {
    alert("Por favor, selecione o serviço.");
    return;
  }

  // Aqui pode seguir com o agendamento...
}

function abrirModalHorarios(event) {
  const ulLista = document.getElementById("lista-horarios")
  
  modal.style.display = "flex"

  const listaHorarios = [
    "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30"
  ]

  ulLista.innerHTML = ""

  listaHorarios.forEach(horario => {

  const li = document.createElement("li");
  li.textContent = horario;
  ulLista.appendChild(li)
})

}

function closeModal() {
  modal.style.display = "none"
}

formulario.addEventListener('submit', handleSubmit);
horario.addEventListener("click", abrirModalHorarios);
modalBtn.addEventListener("click", closeModal);
