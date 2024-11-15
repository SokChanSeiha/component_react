import Accordion from "../components/Accordion"

function AccordionPage() {
const items = [
  {
    id: "111",
    label: "Madara",
    content: "Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well."
  },
  {
    id: "222",
    label: "Naruto",
    content: "Never underestimate me! I don't quit, and I won't run! Naruto made a declaration that he would never flee from danger or abandon his duty. While this is a fairly basic sentiment, it is also an important one that became one of the most recognizable Naruto quotes."
  },
  {
    id: "333",
    label: "Tanjrio",
    content: "Tanjiro tells Akaza: The strong protect the weak. Then the weak get stronger and help those weaker than themselves. That is the law of nature! Then, he fights him with all his power."
  }
]

  return <Accordion items={items}/>;
}

export default AccordionPage
