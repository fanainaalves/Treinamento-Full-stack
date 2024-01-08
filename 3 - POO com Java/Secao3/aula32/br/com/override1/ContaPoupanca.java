package br.com.override1;

public class ContaPoupanca extends ContaBancaria {
	private int diaDeRendimento;
	
	public ContaPoupanca(String cliente, int numConta, float saldo, int diaDeRendimento){
		super(cliente, numConta, saldo);
		this.diaDeRendimento = diaDeRendimento;
	}
	
	public int getDiaDeRendimento() {
		return diaDeRendimento;
	}

	public void setDiaDeRendimento(int diaDeRendimento) {
		this.diaDeRendimento = diaDeRendimento;
	}

	public void calcularNovoSaldo(float taxa){
		
		if (this.diaDeRendimento > 10) {
			this.setSaldo(this.getSaldo() + (this.getSaldo() * taxa/100));
		} else {
			this.setSaldo(((this.getSaldo() + (this.getSaldo() * taxa/100) + 1))); 
		}
	}
}
