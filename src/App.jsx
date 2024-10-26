import {useState} from 'react';
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";


function App() {
  const [selectedTopic, setTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'compnents', 'jsx', 'props', 'state'
    setTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
  tabContent = (
    <div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
    </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected ={selectedTopic === 'components'} 
              onSelect = {() => handleSelect('components')}
              >Components
              </TabButton>
            <TabButton isSelected ={selectedTopic === 'jsx'} onSelect = {() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected ={selectedTopic === 'props'} onSelect = {() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected ={selectedTopic === 'state'} onSelect = {() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;