import Imap from 'node-imap';

export const fetchFlightEmails = async (email, password) => {
  const imap = new Imap({
    user: email,
    password: password,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
  });

  return new Promise((resolve, reject) => {
    imap.once('ready', () => {
      imap.openBox('INBOX', true, (err, box) => {
        if (err) return reject(err);
        // Fetch emails and parse flight information here
        resolve([]);
      });
    });

    imap.once('error', err => reject(err));
    imap.connect();
  });
};
