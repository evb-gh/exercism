class RaindropConverter {

    String convert(int number) {
        String raindrops = "";
        if (number % 3 == 0) raindrops += "Pling";
        if (number % 5 == 0) raindrops += "Plang";
        if (number % 7 == 0) raindrops += "Plong";
        return raindrops.isEmpty() ? String.valueOf(number) : raindrops;
    }
}
