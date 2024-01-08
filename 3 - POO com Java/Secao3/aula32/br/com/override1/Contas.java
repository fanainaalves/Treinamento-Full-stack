package br.com.override1;

public class Contas {
	public static void main(String[] args) {
		ContaBancaria obj1 = new ContaBancaria("Jackson", 123, 2000);
		obj1.mostrarDadosDaConta();
		obj1.depositar(1500);
		obj1.mostrarDadosDaConta();
		obj1.sacar(50500);
		obj1.mostrarDadosDaConta();
		System.out.println("=====================================");
		
		// ===================
		
		ContaPoupanca obj2 = new ContaPoupanca("Joca", 456, 7000, 3);
		obj2.depositar(1500);
		obj2.mostrarDadosDaConta();
		obj2.calcularNovoSaldo(4);
		obj2.mostrarDadosDaConta();
		obj2.sacar(50500);
		obj2.mostrarDadosDaConta();
		System.out.println("=====================================");
		
		// ====================
		
		ContaEspecial obj3 = new ContaEspecial("Jose", 987, 8000, 1000);
		obj3.depositar(1500);
		obj3.mostrarDadosDaConta();
		obj3.sacar(10000);
		obj3.mostrarDadosDaConta();
		obj3.sacar(10000);
		obj3.mostrarDadosDaConta();
		
	}
}
