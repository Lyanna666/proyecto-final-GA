import CustomButton from './customButton';
import { render, screen } from '@testing-library/react';

describe('CustomButton', () => {
  it('render custom buttom', () => {
    // When
    render(<CustomButton />);

    // Then
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
