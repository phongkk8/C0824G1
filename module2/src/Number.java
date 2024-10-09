import java.util.Scanner;

public class Number {
    public static void main(String[] args) {
        short number;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        number = sc.nextShort();
        if (number >= 0 && number <= 10) {
            switch (number) {
                case 0:
                    System.out.println("Zero");
                    break;
                case 1:
                    System.out.println("One");
                    break;
                case 2:
                    System.out.println("Two");
                    break;
                case 3:
                    System.out.println("Three");
                    break;
                case 4:
                    System.out.println("Four");
                    break;
                case 5:
                    System.out.println("Five");
                    break;
                case 6:
                    System.out.println("Six");
                    break;
                case 7:
                    System.out.println("Seven");
                    break;
                case 8:
                    System.out.println("Eight");
                    break;
                case 9:
                    System.out.println("Nine");
                    break;
                case 10:
                    System.out.println("Ten");
                    break;
            }

        }
        if (number > 10 && number <= 20) {
            switch (number) {
                case 11:
                    System.out.println("eleven");
                    break;
                case 12:
                    System.out.println("twelve");
                    break;
                case 13:
                    System.out.println("thirteen");
                    break;
                case 14:
                    System.out.println("fourteen");
                    break;
                case 15:
                    System.out.println("fifteen");
                    break;
                case 16:
                    System.out.println("sixteen");
                    break;
                case 17:
                    System.out.println("seventeen");
                    break;
                case 18:
                    System.out.println("eighteen");
                    break;
                case 19:
                    System.out.println("nineteen");
                    break;
                case 20:
                    System.out.println("twenty");
                    break;
            }
        }
        if (number > 20 && number < 100) {
            String numberString = String.valueOf(number);
            String number1 = "";
            String number2 = "";
            switch (numberString.charAt(0)) {
                case '2':
                    number1 = "twenty";
                    break;
                case '3':
                    number1 = "thirty";
                    break;
                case '4':
                    number1 = "fourty";
                    break;
                case '5':
                    number1 = "fifty";
                    break;
                case '6':
                    number1 = "sixty";
                    break;
                case '7':
                    number1 = "seventy";
                    break;
                case '8':
                    number1 = "eighty";
                    break;
                case '9':
                    number1 = "ninety";
                    break;

            }
            switch (numberString.charAt(1)) {
                case '0':
                    number2 = "zero";
                    break;
                case '1':
                    number2 = "one";
                    break;
                case '2':
                    number2 = "two";
                    break;
                case '3':
                    number2 = "three";
                    break;
                case '4':
                    number2 = "four";
                    break;
                case '5':
                    number2 = "five";
                    break;
                case '6':
                    number2 = "six";
                    break;
                case '7':
                    number2 = "seven";
                    break;
                case '8':
                    number2 = "eight";
                    break;
                case '9':
                    number2 = "nine";
                    break;
            }
            System.out.println(number1 + " " + number2);
        }
        if (number >= 100 && number < 1000) {
            String numberString = String.valueOf(number);
            String number1 = "";
            String number2 = "";
            String number3 = "";
            switch (numberString.charAt(0)) {
                case '1':
                    number1 = "one hundred";
                    break;
                case '2':
                    number1 = "two hundred";
                    break;
                case '3':
                    number1 = "three hundred";
                    break;
                case '4':
                    number1 = "four hundred";
                    break;
                case '5':
                    number1 = "five hundred";
                    break;
                case '6':
                    number1 = "six hundred";
                    break;
                case '7':
                    number1 = "seven hundred";
                    break;
                case '8':
                    number1 = "eight hundred";
                    break;
                case '9':
                    number1 = "nine hundred";
            }
            if (numberString.charAt(1) == '0' && numberString.charAt(2) == '0') {
                System.out.println(number1);
            }
            if (numberString.charAt(1) == '0' && numberString.charAt(2) != '0') {
                //   number1="";
                switch (numberString.charAt(2)) {
                    case '1':
                        number3 = "one";
                        break;
                    case '2':
                        number3 = "two";
                        break;
                    case '3':
                        number3 = "three";
                        break;
                    case '4':
                        number3 = "four";
                        break;
                    case '5':
                        number3 = "five";
                        break;
                    case '6':
                        number3 = "six";
                        break;
                    case '7':
                        number3 = "seven";
                        break;
                    case '8':
                        number3 = "eight";
                        break;
                    case '9':
                        number3 = "nine";
                        break;
                }
                System.out.println(number1 + " and " + number3);
            }
            if (numberString.charAt(1) != '0' && numberString.charAt(2) != '0') {
                switch (numberString.charAt(1)) {
                    case '2':
                        number2 = "twenty";
                        break;
                    case '3':
                        number2 = "thirty";
                        break;
                    case '4':
                        number2 = "fourty";
                        break;
                    case '5':
                        number2 = "fifty";
                        break;
                    case '6':
                        number2 = "sixty";
                        break;
                    case '7':
                        number2 = "seventy";
                        break;
                    case '8':
                        number2 = "eighty";
                        break;
                    case '9':
                        number2 = "ninety";
                        break;

                }
                switch (numberString.charAt(2)) {
                    case '0':
                        number3 = "zero";
                        break;
                    case '1':
                        number3 = "one";
                        break;
                    case '2':
                        number3 = "two";
                        break;
                    case '3':
                        number3 = "three";
                        break;
                    case '4':
                        number3 = "four";
                        break;
                    case '5':
                        number3 = "five";
                        break;
                    case '6':
                        number3 = "six";
                        break;
                    case '7':
                        number3 = "seven";
                        break;
                    case '8':
                        number3 = "eight";
                        break;
                    case '9':
                        number3 = "nine";
                        break;
                }
                System.out.println(number1 + " and " + number2 + number3);
            }
        } else System.out.println("Out Of Ability");
    }
}