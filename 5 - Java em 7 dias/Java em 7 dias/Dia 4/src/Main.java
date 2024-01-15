import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Desafio A
//        for (int i = 0; i <= 100; i++){
//            if (i % 2 == 0){
//                System.out.print(i + " ");
//            }
//        }
        // Desafio B

        String frase = "Hello Word";
        for( int i = 0; i <= frase.length() - 1; i++){
            System.out.print(frase.charAt(i) + " ");
        }
//        System.out.println(Arrays.spliterator(frase));

    }
}