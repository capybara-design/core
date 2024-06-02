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
  <div>
    <Input defaultValue="Disabled" disabled />
  </div>
  <div>
    <Input defaultValue="Readonly" readOnly />
  </div>
  <div>
    <Input defaultValue="Preview" preview />
  </div>
</div>;
```

## Compare with other libraries

| Features        | Capybara Design | Ant Design | Fusion Design | Material UI | React Bootstrap |
| --------------- | --------------- | ---------- | ------------- | ----------- | --------------- |
| `small` size    | ✅              | ✅         | ✅            | ✅          | ✅              |
| `medium` size   | ✅              | ✅         | ✅            | ✅          | ✅              |
| `large` size    | ✅              | ✅         | ✅            | ❌          | ✅              |
| `preview` mode  | ✅              | ❌         | ✅            | ❌          | ✅              |
| `success` state | ✅              | ✅         | ✅            | ✅          | ✅              |
| `error` state   | ✅              | ✅         | ✅            | ✅          | ✅              |
| `warning` state | ✅              | ✅         | ❌            | ❌          | ❌              |
