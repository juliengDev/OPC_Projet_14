# React Modal Component

This homemade component provides a customizable modal interface that can be easily integrated into your React applications. You can control its visibility and appearance using props.

## Installation

You can install this component via npm:

```bash
npm install juliengilbertdev-modal
```

## Import the Counter component

```js
import { Modal } from "juliengilbertdev-modal";
```

## Usage

Here's how you can use the `Modal` component in your React application:

```jsx
import React from "react";
import { Modal } from "juliengilbertdev-modal";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mainTitle="My Modal Title"
        text="This is the content of the modal."
        icon="🎉"
        mainStyle={{ color: "blue", fontSize: "24px" }}
        textStyle={{ fontWeight: "bold" }}
      />
    </div>
  );
};

export default App;
```

## Props

- `isOpen` (`boolean`): Controls whether the modal is open or closed.
- `setIsOpen` (`function`): Function to toggle the `isOpen` state.
- `mainTitle` (`string`): Title text displayed in the modal header.
- `text` (`string`): Text content displayed in the modal body.
- `icon` (`string`, optional): Optional icon displayed alongside the `mainTitle`.
- `mainStyle` (`object`, optional): CSS styles for the main title.
- `textStyle` (`object`, optional): CSS styles for the text content.

These props allow you to customize the appearance and behavior of the `Modal` component within your React application.

Have fun 🙂
