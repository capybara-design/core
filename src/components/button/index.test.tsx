import { render } from '@testing-library/react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Button } from '.';

describe('<Button>', () => {
  describe('component', () => {
    test('component="a"', () => {
      render(
        <Button component="a" href="/foo/bar">
          This is a link
        </Button>,
      );
    });

    test('component={Link}', () => {
      render(
        <BrowserRouter>
          <Button component={Link} to="/foo/bar">
            This is a React Router Link
          </Button>
        </BrowserRouter>,
      );
    });
  });
});
