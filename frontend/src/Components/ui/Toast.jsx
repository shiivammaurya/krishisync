/**
 * Toast Component
 * Props:
 * - message: string
 */

function Toast({ message }) {
  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}

export default Toast;