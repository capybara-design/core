# ColumnLayout

## Default

```jsx filename="Default"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout style={{ width: 200 }}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

## Gap/Spacing

```jsx filename="Gap in pixels"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout gap={20} style={{ width: 200 }}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

```jsx filename="Gap in other units"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout gap="2rem" style={{ width: 200 }}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

## Horizontal align

```jsx filename="Horizontal align left/start"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout align="flex-start" style={{ width: 200 }}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

```jsx filename="Horizontal align right/end"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout align="flex-end" style={{ width: 200 }}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

```jsx filename="Horizontal stretch"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout align="stretch" style={{ width: 200 }}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```
