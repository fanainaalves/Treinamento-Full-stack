import java.text.NumberFormat;

public class Main {
    public static void main(String[] args) {
        NumberFormat pound = NumberFormat.getCurrencyInstance();
        String productValue = pound.format(120.80);
        System.out.println(productValue);

    }
}