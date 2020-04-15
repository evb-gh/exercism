class IsogramChecker {

    boolean isIsogram(String phrase) {
        String isogram = phrase.replaceAll("[^a-zA-Z]", "").toLowerCase();
        int i = 0;
        int j = isogram.length() - 1;

        while (i < j) {
            if (isogram.charAt(i++) == isogram.charAt(j--)) {
                return false;
            }
        }
        return true;
    }

}
