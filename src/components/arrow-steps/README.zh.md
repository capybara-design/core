# ArrowSteps 箭型步骤条

## Static (non-selectable)

```jsx
import { ArrowSteps } from '@capybara-design/core';

<ArrowSteps
  current={1}
  items={[
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
    { label: 'Step 5' },
  ]}
/>;
```

## Interactive (selectable)

```jsx
import { useState } from 'react';
import { ArrowSteps } from '@capybara-design/core';

function App() {
  const [current, setCurrent] = useState(1);
  return (
    <ArrowSteps
      current={current}
      onChange={setCurrent}
      items={[
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' },
        { label: 'Step 4' },
        { label: 'Step 5' },
      ]}
    />
  );
}
```

## Flat cap

The start and end point of the steps bar become flat as you wish.

```jsx
import { ArrowSteps } from '@capybara-design/core';

<ArrowSteps
  current={1}
  items={[
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
    { label: 'Step 5' },
  ]}
  flatCap
/>;
```
