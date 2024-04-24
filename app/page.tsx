import { SuggestionForm } from "./components/suggestionForm";
export default function Page() {
  return (
    <>
      <h1>Welcome to ELI5 to 101</h1>
      <h2>What the heck is ELI5 to 101?</h2>
      <p>
        "ELI5 to 101" is a website dedicated to simplifying complex technology
        concepts and making them accessible to everyone, from kindergarteners to
        college students. At work, I often find myself whiteboarding something
        and enjoying explaining things to my colleagues in a way that is
        digestable by a total novice. By publishing these explanations, I am
        challinging myself to deepen my own understanding of these concepts and
        grow as a writer, if others can learn from this resource it's a bonus.
      </p>
      <h2>What is ELI5?</h2>
      <p>
        "ELI5" stands for "Explain Like I'm 5."
        <br />
        <br />
        It's a popular concept on the internet where complex topics are broken
        down into simple, easy-to-understand explanations that even a
        five-year-old could grasp. Often times the results of an ELI5 are closer
        to the 101 level readings I'm working on, thus I have made an effort to
        write a true ELI5.
        <br />
        <br />
        In the "ELI5" sections of each post, I provide genuine,
        kindergarten-level explanations of technology concepts, sometimes
        accompanied by simple diagrams. The goal is to lay a solid foundation
        for understanding by using analogies, everyday examples, and plain
        language. By starting with the basics, readers can build their knowledge
        gradually and confidently.
      </p>
      <h2>
        Why are you explaining [DNS,Git,Cloud,Containers...] to five year olds?
      </h2>
      <p>
        To be clear, I'm not actually targeting five-year-olds with this
        website. The goal is to make complex technology concepts accessible and
        understandable to a wide audience, regardless of their technical
        background. By simplifying something like VLANs to "putting a sticker on
        toys, and only toys with the same color sticker can talk, even if
        they're all in the same room," I'm creating an extremely relatable and
        easy-to-grasp explanation.
        <br />
        <br />
        By using analogies, everyday examples, and plain language, I aim to
        create a resource that makes learning about technology engaging,
        accessible, and approachable to even the most novice among us. Whether
        you're a student, a professional looking to expand your knowledge, or
        simply someone curious about how things work, the "ELI5" approach can
        help you build a solid foundation of understanding and confidence.
      </p>
      <h2>
        Wait, I have an idea! You should do a post on
        [DNS,Git,Cloud,Containers...]
      </h2>
      <p>
        Do you have a technology concept you'd like me to break down and explain
        in simple terms? I'm always looking for new ideas and suggestions from
        readers. If there's a topic you'd like me to cover in an "ELI5 to 101"
        post, please let me know by submitting your idea using the form below.
        I'll do my best to create content that addresses your interests and
        helps you understand the concepts you're curious about.
      </p>
      <SuggestionForm />
    </>
  );
}
