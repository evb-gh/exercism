"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language: https://en.wikipedia.org/wiki/Guido_van_Rossum
"""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(minutes):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - minutes


def preparation_time_in_minutes(layers):
    """
    Return prep time.

    This function takes an int param representing the number of layers
    multiplies it by the PREPARATION_TIME constant and returns an int
    representing the prep time in minutes
    """
    return PREPARATION_TIME * layers


def elapsed_time_in_minutes(prep, bake):
    """
    Return elapsed cooking time.

    This function takes two int params representing the number of layers &
    the time already spent baking and returns the total elapsed minutes
    spent cooking the lasagna.
    """

    return preparation_time_in_minutes(prep) + bake


def y():
    """

    Why is the question
    return the answer
    """

    return "de-atita"
