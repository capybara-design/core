# Input

## Sizes

```jsx
import { Input } from '@capybara-design/core';

<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
  <div>
    <Input placeholder="Small" size="small" />
  </div>
  <div>
    <Input placeholder="Medium (default)" />
  </div>
  <div>
    <Input placeholder="Large" size="large" />
  </div>
</div>;
```

## State

```jsx
import { Input } from '@capybara-design/core';

<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
  <div>
    <Input placeholder="Normal" />
  </div>
  <div>
    <Input placeholder="Success" state="success" />
  </div>
  <div>
    <Input placeholder="Warning" state="warning" />
  </div>
  <div>
    <Input placeholder="Error" state="error" />
  </div>
</div>;
```
