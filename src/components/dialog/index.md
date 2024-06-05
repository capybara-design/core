# Dialog

```jsx
import { useState } from 'react';
import { Dialog, Button } from '@capybara-design/core';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        Content
      </Dialog>
    </div>
  );
}
```
