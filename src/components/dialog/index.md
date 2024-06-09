# Dialog

## Non-modal dialog

The dialog doesn't have a overlay and won't prevent you from interacting with the rest of the page.

```jsx
import { useState } from 'react';
import { Dialog, DialogHeader, Button } from '@capybara-design/core';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader title="Dialog" />
      </Dialog>
    </div>
  );
}
```

## Modal dialog

The dialog has a overlay and prevent you from interacting with the rest of the page.

```jsx
import { useState } from 'react';
import { Dialog, DialogHeader, Button } from '@capybara-design/core';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} modal onClose={() => setOpen(false)}>
        <DialogHeader title="Dialog" />
      </Dialog>
    </div>
  );
}
```

## Subtitle

```jsx
import { useState } from 'react';
import { Dialog, DialogHeader, Button } from '@capybara-design/core';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} modal onClose={() => setOpen(false)}>
        <DialogHeader title="Dialog" subtitle="Description..." />
      </Dialog>
    </div>
  );
}
```
