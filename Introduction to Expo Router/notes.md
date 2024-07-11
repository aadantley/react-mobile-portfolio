# Expo Router

Video: <https://www.youtube.com/watch?v=ZG6GngLP3qo>

I am now using the blank template to avoid confusing myself by setting up a project with: `npx create-expo-app@latest <name> -t blank`.

The basic expo installation doesn't have the expo router. So we'd need to install a set of deps:

- expo-router
- react-native-safe-area-context
- react-native-screens
- expo-linking
- expo-constants
- expo-status-bar

All of these are needed.

Then some setup steps:

- change the entry point in `package.json`:

```json
{
  "name": "demo",
  "version": "1.0.0",
  "main": "expo-router/entry", // new
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~51.0.20",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.3"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
```

- add a deep linking scheme in your app configuration file `app.json`. Doesn't seem to matter as long as you name it something you'll remember:

```json
{
  "expo": {
    "name": "demo",
    "slug": "demo",
    "scheme": "demoScheme",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

These are the main two steps needed to change; then we should be ok.

## Project Updates

Then you're ready to run the project; he clears out a lot of the boilerplate to rebuild the app. I'm glad I didn't do that.

When you load the project after setting up expo-router like above, then adding the `app` directory is the next step.

You'll and an `index.js` file inside this app directory, and this will be the default or home screen. Refreshing the development server will show the components inside this `index.js` file.

we can see additional routes we create in the `app` directory in a web browser, but we need a link component to link the Home page to another page.

## Links

We can use Links to move between screens, as well as the `useRouter` hook to move between screens based on the `onPress` prop.

With the link component looks like:

```javascript
import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/about"}>
        <Text>Go to About Page</Text>
      </Link>
    </View>
  );
}
```

using the `useRouter` hook looks like:

```javascript
import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();
  return (
    <View>
      <Text>About page</Text>
      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
}
```

An alternative way to use a link with a button is:

```javascript
import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/about"}>
        <Text>Go to About Page</Text>
      </Link>
      <Link href={"/blog"} asChild>
        <Button title="Go to Blog Page" />
      </Link>
    </View>
  );
}
```

## App Bar

To create a bar for navigation, we'd want to add this into the `_layout.js` file for our application, within the `app` directory.

```javascript
//_layout.js

import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return <Stack />;
}
```

This simple addition will add a header for each page, showing the route (or filename) of the screen displayed. This `Stack` component has a customizable feature with:

```javascript
<Stack>
<Stack.Screen name='index' options={{headerTitle: 'Home'}} />
</Stack.Screen>
```

Where you can customize the name for each screen in the stack.

To have a customizable name for every route we've created, check out `_layout.js` file.

The customizable props within the `options` prop are similar to `react-navigation` options.

And you can als change the header style and header color by using `screenOptions` as sort of a style parameter. See the same file.

## Using The Router Hook

We can either get a router from defining one with `const router = useRouter();` as a hook, or we can import the _same_ router component with `import {router} from 'expo-router'` and this will come with the same functionality in both cases.

## Creating Modals and Other Presentation Types

With the Stack navigation, in the `_layout.js` file, you can update the options with the `presentation` prop which can define the transition from one page to another.

The video I watched showed how to use the `modal` presentation, but there are other options for this prop:

- modal: a card that pops up covering the whole screen, with rounded edges though, not going completely to the top.
- containedModal: a image a vertical scroll that brings the next page into view.
- containedTransparentModal: a modal that comes up the whole page but lies on top of the existing page; an overlay.
- formSheet: very much like the regular modal, but likely has some specific features for when a user is filling in information.
- fullScreenModal: seems really similar to the containedModal; can't tell what would be the difference in this case.

## Dynamic Routes

A dynamic route we create in the blog folder, and we make these dynamic route by titling a file with square brackets. We create `[id].js` as a dynamic route.

We can access the id as a parameter by using the `useLocalSearchParams` hook from `expo-router`. See the dynamic route file.

Here's the route below; make sure to _notice_ that you need to unpack or de-structure the useLocalSearchParams for this to work:

```javascript
import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Blog() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Blog Post Details: {id}</Text>
      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
}
```

We can also access the Stack _inside_ the component file to adjust the header of the page based on these dynamically rendered variables. See below:

```javascript
import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, router, Stack } from "expo-router";

