package br.com.agregacao;

public class Produto {
	private float preco;
	private int tamanho;
	
	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public int getTamanho() {
		return tamanho;
	}

	public void setTamanho(int tamanho) {
		this.tamanho = tamanho;
	}

	public void vendido(){
		System.out.println("Vendido!");
	}
}
