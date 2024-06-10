# Loader

## Standalone

```jsx
import { Loader } from '@capybara-design/core';

<Loader />;
```

## With Button and Input

```jsx
import { Button, Input, Loader, RowLayout } from '@capybara-design/core';

<RowLayout>
  <Input iconEnd={<Loader />} />
  <Button variant="fill" color="primary" iconStart={<Loader />}>
    Submit
  </Button>
</RowLayout>;
```
