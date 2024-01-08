package aula25;

public class UtilitarioConta {
	public void imprimirContas(Conta[] contas) {
		for(int i=0; i< contas.length; i++) {
			if(contas[i] != null) {
				System.out.println("Numero da conta: " + contas[i].getNumero() + " Saldo: " + contas[i].getSaldo());
			}
		}
	}
	public void somarSaldos(Conta[] contas) {
		float saldoTotal = 0.0f;
		for(int i=0; i < contas.length; i++) {
			if(contas[i] != null) {
				saldoTotal = saldoTotal + contas[i].getSaldo();			
			}
		}
		System.out.println("O Saldo total é: " + saldoTotal);
	}
	

}
