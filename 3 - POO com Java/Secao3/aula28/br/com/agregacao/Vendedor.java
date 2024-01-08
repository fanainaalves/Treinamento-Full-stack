package br.com.agregacao;

public class Vendedor {
	private float comissao;
	
	public float getComissao() {
		return comissao;
	}

	public void setComissao(float comissao) {
		this.comissao = comissao;
	}

	public void vende(){
		System.out.println("Vendido!");
	}
}
