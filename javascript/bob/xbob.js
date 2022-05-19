export const hey = (message) => {
  message = message.replace(/\s/g, '');
  
  if (isYelling(message)) {
    if (isAsking(message)) return 'Calm down, I know what I\'m doing!'
    
    return 'Whoa, chill out!';
  }

  if (isAsking(message)) return 'Sure.';
  
  if (isSilence(message)) return 'Fine. Be that way!';

  return 'Whatever.';
};

const isYelling = message => message.toUpperCase() === message && message.match(/[A-Z]+/);
const isAsking = message => message.endsWith('?');
const isSilence = message => message.length === 0;