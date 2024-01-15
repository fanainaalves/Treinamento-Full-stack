import java.util.Scanner;

public class Projeto {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.print("Digite um numero: ");
        int numero = scan.nextInt();

        if (numero < 9 && numero >= 1){
            System.out.println("Este numero tem 1 dígito.");
        } else if (numero < 100 && numero >= 10){
            System.out.println("Este numero tem 2 dígitos.");
        } else if (numero < 1000 && numero >= 100){
            System.out.println("Este numero tem 3 dígitos.");
        } else if (numero < 10000 && numero >= 1000){
            System.out.println("Este numero tem 4 dígitos.");
        } else if (numero > 100000){
            System.out.println("Este numero tem 5 dígitos ou mais.");
        }
    }
}
