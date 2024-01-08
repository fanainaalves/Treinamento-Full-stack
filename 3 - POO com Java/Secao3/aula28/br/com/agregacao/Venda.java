package br.com.agregacao;

public class Venda {
	private Comprador c;
	private Vendedor v;
	private Produto p;
	
	public void concretizaVenda(){
		System.out.println("Venda Efetuada!");
		c.setVerba(c.getVerba() - p.getPreco());
		v.setComissao(v.getComissao() + (p.getPreco() * 0.1f));
		p.vendido();
	}
	
	public void cancelaVenda(){
		System.out.println("Venda cancelada!");
	}
}
