import React from "react";
import "./getstarted.css";
import { Container } from "reactstrap";

const content = [
  {
    h3: "",
    h31: "",
    p1:
      "Competitive Programming is an interesting activity which mixes problem-solving with programming. It is not only enjoyable but also very demanded in placements. Competitive programming will make you very good at writing efficient programs quickly. If you get really serious about competitive programming, it will make you an expert in data structures and algorithms.    ",
    p2: "",
    li: "",
    name: "",
    li1: "",
    name1: "",
    li2: "",
    name2: "",
    li3: "",
    name3: "",
    li4: "",
    name4: "",
  },
  {
    h3: "So how to get started?",
    h31: "Learn a programming language",
    p1:
      "Any programming language will do. But most problems are set with C/C++ and Java programmers in mind, so knowing any one of them will be really helpful. You don't need to know really advanced concepts, like classes or generics/templates. You should just know if/else, loops, arrays, functions and have some familiarity with the standard library, like math functions, string/array operations and input/output. If you know only C, you can easily start. But at some point in time (especially when you reach advanced stages), you'll need features which most languages have but C does not. Learning C++ is very easy if you know C. I'll suggest that you start out with C and learn C++ in parallel with competitive programming. Even if you are not confident of your skills in a programming language, you can (and should) still start. Competitive programming is also a good way to practice a new language you have learned.",
    p2: "",
    li: "",
    name: "",
    li1: "",
    name1: "",
    li2: "",
    name2: "",
    li3: "",
    name3: "",
    li4: "",
    name4: "",
  },
  {
    h3: "",
    h31: "Making the first step",
    p1:
      "You'll find problems on many websites. Most websites will give you a specification and ask you to write a program implementing that. You will then have to submit your code. Your program will be automatically compiled and run and you'll be told whether it ran correctly or not. Such websites are known as online judges. You will find many online judges on the internet. Here is a small list of the most popular ones:",
    li: "https://www.hackerearth.com/",
    name: "HackerEarth",
    li1: "https://www.hackerrank.com/",
    name1: "HackerRank",
    li2: "https://www.codechef.com/",
    name2: "CodeChef",
    li3: "http://codeforces.com/",
    name3: "CodeForces",
    li4: "https://www.topcoder.com/",
    name4: "TopCoder",
    p2:
      "You should stick to just one (or maybe two) online judges when you start. Most online judges have problems categorized by difficulty levels. For each difficulty level, easier problems generally have more submissions. So you can sort problems based on the number of submissions to find the easiest ones. For beginners, I recommend Codechef. If you have never before solved a problem on an online judge, you can begin by solving the easiest problem on Codechef - Life, the Universe, and Everything.",
  },
  {
    h3: "",
    h31: "Practice",
    p1:
      "Remember that it is very important to practice. Try to solve at least one or two questions every day. It is helpful if you stay in touch with people who do competitive programming regularly. This will keep you motivated. Often while practising, you will not be able to solve some problems. Do not give up easily! Keep trying! But sometimes even after trying for hours, we are not able to solve it. In those cases, it is advisable to look at the editorials. Editorials are step-by-step explanations on how to solve a problem. Often you'll find new innovative ways of solving problems on reading them. So sometimes you should read editorials even if you have been able to solve a problem. Sometimes reading editorials is not enough to understand how to solve a problem. This is usually the case when you know how to solve it but you are not able to express your ideas as code easily. When that happens, you should try looking at others' code. Some online judges make other people's code public (like Codechef) while some don't (like SPOJ).",
    p2: "",
    li: "",
    name: "",
    li1: "",
    name1: "",
    li2: "",
    name2: "",
    li3: "",
    name3: "",
    li4: "",
    name4: "",
  },
  {
    h3: "",
    h31: "Contests",
    p1:
      "Once you solve 15 to 20 problems, you should occasionally take part in programming contests. Many websites host contests regularly.Codechef has 3 monthly contests - Long challenge, Cookoff and LunchTime. Long Challenge has 10 questions to be solved in 10 days. You should try to solve as many questions as you can (without taking hints from others). Cookoff has 5 questions to be solved in 2.5 hours. Regularly taking part in Cookoff and trying to perform better in it will increase your speed. You should not be disheartened if you are able to solve only one or two questions. This is natural when starting out. As you get better, you'll be able to solve more and more. If you are not able to solve any question, you should contact a senior and he/she will help you. When you have solved more than 50 to 75 problems, you should also start solving problems on Codeforces and taking part in Codeforces' contests. This is one of the sites where the most serious programmers of the world can be found.",
    p2: "",
    li: "",
    name: "",
    li1: "",
    name1: "",
    li2: "",
    name2: "",
    li3: "",
    name3: "",
    li4: "",
    name4: "",
  },
  {
    h3: "",
    h31: "Compilers",
    p1:
      "If you have Linux or Mac, I would advise you to use:gcc for C g++ for C++ javac for Java (both Oracle and OpenJDK are good). If you are on windows, you might want to use an IDE. Code:: Blocks is good for C and C++. Some online compilers are also available. The most well known is Ideone. Codechef has an online compiler called code-compile-run.",
    p2: "",
    li: "",
    name: "",
    li1: "",
    name1: "",
    li2: "",
    name2: "",
    li3: "",
    name3: "",
    li4: "",
    name4: "",
  },
  {
    h3: "",
    h31: "Standard library",
    p1:
      "You can often benefit a lot from the rich standard libraries offered by most programming languages. After gaining sufficient experience with a programming language, it is advisable to sift through its software libraries to see what all does it offer. For C/C++, these are good reference sites: cppreference.com, cplusplus.com's reference. For Java/Python(3.+) users, Python library reference, Java library reference. Some people realize very late that C++ offers a sort function. This is one of the most used functions in competitive programming. And of course, Google is always there. For any other query, StackOverflow may be able to help you out.",
    p2: "",
    li: "",
    name: "",
    li1: "",
    name1: "",
    li2: "",
    name2: "",
    li3: "",
    name3: "",
    li4: "",
    name4: "",
  },
];

