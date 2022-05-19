/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.
 */

export const hey = message => {
  const response = [
    'Sure.',
    'Whoa, chill out!',
    'Fine. Be that way!',
    'Whatever.',
    "Calm down, I know what I'm doing!",
  ];

  if (isQuestion(message)) {
    if (/[A-Z]{2}\s/.test(message)) {
      return "Calm down, I know what I'm doing!";
    } else {
      return 'Sure.';
    }
  }
  if (isYelling(message)) {
    return 'Whoa, chill out!';
  }
  if (isSilence(message)) {
    return 'Fine. Be that way!';
  }
  return 'Whatever.';
};

const isQuestion = msg => msg.trim().endsWith('?');
const isSilence = msg => msg.trim().length === 0;
const isNumbers = msg => /\d/.test(msg.trim());
const isYelling = msg => msg.toUpperCase() === msg && msg.match(/[A-Z]{2}/);
