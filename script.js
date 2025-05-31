const formulario = document.getElementById("form-agendamento");
const nome = document.getElementById("nome");
const celular = document.getElementById("telefone");
const modal = document.getElementById("modal-horarios");
const horario = document.getElementById("horario");
const servico = document.getElementById("servico");
const modalBtn = document.getElementById("fechar-modal");

// Impede digitar letras no campo de telefone
celular.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, ""); // remove tudo que não for número
});

function handleSubmit(event) {
  event.preventDefault();

  const nomeValor = nome.value;
  const celularValor = celular.value.replace(/\D/g, ""); // limpeza extra de garantia
  const horarioValor = horario.value;
  const servicoValor = servico.value;

  // ✅ Validação primeiro
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

  // ✅ Envia mensagem para o barbeiro
  const numeroBarbeiro = "5511991727610";
  const mensagem = `Olá, meu nome é ${nomeValor}. Quero agendar um horário às ${horarioValor} para o serviço ${servicoValor}. Meu telefone é ${celularValor}.`;
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsApp = `https://wa.me/${numeroBarbeiro}?text=${mensagemCodificada}`;
  window.open(linkWhatsApp, "_blank");
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

  listaHorarios.forEach(hora => {
  const li = document.createElement("li");
  li.textContent = hora;

  li.addEventListener("click", () => {
    horario.value = hora; // Aqui agora está tudo certo
    modal.style.display = "none";
  });

  ulLista.appendChild(li);
});

}

function closeModal() {
  modal.style.display = "none"
}

formulario.addEventListener('submit', handleSubmit);
horario.addEventListener("click", abrirModalHorarios);
modalBtn.addEventListener("click", closeModal);