// TOPICS //
const Topics = [
  {
    algo: "Basics of Programming",
    link1:
      "https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/?sort_by=partially%20solved&p_level=V-E",

    link2:
      "https://www.hackerrank.com/domains/algorithms/implementation/difficulty:easy/page:1",
    n1: "Basics of Input/Output",
    n2: "Implementation Challenges",
  },
  {
    algo: "Maths & Number Theory",
    link1:
      "https://www.hackerearth.com/practice/math/number-theory/basic-number-theory-1/practice-problems/?sort_by=partially%20solved&p_level=V-E",
    n1: "Basic Number Theory-1",
    link2: "https://www.codechef.com/problems/CKISSHUG",
    n2: "Kisses & Hugs",
    link3: "https://www.codechef.com/problems/CHMOD",
    n3: "Chef and Segments",
    link4: "https://www.spoj.com/problems/tag/math?sort=6",
    n4: "More Problems",
  },
  {
    algo: "Bit Masking",
    link1:
      "https://www.hackerrank.com/domains/algorithms/bit-manipulation/difficulty:easy/page:1",
    n1: "Bit Manipulation Challenges",
    link2: "https://www.spoj.com/problems/tag/bitmasks?sort=6",
    n2: "More Problems",
  },
  {
    algo: "Arrays & Strings",
    link1:
      "https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/?sort_by=solved&p_level=V-E",
    n1: "1-D Practice Problems",
    link2:
      "https://www.hackerrank.com/domains/data-structures/arrays/difficulty:easy/page:1",
    n2: "HackerRank Array Challenges",
    link3:
      "https://www.hackerrank.com/domains/algorithms/strings/difficulty:easy/page:1",
    n3: "HackerRank String Challenges",
    link4: "https://www.spoj.com/problems/SUMFOUR/",
    n4: "SUMFOUR - 4 values whose sum is 0",
    link5: "https://www.codechef.com/problems/MIKE3",
    n5: "Mike and Stamps",
    link6: "https://www.spoj.com/problems/tag/array",
    n6: " Array",
  },
  {
    algo: "Sorting",
    link1:
      "https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/practice-problems/?sort_by=solved",
    n1: "Bubble Sort",
    link2:
      "https://www.hackerrank.com/domains/algorithms/arrays-and-sorting/difficulty:easy/page:1",
    n2: "HackeRrank Sorting Challenges",
    link3: "https://www.spoj.com/problems/tag/sorting?sort=11",
    n3: "Sorting",
    link4: "https://www.codechef.com/problems/TSORT",
    n4: "Turbo Sort",
    link5: "https://www.spoj.com/problems/SBANK/",
    n5: "SBANK - Sorting Bank Accounts",
    link6: "https://www.spoj.com/problems/INVCNT/",
    n6: "INVCNT - Inversion Count",
  },
  {
    algo: "Dynamic Programming",
    link1:
      "https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/practice-problems/?sort_by=partially%20solved&p_level=E",
    n1: "Introduction to Dynamic Programming",
    link2:
      "https://www.hackerrank.com/domains/algorithms/dynamic-programming/difficulty:mediu",
    n2: "Dynamic Programming Challenges",
    link3: "https://www.spoj.com/problems/COINS/",
    n3: "Bytelandian gold coins",
    link4: "https://www.spoj.com/problems/ACODE/",
    n4: "Alphacode",
    link5: "https://www.codechef.com/DEC12/problems/CNTWAYS",
    n5: "The Uncountable Ways",
    link6: "https://www.codechef.com/APRIL13/problems/FCBARCA/",
    n6: "Barcelona Gameplay Tactics",
    link7: "https://www.codechef.com/OCT12/problems/NEWSCH/",
    n7: "The New Scheme",
  },
];

const Getstarted = (props) => {
  return (
    <Container>
      <div className="container1">
        <h1>How To Get Started</h1>
        <p style={{ textAlign: "center" }}>
          <u>"The secret of getting ahead is getting started"</u>
        </p>
        {content.map((a, i) => (
          <div className="card1">
            <h3>{a.h3}</h3>
            <h4>{a.h31}</h4>
            <p>{a.p1}</p>
            <p>
              <a href={a.li}>{a.name1}</a>
            </p>
            <p>
              <a href={a.li1}>{a.name1}</a>
            </p>
            <p>
              <a href={a.li2}>{a.name2}</a>
            </p>
            <p>
              <a href={a.li3}>{a.name3}</a>
            </p>
            <p>
              <a href={a.li4}>{a.name4}</a>
            </p>
            <p>{a.p2}</p>
            <hr />
          </div>
        ))}
        <h2>Topics</h2>
        {Topics.map((b, j) => (
          <div>
            <h4>{b.algo}</h4>
            <p>
              <a href={b.link1}>{b.n1}</a>
            </p>
            <p>
              {" "}
              <a href={b.link2}>{b.n2}</a>
            </p>
            <p>
              <a href={b.link3}>{b.n3}</a>
            </p>
            <p>
              <a href={b.link4}>{b.n4}</a>
            </p>
            <p>
              <a href={b.link5}>{b.n5}</a>
            </p>
            <p>
              <a href={b.link6}>{b.n6}</a>
            </p>
            <p>
              <a href={b.link7}>{b.n7}</a>
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Getstarted;
