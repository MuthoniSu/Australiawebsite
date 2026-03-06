import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import './ApplyForm.css';

export default function ApplyForm({ jobId }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [relocate, setRelocate] = useState('');
  const [language, setLanguage] = useState('');
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Generate a random application number like APP-123456
    const appNumber = `APP-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      if (!supabase || !import.meta.env.VITE_SUPABASE_URL) {
        throw new Error("Supabase is not configured. Check environment variables.");
      }

      const { error } = await supabase.from('applications').insert([{
        application_number: appNumber,
        email,
        phone,
        experience,
        relocate,
        language,
        status: 'Pending'
      }]);

      if (error) {
        console.error("Supabase Insertion Error:", error);
        throw error;
      }
      
      // Still trigger the email API independently if it exists
      fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, applicationNumber: appNumber }),
      }).catch(err => console.error("Email API slightly failed, but DB saved:", err));

      setStatus('sent');
    } catch (err) {
      console.error("Application submission failed:", err.message || err);
      setStatus('error');
    }
  };

  if (status === 'sent') return <p>Application submitted! We will be in touch.</p>;

  return (
    <form className="apply-form" onSubmit={submit}>
      <h3>Apply for this job</h3>
      <div>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Years of Experience:</label>
        <input
          type="text"
          required
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div>
        <label>Willing to Relocate?</label>
        <select required value={relocate} onChange={(e) => setRelocate(e.target.value)}>
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div>
        <label>Primary Language:</label>
        <input
          type="text"
          required
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>
      <button type="submit">Send application</button>
      {status === 'sending' && <p>Sending...</p>}
      {status === 'error' && <p className="error">Error submitting application.</p>}
    </form>
  );
}
