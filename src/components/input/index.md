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
import { BiCheck2 } from 'react-bootstrap-icons-pro';

<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
  <div>
    <Input defaultValue="Normal" />
  </div>
  <div>
    <Input
      defaultValue="Success"
      state="success"
      iconEnd={<BiCheck2 style={{ color: 'var(--cd-color-success)' }} />}
    />
  </div>
  <div>
    <Input defaultValue="Warning" state="warning" />
  </div>
  <div>
    <Input defaultValue="Error" state="error" />
  </div>
</div>;
```
