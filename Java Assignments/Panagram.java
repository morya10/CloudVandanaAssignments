import java.util.Scanner;

public class Panagram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence to check for pangram: ");
        String str = sc.nextLine().toLowerCase();
        boolean isPangram = isPanagram(str);
        if (isPangram) {
            System.out.println("The given sentence is panagram");
        }
        else{
            System.out.println("the given sentence is not panagram");
        }
    }

    public static boolean isPanagram(String str){
        if (str.length() < 26) {
            return false;
        }
        else{
            for (char ch = 'a'; ch <= 'z'; ch++) {
                if (str.indexOf(ch) < 0) {
                    return false;
                }
            }

        }
        return true;

    }

}
