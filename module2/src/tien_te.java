import java.util.Scanner;

public class tien_te {
    public static void main(String[] args) {
        double usd;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of USD: ");
        usd = sc.nextDouble();
        double convert = usd * 23000;
        System.out.println("The converted value is " + convert + " VND");
    }
}
