public class ArraySuffle {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        
        int n = arr.length;

        for (int i = n-1; i>0; i--) {
            int j = (int) (Math.random() * (i + 1));

            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}
