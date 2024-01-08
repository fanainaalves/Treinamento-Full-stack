package aula24;

public class Conta {
	private String numero;
	private float saldo;
	
	public Conta(String numero, float saldo) {
		this.numero = numero;
		this.saldo = saldo;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public float getSaldo() {
		return saldo;
	}

	public void setSaldo(float saldo) {
		this.saldo = saldo;
	}

	public void creditar(float valor) {
		saldo = saldo + valor;
	}
	
	public void debitar (float valor) {
		saldo = saldo - valor;
	}
	
	public static void main(String[] args) {
		
		Conta obj1 = new Conta("12345", 234);
		Conta obj2 = new Conta("67891", 567);
		
		obj1.creditar(50);
		obj2.debitar(10);
		
		System.out.println("conta 1: " + obj1.numero + ", Saldo da conta: R$ " + obj1.saldo);
		System.out.println("conta 2: " + obj2.numero + ", Saldo da conta: R$ " + obj2.saldo);

	}

}
