class Tarefa {


constructor() {
    this.arrayTarefa = []
}

adicionar() {
   let tarefa = this.lerDados();

   if(this.validaCampos(tarefa) == true) {
    this.incluir(tarefa)
   }

   this.listaTabela()
}

incluir (tarefa) {
this.arrayTarefa.push(tarefa)
}


listaTabela () {
let tbody = document.getElementById('tbody')
tbody.innerText = ''
var sum = 0;
var maior = "";
var menor = "";
var media = 0;

for (let i = 0; i < this.arrayTarefa.length; i++ ){
    let tr = tbody.insertRow()


    let td_data = tr.insertCell()
    let td_atividade = tr.insertCell()
    let td_funcionario = tr.insertCell()
    let td_horainicio= tr.insertCell()
    let td_horaentrega= tr.insertCell()
    let td_horatermino = tr.insertCell()

    td_data.innerText = this.arrayTarefa[i].data.split('-').reverse().join('/')
    td_atividade.innerText = this.arrayTarefa[i].atividade
    td_funcionario.innerText = this.arrayTarefa[i].funcionario
    td_horainicio.innerText = this.arrayTarefa[i].horainicio
    td_horaentrega.innerText = this.arrayTarefa[i].horaentrega
    td_horatermino.innerText = this.arrayTarefa[i].horatermino


    td_data.classList.add('center')
    td_atividade.classList.add('center')
    td_funcionario.classList.add('center')
    td_horainicio.classList.add('center')
    td_horaentrega.classList.add('center')
    td_horatermino.classList.add('center')
    
    sum += this.arrayTarefa[i].horatermino - this.arrayTarefa[i].horainicio
    media = sum / this.arrayTarefa.length
    const xRounded = (media.toFixed(1))


//USUARIO COM MAIS ENTREGAS ATRASADAS

let atraso = {};

for (let i = 0; i < this.arrayTarefa.length; i++) {
if (this.arrayTarefa[i].horaentrega < this.arrayTarefa[i].horatermino){
  let item = this.arrayTarefa[i].funcionario;
  atraso[item] = atraso[item] ? atraso[item] + 1 : 1;
}
}

let maiorAtrasos = 0;
let funcMaisAtraso = '';

for (const key in atraso) {
  if (atraso[key] > maiorAtrasos) {
    maiorAtrasos = atraso[key];
    funcMaisAtraso = key;
  }
}

//console.log(atraso)

//USUARIO COM MAIS PONTUAL

let pontual = {};

for (let i = 0; i < this.arrayTarefa.length; i++) {
    if (this.arrayTarefa[i].horatermino <= this.arrayTarefa[i].horaentrega){
      let item = this.arrayTarefa[i].funcionario;
      pontual[item] = pontual[item] ? pontual[item] + 1 : 1;
    }
    }

//console.log(pontual)

let maisPontual = 0;
let funcMaisPontual = '';

for (const key in pontual) {
  if (pontual[key] > maisPontual) {
    maisPontual = pontual[key];
    funcMaisPontual = key;
  }
}
//console.log(funcMaisPontual)

//VERIFICAÇÃO DA DATA COM MAIOR NUMERO DE TAREFAS
let counts = {};

for (let i = 0; i < this.arrayTarefa.length; i++) {
  let item = this.arrayTarefa[i].data;
  counts[item] = counts[item] ? counts[item] + 1 : 1;
}

let maiorQuantidade = 0;
let tipoMaiorQuantidade = '';

for (const key in counts) {
  if (counts[key] > maiorQuantidade) {
    maiorQuantidade = counts[key];
    tipoMaiorQuantidade = key;
  }
}

let data_brasileira = tipoMaiorQuantidade.split('-').reverse().join('/')

const showinformation = document.getElementById('finalmente')


showinformation.innerHTML = "O dia com mais tarefas iniciadas foi " + data_brasileira + "."  + "<br>" +
                            "O funcionário com mais entregas atrasadas foi " + funcMaisAtraso + "."  + "<br>" +
                            "O funcionário mais pontual foi " + funcMaisPontual + "."  + "<br>" +
                            "O tempo médio de conclusão das tarefas foi de  " + xRounded + " h."  + "<br>"

}

}

lerDados (){
    let tarefa = {}

    tarefa.data = document.getElementById('data').value
    tarefa.atividade = document.getElementById('atividade').value
    tarefa.funcionario = document.getElementById('funcionario').value
    tarefa.horainicio = document.getElementById('horainicio').value
    tarefa.horaentrega = document.getElementById('horaentrega').value
    tarefa.horatermino = document.getElementById('horatermino').value

    return tarefa
}

validaCampos (tarefa) {
    let msg = ""

    if (tarefa.data == "") {
        msg += 'Informe a data \n'
    }

    if (tarefa.atividade == "") {
        msg += 'Informe a atividade \n'
    }

    if (tarefa.funcionario == "") {
        msg += 'Informe o funcionario \n'
    }

    if (msg != '') {
        alert(msg)
        return false
    }

    return true
}

}

var tarefa = new Tarefa();
