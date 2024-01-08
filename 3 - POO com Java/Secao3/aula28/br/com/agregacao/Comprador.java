package br.com.agregacao;

public class Comprador {
	private float verba;
	
	public float getVerba() {
		return verba;
	}

	public void setVerba(float verba) {
		this.verba = verba;
	}

	public void compra(){
		System.out.println("Comprado!");
	}
}
