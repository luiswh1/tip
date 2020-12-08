import { Login } from './login'
import { Plataforma } from './dashboard'

class App {
    constructor() {
        this.inputEmail = document.getElementById("email");
        this.inputPassword = document.getElementById("password");
        this.buttonLogin = document.getElementById("buttonLogin");
        this.buttonLogout = document.getElementById("logout")
        this.page1 = document.getElementById("page1");


        
        this.page2 = document.getElementById("page2");
        
       
        

        this.acessar();
        this.logout();
        
        
    }

    acessar() {
        this.buttonLogin.onclick = () => {
            this.validarDados();
        }
    }

    logout() {
        this.buttonLogout.onclick = () => {
            this.page2.style.display = "none";
            this.page1.style.display = "block";
        }
    }

    validarDados() {
        if (this.buscarUsuario(this.inputEmail.value, this.inputPassword.value)) {
            this.salvar();
            this.page1.style.display = "none";
            this.page2.style.display = "block";
            return;  

        } else {
            alert("Usuario ou Senha invalidos");
            return;
        }
    }

    salvar() {
        localStorage.setItem("Usuario", JSON.stringify(this.inputEmail.value));
    }

    buscarUsuario(email, senha) {
        let login = new Login();
        let user = login.user.find(f => f.email === email && f.senha === senha);
        if (user === undefined) {
            return false;
        }
        return true;
    }
    
    
}

new App();
new Plataforma();


