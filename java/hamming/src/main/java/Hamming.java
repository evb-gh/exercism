class Hamming {

    private char [] left;
    private char [] right;

    Hamming(String leftStrand, String rightStrand) {
        // throw new UnsupportedOperationException("Delete this statement and write your own implementation.");
        if (leftStrand.isEmpty() && !rightStrand.isEmpty()) {
            throw new IllegalArgumentException("left strand must not be empty.");
        }
        if (rightStrand.isEmpty() && !leftStrand.isEmpty() ) {
            throw new IllegalArgumentException("right strand must not be empty.");
        }
        if (leftStrand.length() != rightStrand.length()){
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
        left = leftStrand.toCharArray();
        right = rightStrand.toCharArray();
    }

    int getHammingDistance() {
        // throw new UnsupportedOperationException("Delete this statement and write your own implementation.");
        int dist = 0;

        for (int i = 0; i < left.length; i++){
            if (left[i] != right[i]) {
                dist++;
            }
        }
        return dist;
    }

}
