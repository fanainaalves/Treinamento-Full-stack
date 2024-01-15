package desafio_dia1;

import java.util.Scanner;

public class DesafioDia1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("~~~~ Desafio dia 1 ~~~~");

        System.out.print("Digite um numero que seja separado por vírgula: ");
        float numero1 = scan.nextFloat();

        System.out.print("Digite outro numero que seja separado por vírgula: ");
        float numero2 = scan.nextFloat();

        float resultado = numero1 + numero2;
        System.out.println("O seu resultado é: " + resultado);
    }
}
