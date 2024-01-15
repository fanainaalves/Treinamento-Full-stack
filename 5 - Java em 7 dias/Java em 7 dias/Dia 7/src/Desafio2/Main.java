package Desafio2;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Digite um numero: ");
        int num = scan.nextInt();

        if(num % 2 == 1){
            System.out.println("Impar");
        } else if (num % 2 == 0 && num >= 2 || num <= 5){
            System.out.println("A");
        } else if (num % 2 == 0 && num >= 6 || num <= 20){
            System.out.println("B");
        } else if (num % 2 == 0 && num > 20){
            System.out.println("C");
        }
    }
}
