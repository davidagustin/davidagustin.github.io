# EmailJS Setup Guide

## 🚀 What is EmailJS?

EmailJS is a service that allows you to send emails directly from your frontend JavaScript code without needing a backend server. It's perfect for portfolio websites and works reliably across all browsers and devices.

## 📋 Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (davidsyagustin@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
Portfolio Contact from {{from_name}}
```

**Email Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Portfolio Contact</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">New Portfolio Contact</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Contact Information</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
        </div>
        
        <div style="background-color: #fefefe; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Message</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
            <p>This message was sent from your portfolio contact form at <a href="https://davidagustin.github.io" style="color: #2563eb;">https://davidagustin.github.io</a></p>
        </div>
    </div>
</body>
</html>
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### 5. Update Your Code
Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Your public key

const result = await emailjs.send(
  'YOUR_SERVICE_ID', // Your service ID
  'YOUR_TEMPLATE_ID', // Your template ID
  templateParams,
  'YOUR_PUBLIC_KEY' // Your public key
);
```

## 🔧 Configuration Example

After setup, your code should look like this:

```typescript
// Initialize EmailJS
useEffect(() => {
  emailjs.init("user_abc123def456"); // Your actual public key
}, []);

// Send email
const result = await emailjs.send(
  'service_abc123', // Your actual service ID
  'template_xyz789', // Your actual template ID
  templateParams,
  'user_abc123def456' // Your actual public key
);
```

## ✅ Benefits of EmailJS

- **No Backend Required**: Works entirely from frontend
- **Cross-Browser Compatible**: Works on Chrome, Firefox, Safari, Edge
- **Mobile Friendly**: Works on all mobile devices
- **Professional Emails**: Beautiful HTML templates
- **Reliable Delivery**: Emails go directly to your inbox
- **Free Tier**: 200 emails per month (perfect for portfolio)

## 🎯 What You'll Get

When someone submits your contact form:
1. **Instant Delivery**: Email arrives in your inbox immediately
2. **Professional Format**: Beautiful HTML email with contact details
3. **No Browser Issues**: Works consistently across all platforms
4. **User Feedback**: Clear success/error messages
5. **Form Reset**: Form clears after successful submission

## 🔒 Security Notes

- Your public key is safe to expose in frontend code
- EmailJS handles authentication securely
- No sensitive credentials are exposed
- Rate limiting prevents spam

## 🚀 Next Steps

1. Follow the setup steps above
2. Replace the placeholder values in your code
3. Test the form on your local development server
4. Deploy to GitHub Pages
5. Test on live site

Your contact form will now work reliably across all browsers and devices! 🎉 