export default function Blog() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />
      <View>
        <Text>Blog Post Details: {id}</Text>
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    </>
  );
}
```

This way we can use a dynamic route to render.

And we could also use multiple parameters in the routing like:

```javascript
import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Blog() {
  const router = useRouter();
  return (
    <View>
      <Text>Blog page</Text>
      <Button onPress={() => router.push("/blog/1")} title="Go blog 1" />
      <Button onPress={() => router.push("/blog/2")} title="Go blog 2" />
      <Button onPress={() => router.push("/blog/3")} title="Go blog 3" />
      <Button
        onPress={() => router.push("/blog/3?author=john")}
        title="Go blog 3 author search"
      />
      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
}
```

This could then be accessed from the local search parameters hook, and used in the details page JSX like:

```javascript
import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, router, Stack } from "expo-router";

export default function Blog() {
  const { id, author } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />
      <View>
        <Text>Blog Post Details: {id}</Text>
        {author ? <Text> Written By: {author}</Text> : null}
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    </>
  );
}
```

---

## Tab navigator

To do this, we create a folder called `(tabs)`. Within this you can create files for the tab navigation.

Then you can use a button to redirect to the `/(tabs)` directory from the index file:

```javascript
import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/about"}>
        <Text>Go to About Page</Text>
      </Link>
      <Link href={"/blog"}>
        <Text>Go to Blog Page</Text>
      </Link>
      <Link href={"/(tabs)"} asChild>
        <Button title="Go To Tabs" />
      </Link>
    </View>
  );
}
```

**NOTE**: If your `href` is to the `/(tabs)` directory, this will _not_ produce a screen, but an `Unmatched Route` error. You'll need to put in a route to a file _inside_ the tabs directory, like `/feed`:

```javascript
export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/about"}>
        <Text>Go to About Page</Text>
      </Link>
      <Link href={"/blog"}>
        <Text>Go to Blog Page</Text>
      </Link>
      <Link href={"/feed"} asChild>
        <Button title="Go To Tabs" />
      </Link>
    </View>
  );
}
```

Then within the `(tabs)` directory, we can create another layout (`_layout.js`) file to define the bottom tab navigators on these screens:

```javascript
//(tabs)/layout.js

import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return <Tabs />;
}
```

And we customize this similarly to how we customize the stack screens:

```javascript
import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: () => <Feather name="list" size={24} color="black" />,
          tabBarLabel: "Feed",
        }}
      />
    </Tabs>
  );
}
```

**NOTE**: also, if you make a file inside the `(tabs)` directory, and it does not show up as a tab, you may need to add content to that file. It seems that empty files are not recognized as tabs.

## Nesting Screens in the Tab Navigator

when you create a new screen file in the Tab navigator, you will always get a new tab icon unless you adjust something.

So to do this, we demo it by making a subfolder in (tabs) called `feed` to have an add post page.

To make sure all references are correct, we also have to update the Tab navigator Screen to reference `feed/index` instead of `feed:

```javascript
export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed/index"
        options={{
          tabBarIcon: () => <Feather name="list" size={24} color="black" />,
          tabBarLabel: "Feed",
        }}
      />
    </Tabs>
  );
}
```

To avoid this we need a new layout for just the `feed` directory screens:

```javascript
import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return <Stack />;
}
```

And then update the route for the feed screen in the layout for the entire tab navigator:

```javascript
import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed" // updated -- the route is no longer feed/index
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
          tabBarLabel: "Feed",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
```
