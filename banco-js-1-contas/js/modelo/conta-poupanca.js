class ContaPoupanca extends Conta{
    constructor(numero, saldo, dataAniversario){
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }
    incrementaPoupanca(){
        const data = new Date().toLocaleDateString.split('/');
        const niver = this.dataAniversario.split('/');
       if(data[0] == niver[0] && data[1] == niver[1]){
            this.saldo =+ this.saldo * 0.0687;
       }
    }


}