import React from 'react';

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add form submission logic here
    alert('Form submitted!');
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>Email: contact@giftshop.com</p>
      <p>Phone: (123) 456-7890</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={styles.cell}>
                <label htmlFor="name">Name:</label>
              </td>
              <td style={styles.cell}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.cell}>
                <label htmlFor="email">Email:</label>
              </td>
              <td style={styles.cell}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.cell}>
                <label htmlFor="message">Message:</label>
              </td>
              <td style={styles.cell}>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  style={styles.textarea}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td style={styles.cell}></td>
              <td style={styles.cell}>
                <button
                  type="submit"
                  style={styles.button}
                >
                  Send Message
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Full height of the viewport
    padding: '20px',
    boxSizing: 'border-box',
  },
  form: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '600px', // Maximum width for larger screens
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  cell: {
    padding: '10px',
    verticalAlign: 'top',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ContactPage;
