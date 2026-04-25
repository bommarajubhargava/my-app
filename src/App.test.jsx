import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading with name', () => {
  render(<App />)
  expect(screen.getByText(/Hey, I am Bhargava/i)).toBeInTheDocument()
})

test('renders deployment subtext', () => {
  render(<App />)
  expect(screen.getByText(/This is my first CI\/CD deployment on AWS/i)).toBeInTheDocument()
})

// ❌ intentionally failing test - to demonstrate PR block
test('renders a button that does not exist', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
})

// ❌ intentionally failing test #2
test('renders a footer with contact info', () => {
  render(<App />)
  expect(screen.getByText(/contact@bhargava.com/i)).toBeInTheDocument()
})
