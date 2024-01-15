package Desafio3;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Digite o num1, op, e o num2 [Ex.: (2 * 4)]: ");
        double num1 = scan.nextDouble();
        char op = scan.next().charAt(0);
        double num2 = scan.nextDouble();

        if (op == '+'){
            System.out.print((int)num1 + num2);
        } else if (op == '-') {
            System.out.print((int)num1 - num2);
        } else if (op == '*') {
            System.out.print((int)num1 * num2);
        } else if (op == '/') {
            System.out.print((int)num1 / num2);
        } else {
            System.out.println("Formato inválido!");
        }
    }
}
