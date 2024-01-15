import java.util.Scanner;

public class Main {
   public int resultado;

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("~~~~~~~~ Calculadora de Soma ~~~~~~~~");

        System.out.print("Digite o primeiro número: ");
        int numero1 = scan.nextInt();

        System.out.print("Digite o segundo número: ");
        int numero2 = scan.nextInt();

        int resultado = numero1 + numero2;
        System.out.print("O resultado de " + numero1 + " + " + numero2 + " é = " + resultado);
    }
}