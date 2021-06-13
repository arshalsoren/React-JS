import './App.css';
import logo from './logo.svg';

// FOR_ADVANCED
// import FragmentDemo from './FragmentDemo';
// import Table from './Table';
// import ParentComp from './ParentComp';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import CounterTwo from './components/CounterTwo';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorDemo from './components/ErrorDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import PortalDemo from './components/PortalDemo';
import RefsDemo from './components/RefsDemo';
import User from './components/User';
import { UserProvider } from './components/userContext';
import CompC from './components/CompC'
import PostList from './components/PostList';
import PostForm from './components/PostForm';



// FOR_BASICS
// import Greet from './components/Greet'
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello"
// import Message from "./components/Message"
// import Counter from "./components/Counter";
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      {/* JSX, PROPS, STATE/SETSTATE
      <Message />
      <Counter /> */}
      {/*<Greet name="Bruce" heroName="Batman">
        <p>Bruce Wayne is Batman.</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Kryptonite</button>
      </Greet>
      <Greet name="Arthur" heroName="Aquaman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Barry" heroName="Flash"/>
      <Welcome name="Victor" heroName="Cyborg"/>
      <Hello />*/}

      {/* EVENT-HANDLING
      <FunctionClick />
      <ClassClick />
      <EventBind /> */}

      {/* INHERITANCE (props)
      <ParentComponent /> */}

      {/* CONDITIONAL-RENDERING
      <UserGreeting /> */}

      {/* LISTS
      <NameList /> */}

      {/* USING-CSS-FOR-STYLING
      <Stylesheet primary={true}></Stylesheet>
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* FORM-HANDLING
      <Form /> */}

      {/* LIFECYCLE-METHOD_MOUNTING */}
      {/* <LifecycleA /> */}

      {/* ****** ADVANCED TOPICS STARTS HERE ****** */}

      {/* FRAGMENTS
      <FragmentDemo />
      <Table /> */}

      {/* PURE_COMPONENTS & MEMO
      <ParentComp /> */}

      {/* REFS aka reference(only works with classComponents)
      <RefsDemo />
      <FocusInput />
      <FRParentInput /> */}

      {/* <PortalDemo /> */}

      {/* ERROR-HANDLING
      <ErrorBoundary>
        <ErrorDemo heroname="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorDemo heroname="Deathstroke" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorDemo heroname="Joker" />
      </ErrorBoundary> */}

      {/* HIGHER-ORDER-COMPONENTS
      <ClickCounter name='soren' />
      <HoverCounter /> */}

      {/* RENDER-PROPS_similar-to-HOCs */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggenIn) => isLoggenIn ? 'Soren' : 'Guest'} /> */}
      {/* <CounterTwo>
      {(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>
      <CounterTwo>
      {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo> */}

      {/* CONTEXT
      <UserProvider value="soren">
        <CompC />
      </UserProvider> */}

      HTTP_GET-and-POST_REQUESTS
      {/* <PostList /> */}
      {/* <PostForm /> */}
    </div>
  );
}

export default App;