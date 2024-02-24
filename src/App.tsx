import { Btn, Txt } from "./elements";

import "./App.css/";

function App() {
  const fire = () => console.log("test");
  return (
    <main className="main">
      <Btn.Icon icon="IconButton" />
      <Btn.Basic label="Basic Button" onClick={() => fire()} />
      <Txt.H1>Title</Txt.H1>
      <Txt.H2>Sub Title</Txt.H2>
      <Txt.H3>test</Txt.H3>
      <Txt.Paragraph>
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sun"
      </Txt.Paragraph>
    </main>
  );
}

export default App;
