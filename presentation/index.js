// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Layout,
  Fill
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  markdown: require("../assets/markdown.png"),
  logo: require("../assets/logo.png"),
  components1: require("../assets/components1.png"),
  components2: require("../assets/components2.png"),
  apis1: require("../assets/apis1.png"),
  apis2: require("../assets/apis2.png"),
  apis3: require("../assets/apis3.png"),
  apps: require("../assets/apps.png"),
  widget: require("../assets/widget.png"),
  basics: require("../assets/basics.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  pt: "#2E3842",
  positive: "green",
  negative: "red"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Getting started with
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            React Native
          </Text>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary" notes="Include some stuff about my background">
          <Heading size={1} textColor="tertiary">About Me</Heading>
          <Heading size={1} textColor="secondary">Rob Walker</Heading>
          <Heading size={6} textColor="secondary">@robwalkerco</Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">CTO/Co-Founder at Papertrail</Heading>
        </Slide>

        <Slide bgColor="pt">
          <Image src={images.logo} width={800} />
        </Slide>

        <Slide bgColor="pt" textColor="quartenary" notes="<p>Talk about the cool tech we are using behind the scenes</p><p>Laravel, MongoDB and MySql</p><p>Websockets, AWS, Angular, React Native</p>">
          <Heading size={6} textColor="primary">SAAS platform for safety inspections</Heading>
          <List>
            <ListItem>API</ListItem>
            <ListItem>Web application</ListItem>
            <ListItem>iOS and Android apps</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary">Coming up</Heading>
          <List>
            <ListItem>Intro to React and React Native</ListItem>
            <ListItem>What can be built</ListItem>
            <ListItem>What we built</ListItem>
            <ListItem>Mobile app options</ListItem>
            <ListItem>Demo</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="So what is React">
          <Heading size={1} textColor="tertiary" fit>Intro to React Native</Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              React Native is a framework for building native apps using React
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="Lets look at a simple React component">
          <Heading size={1} textColor="tertiary" fit>Intro to React</Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              React is a JavaScript library for creating user interfaces
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="<p>Components render simple functions that return JSX</p><p>Lifecycle hooks</p><p>Uses a shadow DOM for speed</p><p>Focuses on the UI</p>">
          <CodePane
            textSize={22}
            transition={[]}
            lang="jsx"
            source={require("raw-loader!../assets/react.example")}
          />
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="<p>Uses props to pass values down to components</p><p>Simple to add conditional logic into the JSX</p><p>Composed from other components.</p>">
          <CodePane
            textSize={22}
            transition={[]}
            lang="jsx"
            source={require("raw-loader!../assets/react2.example")}
          />
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary" fit>Component Lifecycle</Heading>
          <List>
            <ListItem>constructor</ListItem>
            <ListItem>componentWillMount</ListItem>
            <ListItem>render</ListItem>
            <ListItem>componentDidMount</ListItem>
            <ListItem>componentWillReceiveProps</ListItem>
            <ListItem>shouldComponentUpdate</ListItem>
            <ListItem>componentWillUpdate</ListItem>
            <ListItem>render</ListItem>
            <ListItem>componentDidUpdate</ListItem>
            <ListItem>componentWillUnmount</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="The core components are very customisable and can be used to create most of an app">
          <Heading size={1} textColor="tertiary" fit>So, React Native</Heading>
          <List>
            <ListItem><S type="strikethrough">Write Once, Run Anywhere</S></ListItem>
            <ListItem>Learn Once, Write Everywhere</ListItem>
            <ListItem>Easily support platform variations</ListItem>
            <ListItem>Provides many core components</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary" notes="Some platform specific, but most not.">
          <Layout>
            <Fill>
              <Image src={images.components1} height={650} />
            </Fill>
            <Fill>
              <Image src={images.components2} height={614} />
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="<p>Live reload, Hot Reload, chrome debugging, profiling, CLI tooling, code-push</p><p>iOS, Android, windows 10/UWP, tvOS, macOS, electron, web</p>">
          <List>
            <ListItem>Exposes many device APIs</ListItem>
            <ListItem>Easily expose additional device APIs</ListItem>
            <ListItem>Good developer experience</ListItem>
            <ListItem>Support for many platforms</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.apis1} height={450} />
            </Fill>
            <Fill>
              <Image src={images.apis2} height={450} />
            </Fill>
            <Fill>
              <Image src={images.apis3} height={400} />
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="<p>Live reload, Hot Reload, chrome debugging, profiling, CLI tooling, code-push</p><p>iOS, Android, windows, Apple Watch, Apple TV, desktop, web</p>">
          <Heading size={1} textColor="tertiary">Magic?</Heading>
          <Image src={images.basics} height={450} />
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="<p>Components render simple functions that return JSX</p><p>Uses a shadow DOM for speed</p><p>Provides component lifecycle hooks</p><p>Focuses on the UI</p>">
          <CodePane
            textSize={22}
            transition={[]}
            lang="jsx"
            source={require("raw-loader!../assets/reactnative.example")}
          />
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="<p>Styles are managed from the JS. Allows styles to easily be themed or extended</p>">
          <CodePane
            textSize={22}
            transition={[]}
            lang="jsx"
            source={require("raw-loader!../assets/react3.example")}
          />
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary" fit>What can you build?</Heading>
            <List>
              <ListItem>Anything that can be built nativly</ListItem>
              <ListItem>Use core APIs and views or create your own custom modules</ListItem>
              <ListItem>(Native experience required for custom modules!)</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="Just a selection of some of the higher profile apps">
          <Heading size={1} textColor="tertiary" fit>You are in good company</Heading>
          <Image src={images.apps} height={550} />
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary" fit>What we built?</Heading>
            <List>
              <ListItem>Initially an iOS app, followed by Android</ListItem>
              <ListItem>Offline syncing/caching ability</ListItem>
              <ListItem>Camera/barcode scanning</ListItem>
              <ListItem>Camera roll</ListItem>
              <ListItem>Native tooling (Fastlane, cocoa pods, Fabric, Crashlitics)</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary" notes="Follow slide by some live demo of the app">
          <Heading size={1} textColor="tertiary" fit>How long did it take?</Heading>
            <List>
              <ListItem>iOS, 6 months from start to production</ListItem>
              <ListItem>(Includes learning React & React Native)</ListItem>
              <Appear>
                <ListItem>Android took 2 weeks!</ListItem>
              </Appear>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary" fit>Mobile development options</Heading>
            <List>
              <ListItem>Cordova packaged HTML/JS apps</ListItem>
              <ListItem>Native apps</ListItem>
              <ListItem>React Native apps</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary" fit>Cordova packaged HTML/JS apps</Heading>
            <List>
              <ListItem textColor="positive">+ Cross-platform</ListItem>
              <ListItem textColor="positive">+ Simple to develop</ListItem>
              <ListItem textColor="negative">- Limited device API access</ListItem>
              <ListItem textColor="negative">- No native view elements</ListItem>
              <ListItem textColor="negative">- Poor performance</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary">Native apps</Heading>
            <List>
              <ListItem textColor="positive">+ Full performance</ListItem>
              <ListItem textColor="positive">+ Full native access</ListItem>
              <ListItem textColor="negative">- Need to learn additional language</ListItem>
              <ListItem textColor="negative">- Need different app for each platform</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary">React Native</Heading>
            <List>
              <ListItem textColor="positive">+ Full native access</ListItem>
              <ListItem textColor="positive">+ Only need to know JavaScript</ListItem>
              <ListItem textColor="positive">+ Great developer experience</ListItem>
              <ListItem textColor="negative">- Performance not always as good as native</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary">Demo time!</Heading>
            <List>
              <ListItem>Init a project</ListItem>
              <ListItem>Run on simulator</ListItem>
              <ListItem>Live reload</ListItem>
              <ListItem>Hot reload</ListItem>
              <ListItem>Debug</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary">Summary</Heading>
            <List>
              <ListItem>React</ListItem>
              <ListItem>React Native</ListItem>
              <ListItem>What can be built</ListItem>
              <ListItem>What we built</ListItem>
              <ListItem>Current mobile app options</ListItem>
              <ListItem>Demo</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary">Resources</Heading>
            <List>
              <ListItem>facebook.github.io/react-native</ListItem>
              <ListItem>github.com/jondot/awesome-react-native</ListItem>
              <ListItem>Wes Bos - reactforbeginners.com</ListItem>
            </List>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary" fit>Questions?</Heading>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={1} textColor="tertiary" fit>Thank you</Heading>
          <List>
            <ListItem>Slides - react-native.robwalker.co</ListItem>
            <ListItem>Twitter - @robwalkerco</ListItem>
            <ListItem>Email - hi@robwalker.co</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
