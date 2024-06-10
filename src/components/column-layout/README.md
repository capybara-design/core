# ColumnLayout

## Default

```jsx filename="Default"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

## Gap/Spacing

```jsx filename="Gap in pixels"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout gap={20}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

```jsx filename="Gap in other units"
import { Button, ColumnLayout } from '@capybara-design/core';

<ColumnLayout gap="2rem">
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</ColumnLayout>;
```

## Wrap

```jsx filename="Wrap"
import { Button, ColumnLayout } from '@capybara-design/core';

<div style={{ maxWidth: 300 }}>
  <ColumnLayout wrap>
    <Button size="small">Small Button</Button>
    <Button size="medium">Medium Button</Button>
    <Button size="large">Large Button</Button>
  </ColumnLayout>
</div>;
```
