import { fireEvent, render, waitFor } from '@testing-library/react-native';
import SignIn from '../../src/screens/auth/SignIn';
import { ENTER_EMAIL, LOG_IN, PASSWORD } from '../../src/constants/Strings';

describe('SignIn Component', () => {
  test('should render email and password input fields', () => {
    const { getByPlaceholderText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );

    expect(getByPlaceholderText(ENTER_EMAIL)).toBeTruthy();
    expect(getByPlaceholderText(PASSWORD)).toBeTruthy();
  });

  test('should handle email input change', () => {
    const { getByPlaceholderText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );

    const emailInput = getByPlaceholderText(ENTER_EMAIL);
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });

  test('should handle password input change', () => {
    const { getByPlaceholderText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );

    const passwordInput = getByPlaceholderText(PASSWORD);
    fireEvent.changeText(passwordInput, 'password123');
    expect(passwordInput.props.value).toBe('password123');
  });

  test('should trigger navigation on valid input', async () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: mockNavigate }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), 'password123');
    fireEvent.press(getByText(LOG_IN));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Dashboard');
    });
  });

  test('should show error when email is empty', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), '');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), 'password123');
    fireEvent.press(getByText(LOG_IN));

    await waitFor(() => {
      expect(getByText('Email is required')).toBeTruthy();
    });
  });

  test('should show error when password is too short', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), '123');
    fireEvent.press(getByText(LOG_IN));

    await waitFor(() => {
      // Wait for error text to appear
      expect(getByText('Password must be at least 6 characters')).toBeTruthy();
    });
  });

  test('should show error when both fields are empty', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SignIn navigation={{ navigate: jest.fn() }} />
    );

    fireEvent.changeText(getByPlaceholderText(ENTER_EMAIL), '');
    fireEvent.changeText(getByPlaceholderText(PASSWORD), '');
    fireEvent.press(getByText(LOG_IN));

    await waitFor(() => {
      // Wait for error texts to appear
      expect(getByText('Email is required')).toBeTruthy();
      expect(getByText('Password is required')).toBeTruthy();
    });
  });
});
