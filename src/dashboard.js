
export class Plataforma {
    constructor() {
        this.contador = 0
        this.listaId = [];
        this.novaTarefa = document.getElementById("newtask");
        this.dia = new Date();
        this.data = this.dia.getDate();
        
        

        this.dataInicio = document.getElementById("dataInicio");
        this.dataFim = document.getElementById("dataFim");
        this.botaoAdd = document.getElementById("botaoAdd");
        this.addCard = document.getElementById("teladashboard");

        this.gerenciarTarefas = document.getElementById("gerenciarTarefas");

        this.titulo = document.getElementById("titulo");
        this.descricao = document.getElementById("description");
        
        this.adicionarTarefa();
        this.dev();
    }

  

    adicionarTarefa() {
        this.botaoAdd.onclick = () => {
            
           let novoHTML = `
           <div class="card cardDash border-primary col-md-6 col-xl-4" style="max-width: 18rem;" id="card-${++this.contador}">
           <img src="../img/checklists.svg" width="50" height="50" class="card-img-top" alt="...">
           <div class="card-header bg-transparent border-primary">${this.titulo.value}</div>
           <div class="card-body text-primary">
               <h5 class="card-title">Descrição</h5>
               <p class="card-text">${this.descricao.value}</p>
           </div>
           <div class="card-footer bg-transparent border-success">Data Inicio: ${this.dataInicio.value}</div>
           <div class="card-footer bg-transparent border-success">Data Fim: ${this.dataFim.value}</div>
           <div class="col-md">
               <div class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                   <div class="widget-content">
                       <div class="widget-content-outer">
                           <div class="widget-content-wrapper">
                               <div class="widget-content-left pr-2 fsize-1">
                                   <div class="widget-numbers mt-0 fsize-3 text-info" id="progress">
                                       0%</div>
                               </div>
                               <div class="widget-content-right w-100">
                                   <div class="progress-bar-xs progress">
                                       <div class="progress-bar bg-info" role="progressbar"
                                           aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"
                                           id="progress" style="width: 0%;"></div>
                                   </div>
                               </div>
                           </div>
                           <div class="widget-content-left fsize-1">
                               <div class="text-muted opacity-6">Progresso</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <button type="button" class="btn btn-dark" style="margin-bottom: 5px" onclick='confirm("Concluir tarefa?") ? document.getElementById("card-${this.contador}").remove() : ""' id="button-${this.contador}">Concluir</button>
          
           </div>`;

            
           this.listaId.push(this.contador);
          
            
           this.addCard.innerHTML += novoHTML ;
           

        }
    }

    dev() {
        this.gerenciarTarefas.onclick = () => {
            alert("App desenvolvido por @Alidejes && @Luiswh1 para a Growdev no dia 08/12/2020.")
        }
    }

    
    
    }

    new Plataforma();


