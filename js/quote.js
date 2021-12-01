const quotes = [
    {
        quote: 
         "10명중 1명, 운이 좋다면 2명은 나를 이유없이 좋아하고 또 그만큼은 나를 이유없이 싫어한다. 그리고 그 외 나머지는 나에게 정말 관심이 없다. 그러니까 하고싶은대로 하고 살라.",
        author: "KDK '눈치를 많이 보는 습관 줄이기' 중에서",
    },
    {
        quote:"뭔가 해보고 후회하는 것이, 아무것도 하지않고 후회도 않는 것 보다 낫다.",
        author:"KDK '도전에 대하여' 중에서",
    },
    {
        quote:"처음부터 잘하는 사람은 정말 거의 없다. 누구나 나와 같은 어려움을 겪었을 것이다. 두려워 말라.",
        author:"KDK ' 도전에 대하여' 중에서",
    },
    {
        quote:"책은 생각보다 많은 부분에서 지혜를 가져다 주고, 운동은 그 지혜를 더욱 잘 사용하게 해준다.",
        author:"KDK ' 오늘부터 시작하는 좋은 습관' 중에서",
    },
    {
        quote:"매일 감사하자",
        author:"침착맨",
    },
    {
        quote:"오히려 좋아",
        author:"침착맨",
    },
    {
        quote:"괜찮다 잘 될거다.",
        author:"",
    },
    {
        quote:"잘 하고 있다",
        author:"",
    },
    {
        quote:"그냥 하다보면 뭐든 된다",
        author:"KDK ' 생각 멈추기 연습' 중에서",
    },
    {
        quote:"즐겁다 즐거워!!",
        author:"",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;